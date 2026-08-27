import test from "node:test";
import assert from "node:assert/strict";
import { PACK_IDS } from "../scripts/constants.js";
import { WEAPON_MALFUNCTION_CARDS } from "../scripts/data/cards/weapon-malfunctions.js";
import { RANGED_ENGINEERING_CARDS } from "../scripts/data/cards/ranged-engineering.js";
import { EQUIPMENT_INCIDENT_CARDS } from "../scripts/data/cards/equipment-incidents.js";
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

test("pack construction exposes three active content packs", () => {
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
  assert.equal(packs[2].decks.skill.cards.length, 30);
  assert.equal(packs[2].metadata.implementedCards, 30);
  assert.equal(packs[2].enabled, true);
});

test("dev.9 completes Equipment Incidents with thirty cards in the dedicated skill deck", () => {
  assert.equal(EQUIPMENT_INCIDENT_CARDS.length, 30);
  assert.equal(new Set(EQUIPMENT_INCIDENT_CARDS.map((card) => card.id)).size, 30);
  assert.equal(new Set(EQUIPMENT_INCIDENT_CARDS.map((card) => card.fallbackTitle)).size, 30);
  for (const card of EQUIPMENT_INCIDENT_CARDS) {
    assert.equal(card.packId, PACK_IDS.EQUIPMENT_INCIDENTS);
    assert.equal(card.category, "skillCheckCriticalFailure");
    assert.equal(card.deckType, "skill");
    assert.equal(card.tone, "humorous");
    assert.equal(card.effect, null);
    assert.equal(card.filters.actionSlugs.length > 0, true, card.id);
  }
});

test("dev.7 Equipment Incidents remain in content batch one", () => {
  const batchOne = EQUIPMENT_INCIDENT_CARDS.filter((card) => card.metadata.contentBatch === 1);
  assert.equal(batchOne.length, 10);
  assert.deepEqual(batchOne.map((card) => card.id.split(".").at(-1)), [
    "ei-001-torque-limiter-enters-negotiations",
    "ei-002-spare-parts-form-a-committee",
    "ei-003-blueprint-adds-an-optional-disaster",
    "ei-004-measuring-tape-invents-a-unit",
    "ei-005-broken-pick-requests-promotion",
    "ei-006-lock-profile-accidentally-saved",
    "ei-007-safety-flag-deploys",
    "ei-008-probe-locks-fully-extended",
    "ei-009-bandage-dispenser-achieves-coverage",
    "ei-010-emergency-clamp-chooses-the-bag"
  ]);
});

test("dev.8 adds ten Equipment Incidents in content batch two", () => {
  const batchTwo = EQUIPMENT_INCIDENT_CARDS.filter((card) => card.metadata.contentBatch === 2);
  assert.equal(batchTwo.length, 10);
  assert.deepEqual(batchTwo.map((card) => card.id.split(".").at(-1)), [
    "ei-011-sterilizer-declares-victory",
    "ei-012-diagnostic-wheel-finds-a-new-symptom",
    "ei-013-dose-counter-wraps-around",
    "ei-014-extractor-cup-refuses-to-let-go",
    "ei-015-parts-tray-achieves-escape-velocity",
    "ei-016-toolbox-drawer-labels-everything",
    "ei-017-lockpick-case-deploys-everything",
    "ei-018-wire-spool-auto-deploys",
    "ei-019-emergency-splint-selects-the-operator",
    "ei-020-failure-analysis-actually-works"
  ]);
});

test("dev.9 adds the final ten Equipment Incidents in content batch three", () => {
  const batchThree = EQUIPMENT_INCIDENT_CARDS.filter((card) => card.metadata.contentBatch === 3);
  assert.equal(batchThree.length, 10);
  assert.deepEqual(batchThree.map((card) => card.id.split(".").at(-1)), [
    "ei-021-oil-can-achieves-total-coverage",
    "ei-022-workbench-vise-files-for-independence",
    "ei-023-reference-gauge-becomes-opinionated",
    "ei-024-tension-wrench-starts-counting",
    "ei-025-magnetic-organizer-finds-the-lock",
    "ei-026-continuity-tester-announces-everything",
    "ei-027-inspection-lamp-performs-a-flash-test",
    "ei-028-gauze-roll-establishes-a-perimeter",
    "ei-029-symptom-chart-adds-a-column",
    "ei-030-reagent-strip-overreacts"
  ]);
});

test("Equipment Incidents cover eight reviewed equipment-heavy skill actions", () => {
  const actions = new Set(EQUIPMENT_INCIDENT_CARDS.flatMap((card) => card.filters.actionSlugs));
  assert.deepEqual([...actions].sort(), [
    "administer-first-aid",
    "craft",
    "disable-a-device",
    "pick-a-lock",
    "repair",
    "treat-disease",
    "treat-poison",
    "treat-wounds"
  ]);
});

test("dev.7 preserves the normal PF2e critical-failure outcome in card text", () => {
  const bySuffix = (suffix) => EQUIPMENT_INCIDENT_CARDS.find((card) => card.id.endsWith(suffix));
  assert.match(bySuffix("ei-001-torque-limiter-enters-negotiations").fallbackDescription, /fails normally/i);
  assert.match(bySuffix("ei-003-blueprint-adds-an-optional-disaster").fallbackDescription, /normal loss of materials/i);
  assert.match(bySuffix("ei-005-broken-pick-requests-promotion").fallbackDescription, /broken tools/i);
  assert.match(bySuffix("ei-007-safety-flag-deploys").fallbackDescription, /triggering the mechanism/i);
  assert.match(bySuffix("ei-009-bandage-dispenser-achieves-coverage").fallbackDescription, /including its damage/i);
});

