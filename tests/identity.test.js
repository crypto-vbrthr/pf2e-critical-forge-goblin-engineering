import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { WEAPON_MALFUNCTION_CARDS } from "../scripts/data/cards/weapon-malfunctions.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("card titles avoid direct duplicates documented in supplied packs", () => {
  const knownTitles = new Set([
    "Weapon Jolt", "Tangled Feet", "Open Flank", "Wild Swing", "Grand Gesture",
    "Slippery Grip", "Weapon Out of Line", "Awkward Regrip", "Forced Reset",
    "Ammunition Argument", "Bad Release", "Recoil Stumble", "Shaky Aim"
  ]);
  for (const card of WEAPON_MALFUNCTION_CARDS) assert.equal(knownTitles.has(card.fallbackTitle), false, card.fallbackTitle);
});

test("overlap review documents the main neighboring packs", () => {
  const review = fs.readFileSync(path.join(root, "docs/OVERLAP_REVIEW.md"), "utf8");
  for (const heading of ["Critical Forge Core", "Martial Consequences", "Ranged Mishaps", "Arsenal", "Arcane Backlash", "Against All Odds"]) {
    assert.match(review, new RegExp(heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});
