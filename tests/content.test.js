import test from "node:test";
import assert from "node:assert/strict";
import { PACK_IDS } from "../scripts/constants.js";
import { WEAPON_MALFUNCTION_CARDS } from "../scripts/data/cards/weapon-malfunctions.js";
import { buildGoblinEngineeringPacks } from "../scripts/data/packs.js";

test("dev.1 contains ten unique Weapon Malfunctions", () => {
  assert.equal(WEAPON_MALFUNCTION_CARDS.length, 10);
  assert.equal(new Set(WEAPON_MALFUNCTION_CARDS.map((card) => card.id)).size, 10);
  assert.equal(new Set(WEAPON_MALFUNCTION_CARDS.map((card) => card.fallbackTitle)).size, 10);
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

test("dev.1 includes the intended squeak and controlled positive side effect", () => {
  const squeak = WEAPON_MALFUNCTION_CARDS.find((card) => card.id.endsWith("wm-002-diagnostic-squeal"));
  const success = WEAPON_MALFUNCTION_CARDS.find((card) => card.id.endsWith("wm-007-successful-failure"));
  assert.equal(squeak.impact, "narrative");
  assert.match(squeak.fallbackDescription, /indignant squeak/i);
  assert.equal(success.tags.includes("benefit"), true);
  assert.match(success.fallbackDescription, /critical fumble itself remains a critical fumble/i);
});

test("pack construction reserves three independent pack identities", () => {
  const packs = buildGoblinEngineeringPacks();
  assert.equal(packs.length, 3);
  assert.deepEqual(packs.map((pack) => pack.id), [
    PACK_IDS.WEAPON_MALFUNCTIONS,
    PACK_IDS.RANGED_ENGINEERING,
    PACK_IDS.EQUIPMENT_INCIDENTS
  ]);
  assert.equal(packs[0].decks.attack.cards.length, 10);
  assert.equal(packs[0].enabled, true);
  assert.equal(packs[1].decks.attack.cards.length, 0);
  assert.equal(packs[1].enabled, false);
  assert.equal(packs[2].decks.attack.cards.length, 0);
  assert.equal(packs[2].enabled, false);
});
