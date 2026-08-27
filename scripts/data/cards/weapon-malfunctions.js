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
  })
]);
