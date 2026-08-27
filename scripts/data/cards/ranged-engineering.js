import { defineRangedEngineering } from "./card-factory.js";

export const RANGED_ENGINEERING_CARDS = Object.freeze([
  defineRangedEngineering({
    id: "re-001-helpful-auto-loader",
    localizationKey: "HelpfulAutoLoader",
    impact: "light",
    weight: 0.55,
    fallbackTitle: "Helpful Auto-Loader",
    fallbackDescription: "The mechanism responds to the failed shot by becoming aggressively helpful. After your next Strike with this same weapon before the end of your next turn, if the weapon normally requires a Reload action and you have appropriate ammunition available, it immediately completes one normal Reload without requiring an action. Ammunition is consumed normally. If the weapon cannot be reloaded this way, a tiny spring deploys, salutes, and retracts with no mechanical effect. The original critical fumble remains a critical fumble.",
    tags: ["benefit", "reload", "same-weapon", "after-strike", "mixed-result"]
  }),
  defineRangedEngineering({
    id: "re-002-safety-arc-projector",
    localizationKey: "SafetyArcProjector",
    impact: "moderate",
    fallbackTitle: "Safety Arc Projector",
    fallbackDescription: "A tiny warning lamp begins scanning for friend-shaped objects. Until the end of your next turn, this weapon refuses to make a ranged Strike against a creature adjacent to one of your allies. Before making such a Strike, you can spend 1 Interact action to override the projector and end this consequence. Against other targets, the weapon functions normally and looks extremely pleased with itself.",
    tags: ["safety", "ally-adjacency", "interact", "same-weapon", "target-restriction"]
  }),
  defineRangedEngineering({
    id: "re-003-ammunition-counter-panic",
    localizationKey: "AmmunitionCounterPanic",
    impact: "narrative",
    weight: 1.4,
    fallbackTitle: "Ammunition Counter Panic",
    fallbackDescription: "A dial, tally wheel, etched mark, or entirely unnecessary display announces that the weapon contains MINUS ONE shots. There is no mechanical effect. Reloading it changes the display to MINUS TWO, which appears to calm the mechanism considerably.",
    tags: ["narrative", "ammunition", "counter", "no-mechanical-effect"]
  }),
  defineRangedEngineering({
    id: "re-004-recoil-absorber-overachieves",
    localizationKey: "RecoilAbsorberOverachieves",
    impact: "light",
    weight: 0.8,
    fallbackTitle: "Recoil Absorber Overachieves",
    fallbackDescription: "The weapon decides recoil is a design flaw and removes rather too much enthusiasm from the next shot. Your next ranged Strike with this same weapon before the end of your next turn deals 2 less damage on a hit, to a minimum of 0. However, that Strike does not trigger enemy reactions whose trigger is specifically your use of a ranged attack. The consequence ends after the Strike.",
    tags: ["damage-reduction", "reaction-protection", "mixed-result", "same-weapon", "one-use"]
  }),
  defineRangedEngineering({
    id: "re-005-range-tape-escapes",
    localizationKey: "RangeTapeEscapes",
    impact: "narrative",
    weight: 1.4,
    fallbackTitle: "Range Tape Escapes",
    fallbackDescription: "A measuring tape shoots out of the weapon, points accusingly toward the target, retracts, and presents a tiny result window reading FAR ENOUGH. There is no mechanical effect. Measuring the actual distance does not change its opinion.",
    tags: ["narrative", "rangefinder", "measurement", "no-mechanical-effect"]
  }),
  defineRangedEngineering({
    id: "re-006-payload-door-stuck-open",
    localizationKey: "PayloadDoorStuckOpen",
    impact: "moderate",
    fallbackTitle: "Payload Door Stuck Open",
    fallbackDescription: "An access panel flips open and exposes a mechanism that has suddenly become extremely conservative about ammunition. Until the end of your next turn, any ammunition you load or select for this weapon must be ordinary, non-magical, and non-alchemical. Ammunition already loaded when this consequence begins is unaffected. You can spend 1 Interact action to latch the panel and end this consequence.",
    tags: ["ammunition", "special-ammunition", "interact", "same-weapon", "manual-removal"],
    filters: { weaponGroups: ["bow", "firearm", "sling"] }
  }),
  defineRangedEngineering({
    id: "re-007-string-tension-governor",
    localizationKey: "StringTensionGovernor",
    impact: "moderate",
    weight: 0.8,
    fallbackTitle: "String Tension Governor",
    fallbackDescription: "A governor clamps onto the string, cable, or prod and proudly selects EFFICIENT MODE. Your next ranged Strike with this same weapon before the end of your next turn gains a +1 circumstance bonus to its attack roll but deals 2 less damage on a hit, to a minimum of 0. You can spend 1 Interact action before the Strike to restore normal tension and end this consequence instead.",
    tags: ["bow", "attack-roll", "damage-reduction", "mixed-result", "interact", "same-weapon", "one-use"],
    filters: { weaponGroups: ["bow"] }
  }),
  defineRangedEngineering({
    id: "re-008-pressure-gauge-redlines",
    localizationKey: "PressureGaugeRedlines",
    impact: "strong",
    weight: 0.45,
    fallbackTitle: "Pressure Gauge Redlines",
    fallbackDescription: "A pressure gauge that may not have existed a moment ago swings into the red and begins vibrating with confidence. Before your next ranged Strike with this same firearm before the end of your next turn, choose one: spend 1 Interact action to vent the pressure and Strike normally, or fire without venting. If you fire without venting, the Strike deals 2 additional damage on a hit, and after it resolves you are deafened until the start of your next turn. The firearm is not damaged either way.",
    tags: ["firearm", "pressure", "damage", "deafened", "choice", "interact", "same-weapon", "one-use"],
    filters: { weaponGroups: ["firearm"] }
  }),
  defineRangedEngineering({
    id: "re-009-projectile-return-protocol",
    localizationKey: "ProjectileReturnProtocol",
    impact: "light",
    weight: 0.65,
    fallbackTitle: "Projectile Return Protocol",
    fallbackDescription: "The weapon activates a retrieval feature with suspiciously optimistic timing. If your next ranged Strike with this same weapon before the end of your next turn misses, a thrown weapon lands at your feet instead of wherever it would otherwise come to rest. Ordinary recoverable ammunition instead lands in your space in recoverable condition. If the Strike hits, the protocol accomplishes nothing and quietly pretends it was never enabled.",
    tags: ["benefit", "projectile", "thrown", "ammunition", "same-weapon", "one-use", "mixed-result"]
  }),
  defineRangedEngineering({
    id: "re-010-trajectory-printer",
    localizationKey: "TrajectoryPrinter",
    impact: "narrative",
    weight: 1.4,
    fallbackTitle: "Trajectory Printer",
    fallbackDescription: "A narrow strip of paper emerges from the weapon showing an elaborate diagram of the failed shot. There is no mechanical effect. The diagram is labeled EXPECTED TRAJECTORY and depicts a completely different direction. After your next ranged Strike, the printer adds the note WITHIN TOLERANCE.",
    tags: ["narrative", "trajectory", "paperwork", "no-mechanical-effect"]
  })
]);
