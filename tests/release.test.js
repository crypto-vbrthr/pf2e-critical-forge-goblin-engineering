import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  MODULE_VERSION,
  REQUIRED_CRITICAL_FORGE_API_VERSION,
  REQUIRED_CRITICAL_FORGE_VERSION
} from "../scripts/constants.js";
import { GOBLIN_PACK_CONFIGS, buildGoblinEngineeringPacks } from "../scripts/data/packs.js";
import { WEAPON_MALFUNCTION_CARDS } from "../scripts/data/cards/weapon-malfunctions.js";
import { RANGED_ENGINEERING_CARDS } from "../scripts/data/cards/ranged-engineering.js";
import { EQUIPMENT_INCIDENT_CARDS } from "../scripts/data/cards/equipment-incidents.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const weightedShare = (cards, impact) => {
  const total = cards.reduce((sum, card) => sum + card.weight, 0);
  const band = cards.filter((card) => card.impact === impact).reduce((sum, card) => sum + card.weight, 0);
  return band / total;
};

test("release candidate metadata and Critical Forge baseline are synchronized", () => {
  assert.equal(MODULE_VERSION, "0.1.0-rc.1");
  assert.equal(REQUIRED_CRITICAL_FORGE_VERSION, ">=1.0.1-rc.6.1");
  assert.equal(REQUIRED_CRITICAL_FORGE_API_VERSION, ">=0.9.7");
  assert.equal(GOBLIN_PACK_CONFIGS.every((config) => config.metadata.contentStatus === "release-candidate"), true);
});

test("release candidate contains exactly three complete 30-card packs", () => {
  assert.equal(WEAPON_MALFUNCTION_CARDS.length, 30);
  assert.equal(RANGED_ENGINEERING_CARDS.length, 30);
  assert.equal(EQUIPMENT_INCIDENT_CARDS.length, 30);
  assert.equal(buildGoblinEngineeringPacks().reduce((sum, pack) => sum + Object.values(pack.decks).flatMap((deck) => deck.cards).length, 0), 90);
});

test("all 90 release titles and ids are unique", () => {
  const cards = [...WEAPON_MALFUNCTION_CARDS, ...RANGED_ENGINEERING_CARDS, ...EQUIPMENT_INCIDENT_CARDS];
  assert.equal(new Set(cards.map((card) => card.id)).size, 90);
  assert.equal(new Set(cards.map((card) => card.fallbackTitle)).size, 90);
});

test("strong attack incidents remain deliberately low-weight", () => {
  assert.ok(weightedShare(WEAPON_MALFUNCTION_CARDS, "strong") < 0.08);
  assert.ok(weightedShare(RANGED_ENGINEERING_CARDS, "strong") < 0.09);
  assert.equal(EQUIPMENT_INCIDENT_CARDS.some((card) => card.impact === "strong"), false);
});

test("narrative incidents remain a substantial part of ranged and equipment identity", () => {
  assert.ok(weightedShare(RANGED_ENGINEERING_CARDS, "narrative") > 0.45);
  assert.ok(weightedShare(EQUIPMENT_INCIDENT_CARDS, "narrative") > 0.45);
});

test("release documentation records review scope and 90-card freeze", () => {
  const review = fs.readFileSync(path.join(root, "docs/RELEASE_REVIEW.md"), "utf8");
  const roadmap = fs.readFileSync(path.join(root, "docs/CARD_ROADMAP.md"), "utf8");
  for (const phrase of ["90 cards", "1.0.1-rc.6.1", "Balance distribution", "Localization review", "Release conclusion"]) {
    assert.match(review, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
  assert.match(roadmap, /90 \/ 90 cards/i);
});

test("German release wording no longer excludes magical physical weapons", () => {
  const de = fs.readFileSync(path.join(root, "lang/de.json"), "utf8");
  assert.doesNotMatch(de, /nichtmagische Nahkampfwaffen/i);
  assert.doesNotMatch(de, /nichtmagische Fernkampfwaffen/i);
  assert.match(de, /Zauberangriffe und waffenlose Angriffe sind ausgeschlossen/);
});
