import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { WEAPON_MALFUNCTION_CARDS } from "../scripts/data/cards/weapon-malfunctions.js";
import { RANGED_ENGINEERING_CARDS } from "../scripts/data/cards/ranged-engineering.js";
import { EQUIPMENT_INCIDENT_CARDS } from "../scripts/data/cards/equipment-incidents.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const RANGED_NEIGHBOR_TITLES = new Set([
  "Bad Release", "Exposed Position", "Recoil Stumble", "Sightline Lost", "String Burn", "Shaky Aim",
  "Lost Sightline", "Revealing Shot", "Awkward Release", "Broken Firing Rhythm", "Forced Reposition",
  "Target Finds Cover", "Poor Follow-Through", "Obstructed Arc", "Exposed to Return Fire", "Misjudged Distance",
  "Ducking Lesson", "Closing the Distance", "Borrowed Silhouette", "Follow the Shot", "Read the Angle",
  "Dead Ground", "A Very Encouraging Miss", "Scenic Detour", "Helpful Warning", "Range Found",
  "Shield, Meet Warning", "Look Over There", "Committed Aim", "Friendly Fire Drill", "Inside the Arc",
  "Ammunition Argument", "Heckler's Range", "Scatter Formation", "Dust Signature", "Return Address Included"
]);

test("Weapon Malfunction titles avoid direct duplicates documented in supplied packs", () => {
  const knownTitles = new Set([
    "Weapon Jolt", "Tangled Feet", "Open Flank", "Wild Swing", "Grand Gesture",
    "Slippery Grip", "Weapon Out of Line", "Awkward Regrip", "Forced Reset",
    ...RANGED_NEIGHBOR_TITLES
  ]);
  for (const card of WEAPON_MALFUNCTION_CARDS) assert.equal(knownTitles.has(card.fallbackTitle), false, card.fallbackTitle);
});

test("Ranged Engineering titles do not duplicate Core or Ranged Mishaps", () => {
  for (const card of RANGED_ENGINEERING_CARDS) {
    assert.equal(RANGED_NEIGHBOR_TITLES.has(card.fallbackTitle), false, card.fallbackTitle);
  }
});

test("overlap review documents the main neighboring packs and all three ranged comparison blocks", () => {
  const review = fs.readFileSync(path.join(root, "docs/OVERLAP_REVIEW.md"), "utf8");
  for (const heading of ["Critical Forge Core", "Martial Consequences", "Ranged Mishaps", "Arsenal", "Arcane Backlash", "Against All Odds"]) {
    assert.match(review, new RegExp(heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  for (const title of ["Helpful Auto-Loader", "Ammunition Argument", "Recoil Stumble", "Pressure Gauge Redlines", "Double-Feed Optimizer", "Retrieval Reel Overcommits", "Spark Arrestor Gives Up", "Compact Storage Mode"]) {
    assert.match(review, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
});


test("Equipment Incident titles are unique and preserve the equipment-centered identity", () => {
  const allNeighborTitles = new Set([
    ...RANGED_NEIGHBOR_TITLES,
    ...WEAPON_MALFUNCTION_CARDS.map((card) => card.fallbackTitle),
    ...RANGED_ENGINEERING_CARDS.map((card) => card.fallbackTitle)
  ]);
  assert.equal(new Set(EQUIPMENT_INCIDENT_CARDS.map((card) => card.fallbackTitle)).size, 20);
  for (const card of EQUIPMENT_INCIDENT_CARDS) {
    assert.equal(allNeighborTitles.has(card.fallbackTitle), false, card.fallbackTitle);
  }
});

test("overlap review documents the Equipment Incidents rules boundary", () => {
  const review = fs.readFileSync(path.join(root, "docs/OVERLAP_REVIEW.md"), "utf8");
  for (const phrase of ["Equipment Incidents I review", "Equipment Incidents II review", "Repair", "Craft", "Pick a Lock", "Disable a Device", "Treat Wounds", "Administer First Aid", "Treat Disease", "Treat Poison", "rc.6.1"]) {
    assert.match(review, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
});
