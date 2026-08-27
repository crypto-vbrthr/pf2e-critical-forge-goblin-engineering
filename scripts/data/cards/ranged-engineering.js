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
  }),
  defineRangedEngineering({
    id: "re-011-emergency-close-quarters-attachment",
    localizationKey: "EmergencyCloseQuartersAttachment",
    impact: "moderate",
    fallbackTitle: "Emergency Close-Quarters Attachment",
    fallbackDescription: "A blunt spike, hook, or reinforced foot snaps out of the weapon and announces CLOSE-QUARTERS READY. Until the end of your next turn, you can use this weapon to Shove as though it had the shove trait, but ranged Strikes with it take a -1 circumstance penalty. You can spend 1 Interact action to retract the attachment and end this consequence.",
    tags: ["close-quarters", "shove", "mixed-result", "interact", "same-weapon"],
    filters: { weaponGroups: ["bow", "firearm"] },
    contentBatch: 2
  }),
  defineRangedEngineering({
    id: "re-012-double-feed-optimizer",
    localizationKey: "DoubleFeedOptimizer",
    impact: "strong",
    weight: 0.45,
    fallbackTitle: "Double-Feed Optimizer",
    fallbackDescription: "The loading system proudly announces that one projectile is an inefficient use of available space. Before your next ranged Strike with this same weapon before the end of your next turn, choose one: spend 1 Interact action to clear the optimizer and Strike normally, or feed it one additional piece of ordinary ammunition if you have one. If you feed it the extra ammunition, both pieces are consumed, the Strike deals 2 additional circumstance damage on a hit, and after it resolves the weapon cannot Strike again until you spend 1 Interact action clearing the second feed. Nothing is damaged.",
    tags: ["ammunition", "double-feed", "damage", "choice", "interact", "same-weapon", "mixed-result"],
    filters: { weaponGroups: ["bow", "firearm", "sling"] },
    contentBatch: 2
  }),
  defineRangedEngineering({
    id: "re-013-trigger-apology-protocol",
    localizationKey: "TriggerApologyProtocol",
    impact: "narrative",
    weight: 1.4,
    fallbackTitle: "Trigger Apology Protocol",
    fallbackDescription: "A tiny placard unfolds beside the trigger, release, or throwing grip and reads APOLOGY RECEIVED. There is no mechanical effect. Nobody apologized. If you apologize afterward, the placard updates to APOLOGY NOTED, which is apparently a different department.",
    tags: ["narrative", "apology", "bureaucracy", "no-mechanical-effect"],
    contentBatch: 2
  }),
  defineRangedEngineering({
    id: "re-014-windage-knob-comes-off",
    localizationKey: "WindageKnobComesOff",
    impact: "narrative",
    weight: 1.4,
    fallbackTitle: "Windage Knob Comes Off",
    fallbackDescription: "A carefully knurled adjustment knob unscrews itself, drops neatly into your hand, and reveals the word DECORATIVE underneath. There is no mechanical effect. Reattaching it backward causes a second label to become visible: ADVANCED MODE.",
    tags: ["narrative", "sight", "adjustment", "no-mechanical-effect"],
    filters: { weaponGroups: ["bow", "firearm"] },
    contentBatch: 2
  }),
  defineRangedEngineering({
    id: "re-015-emergency-ear-protection",
    localizationKey: "EmergencyEarProtection",
    impact: "light",
    weight: 0.7,
    fallbackTitle: "Emergency Ear Protection",
    fallbackDescription: "Two padded cups snap over your ears with impeccable timing after the loud part. Until the start of your next turn, you are deafened, but you gain a +1 circumstance bonus to saving throws against auditory effects. You can spend 1 Interact action to pull the cups away and end both effects early.",
    tags: ["firearm", "auditory", "deafened", "saving-throw", "mixed-result", "interact"],
    filters: { weaponGroups: ["firearm"] },
    contentBatch: 2
  }),
  defineRangedEngineering({
    id: "re-016-string-silencer-inflates",
    localizationKey: "StringSilencerInflates",
    impact: "light",
    weight: 0.75,
    fallbackTitle: "String Silencer Inflates",
    fallbackDescription: "A padded string damper inflates to the size of a small pastry. Your next ranged Strike with this same bow before the end of your next turn deals 1 less damage on a hit, to a minimum of 0, but the shot produces only a soft snap. The sound of that Strike alone does not reveal your location to a creature that cannot otherwise perceive you. The damper deflates after the Strike.",
    tags: ["bow", "sound", "damage-reduction", "stealth", "mixed-result", "same-weapon", "one-use"],
    filters: { weaponGroups: ["bow"] },
    contentBatch: 2
  }),
  defineRangedEngineering({
    id: "re-017-pouch-stabilizer-locks",
    localizationKey: "PouchStabilizerLocks",
    impact: "moderate",
    weight: 0.75,
    fallbackTitle: "Pouch Stabilizer Locks",
    fallbackDescription: "A tiny gyroscope clamps the sling pouch into PERFECT RELEASE POSITION. Your next ranged Strike with this same sling before the end of your next turn gains a +1 circumstance bonus to its attack roll. After that Strike resolves, the pouch locks shut and the sling cannot Strike again until you spend 1 Interact action unlocking it. The gyroscope then falls asleep immediately.",
    tags: ["sling", "attack-roll", "interact", "same-weapon", "mixed-result", "one-use"],
    filters: { weaponGroups: ["sling"] },
    contentBatch: 2
  }),
  defineRangedEngineering({
    id: "re-018-retrieval-reel-overcommits",
    localizationKey: "RetrievalReelOvercommits",
    impact: "strong",
    weight: 0.45,
    fallbackTitle: "Retrieval Reel Overcommits",
    fallbackDescription: "A retrieval cord snaps onto the weapon or its next projectile with frightening enthusiasm. After your next ranged Strike with this same weapon before the end of your next turn, a thrown weapon returns to a free hand; ordinary recoverable ammunition instead snaps back into your space in recoverable condition. If neither applies, the reel simply jerks the weapon toward you without moving it. This happens whether the Strike hits or misses. In every case, the sudden pull makes you off-guard until the start of your next turn. If a thrown weapon returns while you have no free hand, it lands at your feet instead.",
    tags: ["projectile", "thrown", "ammunition", "retrieval", "off-guard", "mixed-result", "same-weapon", "one-use"],
    contentBatch: 2
  }),
  defineRangedEngineering({
    id: "re-019-ammunition-inspector",
    localizationKey: "AmmunitionInspector",
    impact: "narrative",
    weight: 1.4,
    fallbackTitle: "Ammunition Inspector",
    fallbackDescription: "A tiny articulated arm emerges, examines the next available projectile from three angles, and stamps it BALLISTICALLY ADEQUATE. There is no mechanical effect. If no ammunition is available, the arm stamps the weapon itself AMMUNITION PENDING and retracts.",
    tags: ["narrative", "ammunition", "inspection", "no-mechanical-effect"],
    contentBatch: 2
  }),
  defineRangedEngineering({
    id: "re-020-self-zeroing-sight-overachieves",
    localizationKey: "SelfZeroingSightOverachieves",
    impact: "moderate",
    weight: 0.7,
    fallbackTitle: "Self-Zeroing Sight Overachieves",
    fallbackDescription: "A tiny sight clicks through several positions and triumphantly announces ZERO FOUND. Your next ranged Strike with this same weapon before the end of your next turn gains a +1 circumstance bonus to its attack roll. After that Strike resolves, the sight flips backward. If you make another ranged Strike with the weapon before the end of your following turn without first spending 1 Interact action to turn the sight around, that Strike takes a -1 circumstance penalty. The consequence then ends.",
    tags: ["sight", "attack-roll", "sequence", "interact", "same-weapon", "mixed-result"],
    filters: { weaponGroups: ["bow", "firearm"] },
    contentBatch: 2
  })

]);
