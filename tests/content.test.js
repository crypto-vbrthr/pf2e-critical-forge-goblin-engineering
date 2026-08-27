import test from "node:test";
import assert from "node:assert/strict";
import { PACK_IDS } from "../scripts/constants.js";
import { WEAPON_MALFUNCTION_CARDS } from "../scripts/data/cards/weapon-malfunctions.js";
import { RANGED_ENGINEERING_CARDS } from "../scripts/data/cards/ranged-engineering.js";
import { buildGoblinEngineeringPacks } from "../scripts/data/packs.js";

test("dev.6 retains thirty unique Weapon Malfunctions", () => {
  assert.equal(WEAPON_MALFUNCTION_CARDS.length, 30);
  assert.equal(new Set(WEAPON_MALFUNCTION_CARDS.map((card) => card.id)).size, 30);
  assert.equal(new Set(WEAPON_MALFUNCTION_CARDS.map((card) => card.fallbackTitle)).size, 30);
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



test("dev.3 adds the final ten cards in content batch three", () => {
  const batchThree = WEAPON_MALFUNCTION_CARDS.filter((card) => card.metadata.contentBatch === 3);
  assert.equal(batchThree.length, 10);
  assert.deepEqual(batchThree.map((card) => card.id.split(".").at(-1)), [
    "wm-021-quality-assurance-stamp",
    "wm-022-auxiliary-hook-deployment",
    "wm-023-automatic-parry-mode",
    "wm-024-field-repair-configuration",
    "wm-025-counterthrust-system-activates",
    "wm-026-operator-feedback-chime",
    "wm-027-balance-indicator-lights",
    "wm-028-emergency-bracing-foot",
    "wm-029-automatic-disassembly-demonstration",
    "wm-030-instruction-manual-escapes"
  ]);
});

test("dev.3 completes the deck with item-centered mixed mechanics", () => {
  const bySuffix = (suffix) => WEAPON_MALFUNCTION_CARDS.find((card) => card.id.endsWith(suffix));
  assert.match(bySuffix("wm-022-auxiliary-hook-deployment").fallbackDescription, /trip trait/i);
  assert.match(bySuffix("wm-023-automatic-parry-mode").fallbackDescription, /bonus to AC/i);
  assert.match(bySuffix("wm-024-field-repair-configuration").fallbackDescription, /Crafting check/i);
  assert.match(bySuffix("wm-025-counterthrust-system-activates").fallbackDescription, /moved 5 feet directly away/i);
  assert.match(bySuffix("wm-027-balance-indicator-lights").fallbackDescription, /move trait/i);
  assert.match(bySuffix("wm-028-emergency-bracing-foot").fallbackDescription, /Speed is reduced by 5 feet/i);
  assert.match(bySuffix("wm-029-automatic-disassembly-demonstration").fallbackDescription, /access panel pops free/i);
});

test("dev.3 narrative incidents remain mechanically harmless", () => {
  for (const suffix of [
    "wm-021-quality-assurance-stamp",
    "wm-026-operator-feedback-chime",
    "wm-030-instruction-manual-escapes"
  ]) {
    const card = WEAPON_MALFUNCTION_CARDS.find((entry) => entry.id.endsWith(suffix));
    assert.equal(card.impact, "narrative");
    assert.equal(card.tags.includes("no-mechanical-effect"), true);
    assert.match(card.fallbackDescription, /no mechanical effect/i);
  }
});

test("dev.6 completes thirty unique Ranged Engineering cards", () => {
  assert.equal(RANGED_ENGINEERING_CARDS.length, 30);
  assert.equal(new Set(RANGED_ENGINEERING_CARDS.map((card) => card.id)).size, 30);
  assert.equal(new Set(RANGED_ENGINEERING_CARDS.map((card) => card.fallbackTitle)).size, 30);
});

test("dev.4 Ranged Engineering batch one remains intact", () => {
  const batchOne = RANGED_ENGINEERING_CARDS.filter((card) => card.metadata.contentBatch === 1);
  assert.equal(batchOne.length, 10);
  assert.deepEqual(batchOne.map((card) => card.id.split(".").at(-1)), [
    "re-001-helpful-auto-loader",
    "re-002-safety-arc-projector",
    "re-003-ammunition-counter-panic",
    "re-004-recoil-absorber-overachieves",
    "re-005-range-tape-escapes",
    "re-006-payload-door-stuck-open",
    "re-007-string-tension-governor",
    "re-008-pressure-gauge-redlines",
    "re-009-projectile-return-protocol",
    "re-010-trajectory-printer"
  ]);
});

test("dev.5 adds ten cards in Ranged Engineering batch two", () => {
  const batchTwo = RANGED_ENGINEERING_CARDS.filter((card) => card.metadata.contentBatch === 2);
  assert.equal(batchTwo.length, 10);
  assert.deepEqual(batchTwo.map((card) => card.id.split(".").at(-1)), [
    "re-011-emergency-close-quarters-attachment",
    "re-012-double-feed-optimizer",
    "re-013-trigger-apology-protocol",
    "re-014-windage-knob-comes-off",
    "re-015-emergency-ear-protection",
    "re-016-string-silencer-inflates",
    "re-017-pouch-stabilizer-locks",
    "re-018-retrieval-reel-overcommits",
    "re-019-ammunition-inspector",
    "re-020-self-zeroing-sight-overachieves"
  ]);
});

test("dev.6 adds the final ten cards in Ranged Engineering batch three", () => {
  const batchThree = RANGED_ENGINEERING_CARDS.filter((card) => card.metadata.contentBatch === 3);
  assert.equal(batchThree.length, 10);
  assert.deepEqual(batchThree.map((card) => card.id.split(".").at(-1)), [
    "re-021-spark-arrestor-gives-up",
    "re-022-string-wax-applicator-goes-wild",
    "re-023-heavy-payload-selector",
    "re-024-sight-hood-becomes-sunshade",
    "re-025-emergency-optics-washer",
    "re-026-observation-stock-extends",
    "re-027-projectile-serial-numberer",
    "re-028-brass-catcher-files-a-report",
    "re-029-maintenance-ticket-printer",
    "re-030-compact-storage-mode"
  ]);
});

test("dev.6 completes Ranged Engineering with additional equipment-centered mechanics", () => {
  const bySuffix = (suffix) => RANGED_ENGINEERING_CARDS.find((card) => card.id.endsWith(suffix));
  assert.deepEqual(bySuffix("re-021-spark-arrestor-gives-up").filters.weaponGroups, ["firearm"]);
  assert.match(bySuffix("re-021-spark-arrestor-gives-up").fallbackDescription, /dazzled/i);
  assert.deepEqual(bySuffix("re-022-string-wax-applicator-goes-wild").filters.weaponGroups, ["bow"]);
  assert.match(bySuffix("re-023-heavy-payload-selector").fallbackDescription, /3 additional circumstance damage/i);
  assert.match(bySuffix("re-024-sight-hood-becomes-sunshade").fallbackDescription, /visual effects/i);
  assert.match(bySuffix("re-025-emergency-optics-washer").fallbackDescription, /overspray makes you dazzled/i);
  assert.match(bySuffix("re-026-observation-stock-extends").fallbackDescription, /Perception checks to Seek/i);
  assert.match(bySuffix("re-030-compact-storage-mode").fallbackDescription, /compact storage mode/i);
});

test("dev.6 narrative ranged incidents remain mechanically harmless", () => {
  for (const suffix of [
    "re-027-projectile-serial-numberer",
    "re-028-brass-catcher-files-a-report",
    "re-029-maintenance-ticket-printer"
  ]) {
    const card = RANGED_ENGINEERING_CARDS.find((entry) => entry.id.endsWith(suffix));
    assert.equal(card.impact, "narrative");
    assert.equal(card.tags.includes("no-mechanical-effect"), true);
    assert.match(card.fallbackDescription, /no mechanical effect/i);
  }
});

test("Ranged Engineering stays in non-spell ranged weapon fumble contexts", () => {
  for (const card of RANGED_ENGINEERING_CARDS) {
    assert.equal(card.packId, PACK_IDS.RANGED_ENGINEERING);
    assert.equal(card.category, "criticalFumble");
    assert.equal(card.deckType, "attack");
    assert.equal(card.tone, "humorous");
    assert.equal(card.filters.attackTraits.includes("ranged"), true, card.id);
    assert.equal(card.filters.attackTraits.includes("melee"), false, card.id);
    assert.equal(card.filters.excludedAttackTraits.includes("spell"), true, card.id);
    assert.equal(card.filters.excludedAttackTraits.includes("unarmed"), true, card.id);
    assert.equal(card.filters.excludedAttackTraits.includes("ranged"), false, card.id);
    assert.equal(card.effect, null, card.id);
  }
});

test("dev.4 includes hardware-specific and narrative ranged incidents", () => {
  const bySuffix = (suffix) => RANGED_ENGINEERING_CARDS.find((card) => card.id.endsWith(suffix));
  assert.match(bySuffix("re-001-helpful-auto-loader").fallbackDescription, /Reload action/i);
  assert.match(bySuffix("re-002-safety-arc-projector").fallbackDescription, /adjacent to one of your allies/i);
  assert.match(bySuffix("re-004-recoil-absorber-overachieves").fallbackDescription, /does not trigger enemy reactions/i);
  assert.deepEqual(bySuffix("re-006-payload-door-stuck-open").filters.weaponGroups, ["bow", "firearm", "sling"]);
  assert.deepEqual(bySuffix("re-007-string-tension-governor").filters.weaponGroups, ["bow"]);
  assert.deepEqual(bySuffix("re-008-pressure-gauge-redlines").filters.weaponGroups, ["firearm"]);
  assert.match(bySuffix("re-009-projectile-return-protocol").fallbackDescription, /lands at your feet/i);
});

test("dev.4 narrative ranged incidents remain mechanically harmless", () => {
  for (const suffix of [
    "re-003-ammunition-counter-panic",
    "re-005-range-tape-escapes",
    "re-010-trajectory-printer"
  ]) {
    const card = RANGED_ENGINEERING_CARDS.find((entry) => entry.id.endsWith(suffix));
    assert.equal(card.impact, "narrative");
    assert.equal(card.tags.includes("no-mechanical-effect"), true);
    assert.match(card.fallbackDescription, /no mechanical effect/i);
  }
});

test("dev.5 broadens Ranged Engineering with hardware-specific mixed outcomes", () => {
  const bySuffix = (suffix) => RANGED_ENGINEERING_CARDS.find((card) => card.id.endsWith(suffix));
  assert.deepEqual(bySuffix("re-011-emergency-close-quarters-attachment").filters.weaponGroups, ["bow", "firearm"]);
  assert.match(bySuffix("re-011-emergency-close-quarters-attachment").fallbackDescription, /Shove/i);
  assert.match(bySuffix("re-012-double-feed-optimizer").fallbackDescription, /additional piece of ordinary ammunition/i);
  assert.deepEqual(bySuffix("re-015-emergency-ear-protection").filters.weaponGroups, ["firearm"]);
  assert.match(bySuffix("re-015-emergency-ear-protection").fallbackDescription, /deafened/i);
  assert.deepEqual(bySuffix("re-016-string-silencer-inflates").filters.weaponGroups, ["bow"]);
  assert.deepEqual(bySuffix("re-017-pouch-stabilizer-locks").filters.weaponGroups, ["sling"]);
  assert.match(bySuffix("re-018-retrieval-reel-overcommits").fallbackDescription, /off-guard/i);
  assert.match(bySuffix("re-020-self-zeroing-sight-overachieves").fallbackDescription, /sight flips backward/i);
});

test("dev.5 narrative ranged incidents remain mechanically harmless", () => {
  for (const suffix of [
    "re-013-trigger-apology-protocol",
    "re-014-windage-knob-comes-off",
    "re-019-ammunition-inspector"
  ]) {
    const card = RANGED_ENGINEERING_CARDS.find((entry) => entry.id.endsWith(suffix));
    assert.equal(card.impact, "narrative");
    assert.equal(card.tags.includes("no-mechanical-effect"), true);
    assert.match(card.fallbackDescription, /no mechanical effect/i);
  }
});

test("pack construction exposes two active content packs and one reserved pack", () => {
  const packs = buildGoblinEngineeringPacks();
  assert.equal(packs.length, 3);
  assert.deepEqual(packs.map((pack) => pack.id), [
    PACK_IDS.WEAPON_MALFUNCTIONS,
    PACK_IDS.RANGED_ENGINEERING,
    PACK_IDS.EQUIPMENT_INCIDENTS
  ]);
  assert.equal(packs[0].decks.attack.cards.length, 30);
  assert.equal(packs[0].metadata.implementedCards, 30);
  assert.equal(packs[0].enabled, true);
  assert.equal(packs[1].decks.attack.cards.length, 30);
  assert.equal(packs[1].metadata.implementedCards, 30);
  assert.equal(packs[1].enabled, true);
  assert.equal(packs[2].decks.attack.cards.length, 0);
  assert.equal(packs[2].enabled, false);
});
