import { defineWeaponMalfunction } from "./card-factory.js";

export const WEAPON_MALFUNCTION_CARDS = Object.freeze([
  defineWeaponMalfunction({
    id: "wm-001-unscheduled-maintenance",
    localizationKey: "UnscheduledMaintenance",
    impact: "moderate",
    fallbackTitle: "Unscheduled Maintenance",
    fallbackDescription: "Something inside the weapon makes a tiny, authoritative click. Before you can Strike with this weapon again before the end of your next turn, you must spend 1 Interact action to reset it. You can use other weapons normally. Nothing is broken; the weapon is simply taking a very short break.",
    tags: ["interact", "action-tax", "same-weapon", "reset"]
  }),
  defineWeaponMalfunction({
    id: "wm-002-diagnostic-squeal",
    localizationKey: "DiagnosticSqueal",
    impact: "narrative",
    weight: 1.5,
    fallbackTitle: "Diagnostic Squeal",
    fallbackDescription: "The weapon emits an indignant squeak. There is no mechanical effect. If anyone checks whether it is broken, it squeaks again, slightly louder.",
    tags: ["squeak", "narrative", "no-mechanical-effect"]
  }),
  defineWeaponMalfunction({
    id: "wm-003-counterweight-goes-freelance",
    localizationKey: "CounterweightGoesFreelance",
    impact: "light",
    fallbackTitle: "Counterweight Goes Freelance",
    fallbackDescription: "The weapon suddenly balances around a point nobody approved. Your next Strike with the same weapon before the end of your next turn takes a -1 circumstance penalty. You may spend 1 Interact action before that Strike to rebalance the weapon and end this consequence instead.",
    tags: ["attack-roll", "circumstance-penalty", "same-weapon", "manual-removal"]
  }),
  defineWeaponMalfunction({
    id: "wm-004-emergency-ejection-system",
    localizationKey: "EmergencyEjectionSystem",
    impact: "strong",
    weight: 0.55,
    fallbackTitle: "Emergency Ejection System",
    fallbackDescription: "A safety system nobody remembers installing activates flawlessly. The weapon leaves your hand and lands in an adjacent legal space chosen by the GM. If no adjacent space is suitable, it lands at your feet. The weapon is not damaged. Retrieving it follows the normal rules.",
    tags: ["drop", "adjacent-space", "weapon-displacement"]
  }),
  defineWeaponMalfunction({
    id: "wm-005-self-tightening-grip",
    localizationKey: "SelfTighteningGrip",
    impact: "light",
    fallbackTitle: "Self-Tightening Grip",
    fallbackDescription: "The grip decides that letting go is a user error. Until the end of your next turn, you cannot Release, drop, or hand off this weapon until you spend 1 Interact action to loosen the grip. You can otherwise use the weapon normally.",
    tags: ["release", "interact", "grip", "same-weapon"]
  }),
  defineWeaponMalfunction({
    id: "wm-006-unexpected-secondary-function",
    localizationKey: "UnexpectedSecondaryFunction",
    impact: "moderate",
    fallbackTitle: "Unexpected Secondary Function",
    fallbackDescription: "The weapon begins producing an unnecessary but surprisingly effective cloud of smoke, sparks, or both. Until the start of your next turn, you are concealed from creatures more than 10 feet away while you hold the weapon, but you cannot Hide while holding it. Creatures within 10 feet are unaffected by this concealment.",
    tags: ["smoke", "sparks", "concealment", "mixed-result"]
  }),
  defineWeaponMalfunction({
    id: "wm-007-successful-failure",
    localizationKey: "SuccessfulFailure",
    impact: "light",
    weight: 0.6,
    fallbackTitle: "Successful Failure",
    fallbackDescription: "The failed attack accidentally knocks one stubborn mechanism into perfect alignment. Before the end of your next turn, the first Interact action used solely to draw, stow, change the grip of, or reset this same weapon can be performed as a free action. The critical fumble itself remains a critical fumble.",
    tags: ["benefit", "interact", "free-action", "same-weapon"]
  }),
  defineWeaponMalfunction({
    id: "wm-008-safety-feature-engaged",
    localizationKey: "SafetyFeatureEngaged",
    impact: "moderate",
    fallbackTitle: "Safety Feature Engaged",
    fallbackDescription: "A tiny latch snaps into place with immense confidence. Until the end of your next turn, you cannot make a Strike with this weapon as part of a reaction unless you first spend 1 Interact action to disengage the safety. Disengaging it ends this consequence.",
    tags: ["reaction", "strike-reaction", "interact", "same-weapon", "manual-removal"]
  }),
  defineWeaponMalfunction({
    id: "wm-009-reverse-thrust-compensation",
    localizationKey: "ReverseThrustCompensation",
    impact: "moderate",
    fallbackTitle: "Reverse Thrust Compensation",
    fallbackDescription: "The weapon begins compensating for a problem in exactly the wrong direction. Your next Strike with the same weapon before the end of your next turn takes a -1 circumstance penalty to the attack roll, but if it hits, it deals 2 additional circumstance damage. The consequence then ends.",
    tags: ["attack-roll", "damage", "mixed-result", "same-weapon", "one-use"]
  }),
  defineWeaponMalfunction({
    id: "wm-010-prototype-behavior",
    localizationKey: "PrototypeBehavior",
    impact: "strong",
    weight: 0.5,
    fallbackTitle: "Prototype Behavior",
    fallbackDescription: "The weapon starts oscillating between two equally confident configurations. Before your next Strike with this weapon before the end of your next turn, choose one: spend 1 Interact action to stabilize it and Strike normally, or make the Strike immediately as a misfortune effect and roll the attack twice, using the worse result. The consequence ends after either choice.",
    tags: ["misfortune", "choice", "interact", "same-weapon", "one-use"]
  }),
  defineWeaponMalfunction({
    id: "wm-011-safety-cap-deployed",
    localizationKey: "SafetyCapDeployed",
    impact: "moderate",
    fallbackTitle: "Safety Cap Deployed",
    fallbackDescription: "A spring-loaded guard snaps over whichever part of the weapon was supposed to hurt people. Until the end of your next turn, Strikes with this weapon deal nonlethal damage without the usual -2 circumstance penalty for making a nonlethal attack with an unsuitable weapon. You can spend 1 Interact action to retract the guard and end this consequence.",
    tags: ["nonlethal", "mixed-result", "interact", "same-weapon", "manual-removal"],
    contentBatch: 2
  }),
  defineWeaponMalfunction({
    id: "wm-012-target-recognition-loop",
    localizationKey: "TargetRecognitionLoop",
    impact: "moderate",
    fallbackTitle: "Target Recognition Loop",
    fallbackDescription: "The weapon has decided that repeated targets are probably duplicate data. Until the end of your next turn, after you Strike a creature with this weapon, you cannot Strike that same creature again with this weapon during the same turn unless you first spend 1 Interact action to reset the target-recognition mechanism. Other creatures remain perfectly acceptable targets.",
    tags: ["target-switching", "interact", "same-weapon", "action-sequencing"],
    contentBatch: 2
  }),
  defineWeaponMalfunction({
    id: "wm-013-resonance-calibration",
    localizationKey: "ResonanceCalibration",
    impact: "light",
    fallbackTitle: "Resonance Calibration",
    fallbackDescription: "The weapon begins ringing like a tuning fork that has discovered professional ambition. Until the start of your next turn, while you hold it you cannot become hidden or undetected from creatures within 30 feet that can hear the ringing. Creatures that cannot hear it are unaffected.",
    tags: ["auditory", "stealth", "visibility", "same-weapon"],
    contentBatch: 2
  }),
  defineWeaponMalfunction({
    id: "wm-014-this-lever-wasnt-here-before",
    localizationKey: "ThisLeverWasntHereBefore",
    impact: "moderate",
    weight: 0.8,
    fallbackTitle: "This Lever Wasn't Here Before",
    fallbackDescription: "A small lever unfolds from the weapon. Nobody remembers it being there. Before your next Strike with this weapon before the end of your next turn, either spend 1 Interact action to fold it away and end this consequence, or pull it as a free action and roll 1d2. On a 1, the Strike takes a -1 circumstance penalty. On a 2, the Strike gains a +1 circumstance bonus. Either way, the lever retracts after the Strike.",
    tags: ["random", "attack-roll", "mixed-result", "interact", "same-weapon", "one-use"],
    contentBatch: 2
  }),
  defineWeaponMalfunction({
    id: "wm-015-load-bearing-question-mark",
    localizationKey: "LoadBearingQuestionMark",
    impact: "strong",
    weight: 0.5,
    fallbackTitle: "Load-Bearing Question Mark",
    fallbackDescription: "A pin works loose and remains attached by what appears to be optimism. Until the end of your next turn, after each Strike with this weapon, attempt a DC 5 flat check. On a failure, the weapon drops at your feet after the Strike resolves. You can spend 1 Interact action to secure the pin and end this consequence before making another Strike.",
    tags: ["flat-check", "drop", "interact", "same-weapon", "controlled-chaos"],
    contentBatch: 2
  }),
  defineWeaponMalfunction({
    id: "wm-016-field-service-hatch",
    localizationKey: "FieldServiceHatch",
    impact: "narrative",
    weight: 1.4,
    fallbackTitle: "Field Service Hatch",
    fallbackDescription: "A tiny hatch labeled DO NOT OPEN DURING USE flips open. There is no mechanical effect. If you spend an Interact action to close it, a smaller hatch on the opposite side opens with a cheerful click. That one closes normally.",
    tags: ["narrative", "interact", "no-mechanical-effect", "hatch"],
    contentBatch: 2
  }),
  defineWeaponMalfunction({
    id: "wm-017-emergency-illumination",
    localizationKey: "EmergencyIllumination",
    impact: "light",
    fallbackTitle: "Emergency Illumination",
    fallbackDescription: "Three sparks lodge in the weapon and continue glowing with unjustified confidence. Until the start of your next turn, the weapon sheds bright light in a 10-foot radius and dim light for the next 10 feet. This may reveal your position, but it also illuminates the area normally.",
    tags: ["light", "sparks", "mixed-result", "same-weapon"],
    contentBatch: 2
  }),
  defineWeaponMalfunction({
    id: "wm-018-auxiliary-reach-extension",
    localizationKey: "AuxiliaryReachExtension",
    impact: "moderate",
    fallbackTitle: "Auxiliary Reach Extension",
    fallbackDescription: "A telescoping section shoots out of the weapon with an enthusiastic clack. For your next Strike with this weapon before the end of your next turn, increase your reach with the weapon by 5 feet, but take a -1 circumstance penalty to that attack roll. You can instead spend 1 Interact action to retract the extension and end this consequence.",
    tags: ["reach", "attack-roll", "mixed-result", "interact", "same-weapon", "one-use"],
    contentBatch: 2
  }),
  defineWeaponMalfunction({
    id: "wm-019-incorrect-damage-mode",
    localizationKey: "IncorrectDamageMode",
    impact: "moderate",
    fallbackTitle: "Incorrect Damage Mode",
    fallbackDescription: "The weapon rotates, folds, or presents the wrong striking surface with absolute certainty. The base physical damage of your next Strike with this weapon before the end of your next turn becomes bludgeoning damage instead of its normal type. If its base damage is already bludgeoning, it becomes piercing instead. Additional damage is unchanged. You can spend 1 Interact action to restore the normal configuration and end this consequence.",
    tags: ["damage-type", "bludgeoning", "piercing", "mixed-result", "interact", "same-weapon", "one-use"],
    contentBatch: 2
  }),
  defineWeaponMalfunction({
    id: "wm-020-warranty-void",
    localizationKey: "WarrantyVoid",
    impact: "narrative",
    weight: 1.4,
    fallbackTitle: "Warranty Void",
    fallbackDescription: "A tiny paper seal pops out of the weapon, stamps itself VOID, and catches fire for exactly one second. There is no mechanical effect, no damage, and no actual fault. The warranty was probably imaginary anyway.",
    tags: ["narrative", "paperwork", "no-mechanical-effect", "sparks"],
    contentBatch: 2
  })
]);
