import test from "node:test";
import assert from "node:assert/strict";
import { PACK_IDS } from "../scripts/constants.js";
import { WEAPON_MALFUNCTION_CARDS } from "../scripts/data/cards/weapon-malfunctions.js";
import { buildGoblinEngineeringPacks } from "../scripts/data/packs.js";

test("dev.2 contains twenty unique Weapon Malfunctions", () => {
  assert.equal(WEAPON_MALFUNCTION_CARDS.length, 20);
  assert.equal(new Set(WEAPON_MALFUNCTION_CARDS.map((card) => card.id)).size, 20);
  assert.equal(new Set(WEAPON_MALFUNCTION_CARDS.map((card) => card.fallbackTitle)).size, 20);
});

test("Weapon Malfunctions stay in non-spell melee weapon fumble contexts", () => {
  for (const card of WEAPON_MALFUNCTION_CARDS) {
    assert.equal(card.packId, PACK_IDS.WEAPON_MALFUNCTIONS);
    assert.equal(card.category, "criticalFumble");
    assert.equal(card.deckType, "attack");
    assert.equal(card.tone, "humorous");
    assert.equal(card.filters.attackTraits.includes("melee"), true, card.id);
    assert.equal(card.filters.excludedAttackTraits.includes("spell"), true, card.id);
    assert.equal(card.filters.excludedAttackTraits.includes("unarmed"), true, card.id);
    assert.equal(card.filters.excludedAttackTraits.includes("ranged"), true, card.id);
    assert.equal(card.effect, null, card.id);
  }
});

test("the original squeak and controlled positive side effect remain present", () => {
  const squeak = WEAPON_MALFUNCTION_CARDS.find((card) => card.id.endsWith("wm-002-diagnostic-squeal"));
  const success = WEAPON_MALFUNCTION_CARDS.find((card) => card.id.endsWith("wm-007-successful-failure"));
  assert.equal(squeak.impact, "narrative");
  assert.match(squeak.fallbackDescription, /indignant squeak/i);
  assert.equal(success.tags.includes("benefit"), true);
  assert.match(success.fallbackDescription, /critical fumble itself remains a critical fumble/i);
});

test("dev.2 adds ten cards in content batch two", () => {
  const batchTwo = WEAPON_MALFUNCTION_CARDS.filter((card) => card.metadata.contentBatch === 2);
  assert.equal(batchTwo.length, 10);
  assert.deepEqual(batchTwo.map((card) => card.id.split(".").at(-1)), [
    "wm-011-safety-cap-deployed",
    "wm-012-target-recognition-loop",
    "wm-013-resonance-calibration",
    "wm-014-this-lever-wasnt-here-before",
    "wm-015-load-bearing-question-mark",
    "wm-016-field-service-hatch",
    "wm-017-emergency-illumination",
    "wm-018-auxiliary-reach-extension",
    "wm-019-incorrect-damage-mode",
    "wm-020-warranty-void"
  ]);
});

test("dev.2 broadens malfunction mechanics beyond generic penalties", () => {
  const bySuffix = (suffix) => WEAPON_MALFUNCTION_CARDS.find((card) => card.id.endsWith(suffix));
  assert.match(bySuffix("wm-011-safety-cap-deployed").fallbackDescription, /nonlethal damage/i);
  assert.match(bySuffix("wm-012-target-recognition-loop").fallbackDescription, /same creature again/i);
  assert.match(bySuffix("wm-014-this-lever-wasnt-here-before").fallbackDescription, /roll 1d2/i);
  assert.match(bySuffix("wm-015-load-bearing-question-mark").fallbackDescription, /DC 5 flat check/i);
  assert.match(bySuffix("wm-018-auxiliary-reach-extension").fallbackDescription, /increase your reach/i);
  assert.match(bySuffix("wm-019-incorrect-damage-mode").fallbackDescription, /bludgeoning damage/i);
});

test("dev.2 keeps narrative incidents mechanically harmless", () => {
  for (const suffix of ["wm-016-field-service-hatch", "wm-020-warranty-void"]) {
    const card = WEAPON_MALFUNCTION_CARDS.find((entry) => entry.id.endsWith(suffix));
    assert.equal(card.impact, "narrative");
    assert.equal(card.tags.includes("no-mechanical-effect"), true);
    assert.match(card.fallbackDescription, /no mechanical effect/i);
  }
});

test("pack construction reserves three independent pack identities", () => {
  const packs = buildGoblinEngineeringPacks();
  assert.equal(packs.length, 3);
  assert.deepEqual(packs.map((pack) => pack.id), [
    PACK_IDS.WEAPON_MALFUNCTIONS,
    PACK_IDS.RANGED_ENGINEERING,
    PACK_IDS.EQUIPMENT_INCIDENTS
  ]);
  assert.equal(packs[0].decks.attack.cards.length, 20);
  assert.equal(packs[0].metadata.implementedCards, 20);
  assert.equal(packs[0].enabled, true);
  assert.equal(packs[1].decks.attack.cards.length, 0);
  assert.equal(packs[1].enabled, false);
  assert.equal(packs[2].decks.attack.cards.length, 0);
  assert.equal(packs[2].enabled, false);
});