test("dev.7 includes bounded upside and narrative-only equipment incidents", () => {
  const bySuffix = (suffix) => EQUIPMENT_INCIDENT_CARDS.find((card) => card.id.endsWith(suffix));
  assert.equal(bySuffix("ei-006-lock-profile-accidentally-saved").tags.includes("benefit"), true);
  assert.equal(bySuffix("ei-009-bandage-dispenser-achieves-coverage").tags.includes("benefit"), true);
  for (const suffix of [
    "ei-002-spare-parts-form-a-committee",
    "ei-004-measuring-tape-invents-a-unit",
    "ei-005-broken-pick-requests-promotion",
    "ei-007-safety-flag-deploys"
  ]) {
    const card = bySuffix(suffix);
    assert.equal(card.impact, "narrative");
    assert.equal(card.tags.includes("no-mechanical-effect"), true);
    assert.match(card.fallbackDescription, /(no mechanical effect|no additional mechanical effect)/i);
  }
});


test("dev.8 preserves disease and poison critical-failure penalties while adding tool behavior", () => {
  const bySuffix = (suffix) => EQUIPMENT_INCIDENT_CARDS.find((card) => card.id.endsWith(suffix));
  assert.match(bySuffix("ei-011-sterilizer-declares-victory").fallbackDescription, /penalty to the patient's next saving throw/i);
  assert.match(bySuffix("ei-012-diagnostic-wheel-finds-a-new-symptom").fallbackDescription, /does not alter the disease saving-throw penalty/i);
  assert.match(bySuffix("ei-013-dose-counter-wraps-around").fallbackDescription, /penalty to the patient's next saving throw/i);
  assert.match(bySuffix("ei-014-extractor-cup-refuses-to-let-go").fallbackDescription, /Speed is reduced by 5 feet/i);
});

test("dev.8 adds new workbench, thieves-tool, and healer-tool mechanics", () => {
  const bySuffix = (suffix) => EQUIPMENT_INCIDENT_CARDS.find((card) => card.id.endsWith(suffix));
  assert.match(bySuffix("ei-015-parts-tray-achieves-escape-velocity").fallbackDescription, /up to 10 feet/i);
  assert.match(bySuffix("ei-017-lockpick-case-deploys-everything").fallbackDescription, /1 Interact action sorting/i);
  assert.match(bySuffix("ei-018-wire-spool-auto-deploys").fallbackDescription, /Speed is reduced by 5 feet/i);
  assert.match(bySuffix("ei-019-emergency-splint-selects-the-operator").fallbackDescription, /Medicine checks and Thievery checks/i);
  assert.equal(bySuffix("ei-020-failure-analysis-actually-works").tags.includes("benefit"), true);
});

test("dev.8 narrative Equipment Incidents remain mechanically harmless", () => {
  const bySuffix = (suffix) => EQUIPMENT_INCIDENT_CARDS.find((card) => card.id.endsWith(suffix));
  for (const suffix of [
    "ei-011-sterilizer-declares-victory",
    "ei-013-dose-counter-wraps-around",
    "ei-016-toolbox-drawer-labels-everything"
  ]) {
    const card = bySuffix(suffix);
    assert.equal(card.impact, "narrative");
    assert.equal(card.tags.includes("no-mechanical-effect"), true);
    assert.match(card.fallbackDescription, /(no mechanical effect|no additional mechanical effect)/i);
  }
});


test("dev.9 final Equipment Incidents preserve critical failures while broadening tool behavior", () => {
  const bySuffix = (suffix) => EQUIPMENT_INCIDENT_CARDS.find((card) => card.id.endsWith(suffix));
  assert.match(bySuffix("ei-021-oil-can-achieves-total-coverage").fallbackDescription, /normal critical failure/i);
  assert.equal(bySuffix("ei-023-reference-gauge-becomes-opinionated").tags.includes("benefit"), true);
  assert.match(bySuffix("ei-025-magnetic-organizer-finds-the-lock").fallbackDescription, /broken tools or a triggered mechanism/i);
  assert.match(bySuffix("ei-027-inspection-lamp-performs-a-flash-test").fallbackDescription, /dazzled until the start of your next turn/i);
  assert.match(bySuffix("ei-028-gauze-roll-establishes-a-perimeter").fallbackDescription, /difficult terrain/i);
  assert.match(bySuffix("ei-030-reagent-strip-overreacts").fallbackDescription, /does not alter or remove the saving-throw penalty/i);
});

test("dev.9 narrative Equipment Incidents remain mechanically harmless", () => {
  const bySuffix = (suffix) => EQUIPMENT_INCIDENT_CARDS.find((card) => card.id.endsWith(suffix));
  for (const suffix of [
    "ei-022-workbench-vise-files-for-independence",
    "ei-024-tension-wrench-starts-counting",
    "ei-026-continuity-tester-announces-everything",
    "ei-029-symptom-chart-adds-a-column"
  ]) {
    const card = bySuffix(suffix);
    assert.equal(card.impact, "narrative");
    assert.equal(card.tags.includes("no-mechanical-effect"), true);
    assert.match(card.fallbackDescription, /(no mechanical effect|no additional mechanical effect)/i);
  }
});
