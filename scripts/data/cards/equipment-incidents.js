import { defineEquipmentIncident } from "./card-factory.js";

export const EQUIPMENT_INCIDENT_CARDS = Object.freeze([
  defineEquipmentIncident({
    id: "ei-001-torque-limiter-enters-negotiations",
    localizationKey: "TorqueLimiterEntersNegotiations",
    impact: "moderate",
    fallbackTitle: "Torque Limiter Enters Negotiations",
    fallbackDescription: "The Repair attempt fails normally, including any damage caused by the critical failure. The toolkit's torque limiter then clicks into a setting labeled DISCUSS. Before your next Repair check with the same toolkit, spend 1 minute resetting it or take a -1 circumstance penalty to that check. Resetting it ends this consequence.",
    tags: ["repair", "repair-kit", "calibration", "action-tax"],
    filters: { skillTypes: ["crafting"], actionSlugs: ["repair"] }
  }),
  defineEquipmentIncident({
    id: "ei-002-spare-parts-form-a-committee",
    localizationKey: "SparePartsFormACommittee",
    impact: "narrative",
    weight: 1.35,
    fallbackTitle: "Spare Parts Form a Committee",
    fallbackDescription: "The Repair attempt fails normally. Several screws, washers, and other loose pieces arrange themselves into a tiny circle beside the toolkit. There is no mechanical effect. One washer appears to be taking minutes.",
    tags: ["repair", "repair-kit", "narrative", "no-mechanical-effect"],
    filters: { skillTypes: ["crafting"], actionSlugs: ["repair"] }
  }),
  defineEquipmentIncident({
    id: "ei-003-blueprint-adds-an-optional-disaster",
    localizationKey: "BlueprintAddsAnOptionalDisaster",
    impact: "moderate",
    fallbackTitle: "Blueprint Adds an Optional Disaster",
    fallbackDescription: "The Craft attempt fails normally, including the normal loss of materials. Your plans have somehow gained a new step labeled OPTIONAL DISASTER. Before your next Craft check using these plans, spend 10 minutes correcting them or take a -1 circumstance penalty to that check. Correcting the plans ends this consequence.",
    tags: ["craft", "plans", "blueprint", "action-tax"],
    filters: { skillTypes: ["crafting"], actionSlugs: ["craft"] }
  }),
  defineEquipmentIncident({
    id: "ei-004-measuring-tape-invents-a-unit",
    localizationKey: "MeasuringTapeInventsAUnit",
    impact: "narrative",
    weight: 1.35,
    fallbackTitle: "Measuring Tape Invents a Unit",
    fallbackDescription: "The Craft attempt fails normally. Your measuring tool retracts, extends again, and marks one perfectly ordinary interval as 1 GOBLIN. There is no mechanical effect. Every other measurement remains unchanged, which somehow makes this worse.",
    tags: ["craft", "measurement", "narrative", "no-mechanical-effect"],
    filters: { skillTypes: ["crafting"], actionSlugs: ["craft"] }
  }),
  defineEquipmentIncident({
    id: "ei-005-broken-pick-requests-promotion",
    localizationKey: "BrokenPickRequestsPromotion",
    impact: "narrative",
    weight: 1.35,
    fallbackTitle: "Broken Pick Requests Promotion",
    fallbackDescription: "Resolve the normal critical failure for Pick a Lock, including the broken tools. One snapped pick then acquires a tiny stamped label reading MASTER KEY. There is no additional mechanical effect. The label is extremely confident.",
    tags: ["pick-a-lock", "thieves-tools", "broken-tools", "narrative", "no-mechanical-effect"],
    filters: { skillTypes: ["thievery", "crafting"], actionSlugs: ["pick-a-lock"] }
  }),
  defineEquipmentIncident({
    id: "ei-006-lock-profile-accidentally-saved",
    localizationKey: "LockProfileAccidentallySaved",
    impact: "light",
    weight: 0.75,
    fallbackTitle: "Lock Profile Accidentally Saved",
    fallbackDescription: "Resolve the normal critical failure for Pick a Lock, including any broken tools. Despite everything, the toolkit records one useful piece of information. Your next Pick a Lock check against the same lock within 10 minutes gains a +1 circumstance bonus, provided you have usable tools. This bonus then ends.",
    tags: ["pick-a-lock", "thieves-tools", "benefit", "mixed-result", "same-lock", "one-use"],
    filters: { skillTypes: ["thievery", "crafting"], actionSlugs: ["pick-a-lock"] }
  }),
  defineEquipmentIncident({
    id: "ei-007-safety-flag-deploys",
    localizationKey: "SafetyFlagDeploys",
    impact: "narrative",
    weight: 1.35,
    fallbackTitle: "Safety Flag Deploys",
    fallbackDescription: "Resolve the normal critical failure for Disable a Device, including triggering the mechanism when applicable. At exactly the wrong moment, a bright flag springs from your toolkit reading DEVICE TEST COMPLETE. There is no additional mechanical effect.",
    tags: ["disable-a-device", "thieves-tools", "narrative", "no-mechanical-effect", "safety"],
    filters: { skillTypes: ["thievery", "crafting"], actionSlugs: ["disable-a-device"] }
  }),
  defineEquipmentIncident({
    id: "ei-008-probe-locks-fully-extended",
    localizationKey: "ProbeLocksFullyExtended",
    impact: "moderate",
    fallbackTitle: "Probe Locks Fully Extended",
    fallbackDescription: "Resolve the normal critical failure for Disable a Device. One probe in the toolkit locks at maximum extension. Before your next Disable a Device check with the same toolkit before the end of your next turn, spend 1 Interact action to collapse it or take a -1 circumstance penalty to that check. Collapsing it ends this consequence.",
    tags: ["disable-a-device", "thieves-tools", "probe", "interact", "action-tax"],
    filters: { skillTypes: ["thievery", "crafting"], actionSlugs: ["disable-a-device"] }
  }),
  defineEquipmentIncident({
    id: "ei-009-bandage-dispenser-achieves-coverage",
    localizationKey: "BandageDispenserAchievesCoverage",
    impact: "light",
    weight: 0.75,
    fallbackTitle: "Bandage Dispenser Achieves Coverage",
    fallbackDescription: "Resolve the normal critical failure for Treat Wounds, including its damage. The healer's toolkit then wraps the patient with unreasonable thoroughness. The next Administer First Aid check you make to Stop Bleeding on that patient within 1 hour gains a +1 circumstance bonus. The bonus then ends.",
    tags: ["treat-wounds", "healers-toolkit", "benefit", "mixed-result", "same-patient", "one-use"],
    filters: { skillTypes: ["medicine", "nature"], actionSlugs: ["treat-wounds"] }
  }),
  defineEquipmentIncident({
    id: "ei-010-emergency-clamp-chooses-the-bag",
    localizationKey: "EmergencyClampChoosesTheBag",
    impact: "moderate",
    fallbackTitle: "Emergency Clamp Chooses the Bag",
    fallbackDescription: "An emergency clamp activates with admirable urgency and attaches itself to the healer's toolkit. Until the end of your next turn, before you can Administer First Aid again using that toolkit, you must spend 1 Interact action to release the clamp. Releasing it ends this consequence.",
    tags: ["administer-first-aid", "healers-toolkit", "clamp", "interact", "action-tax"],
    filters: { skillTypes: ["medicine", "crafting"], actionSlugs: ["administer-first-aid"] }
  }),
  defineEquipmentIncident({
    id: "ei-011-sterilizer-declares-victory",
    localizationKey: "SterilizerDeclaresVictory",
    impact: "narrative",
    weight: 1.35,
    fallbackTitle: "Sterilizer Declares Victory",
    fallbackDescription: "Resolve the normal critical failure for Treat Disease, including the penalty to the patient's next saving throw. The healer's toolkit then chirps and stamps a strip of paper PATIENT NOW TECHNICALLY CLEAN. There is no additional mechanical effect.",
    tags: ["treat-disease", "healers-toolkit", "narrative", "no-mechanical-effect", "sterilizer"],
    filters: { skillTypes: ["medicine"], actionSlugs: ["treat-disease"] },
    contentBatch: 2
  }),
  defineEquipmentIncident({
    id: "ei-012-diagnostic-wheel-finds-a-new-symptom",
    localizationKey: "DiagnosticWheelFindsANewSymptom",
    impact: "light",
    weight: 0.75,
    fallbackTitle: "Diagnostic Wheel Finds a New Symptom",
    fallbackDescription: "Resolve the normal critical failure for Treat Disease, including the penalty to the patient's next saving throw. A diagnostic wheel in the toolkit spins wildly and stops on one genuinely useful observation. Your next Recall Knowledge check about the same disease within 1 hour gains a +1 circumstance bonus. This does not alter the disease saving-throw penalty.",
    tags: ["treat-disease", "healers-toolkit", "benefit", "mixed-result", "recall-knowledge", "one-use"],
    filters: { skillTypes: ["medicine"], actionSlugs: ["treat-disease"] },
    contentBatch: 2
  }),
  defineEquipmentIncident({
    id: "ei-013-dose-counter-wraps-around",
    localizationKey: "DoseCounterWrapsAround",
    impact: "narrative",
    weight: 1.35,
    fallbackTitle: "Dose Counter Wraps Around",
    fallbackDescription: "Resolve the normal critical failure for Treat Poison, including the penalty to the patient's next saving throw. The toolkit's dose counter flashes 0, then 255, then SUFFICIENTLY COUNTED. There is no additional mechanical effect.",
    tags: ["treat-poison", "healers-toolkit", "narrative", "no-mechanical-effect", "counter"],
    filters: { skillTypes: ["medicine"], actionSlugs: ["treat-poison"] },
    contentBatch: 2
  }),
  defineEquipmentIncident({
    id: "ei-014-extractor-cup-refuses-to-let-go",
    localizationKey: "ExtractorCupRefusesToLetGo",
    impact: "moderate",
    fallbackTitle: "Extractor Cup Refuses to Let Go",
    fallbackDescription: "Resolve the normal critical failure for Treat Poison, including the penalty to the patient's next saving throw. An extractor cup clamps onto the patient with excessive professional commitment. Until the end of the patient's next turn, their Speed is reduced by 5 feet. An adjacent creature can spend 1 Interact action to peel the cup free and end this consequence early. Nothing is damaged.",
    tags: ["treat-poison", "healers-toolkit", "speed", "interact", "patient"],
    filters: { skillTypes: ["medicine"], actionSlugs: ["treat-poison"] },
    contentBatch: 2
  }),
  defineEquipmentIncident({
    id: "ei-015-parts-tray-achieves-escape-velocity",
    localizationKey: "PartsTrayAchievesEscapeVelocity",
    impact: "moderate",
    fallbackTitle: "Parts Tray Achieves Escape Velocity",
    fallbackDescription: "Resolve the normal critical failure for Repair or Craft. A shallow parts tray suddenly tilts and skitters up to 10 feet to a legal space chosen by the GM, carrying several nonessential components with it. Until you recover the tray with 1 Interact action while adjacent, your next Repair or Craft check using the same toolkit takes a -1 circumstance penalty. Nothing is lost or damaged.",
    tags: ["repair", "craft", "toolkit", "parts", "interact", "position"],
    filters: { skillTypes: ["crafting"], actionSlugs: ["repair", "craft"] },
    contentBatch: 2
  }),
  defineEquipmentIncident({
    id: "ei-016-toolbox-drawer-labels-everything",
    localizationKey: "ToolboxDrawerLabelsEverything",
    impact: "narrative",
    weight: 1.35,
    fallbackTitle: "Toolbox Drawer Labels Everything",
    fallbackDescription: "The Repair or Craft attempt fails normally. Every compartment in the toolkit quietly relabels itself MISC. There is no mechanical effect. Opening the compartment marked MISC reveals a smaller tray labeled OTHER.",
    tags: ["repair", "craft", "toolkit", "narrative", "no-mechanical-effect", "labels"],
    filters: { skillTypes: ["crafting"], actionSlugs: ["repair", "craft"] },
    contentBatch: 2
  }),
  defineEquipmentIncident({
    id: "ei-017-lockpick-case-deploys-everything",
    localizationKey: "LockpickCaseDeploysEverything",
    impact: "moderate",
    fallbackTitle: "Lockpick Case Deploys Everything",
    fallbackDescription: "Resolve the normal critical failure for Pick a Lock, including any broken tools. The case then snaps open and fans the remaining picks out by what appears to be confidence rather than size. Before your next Pick a Lock check with the same toolkit, spend 1 Interact action sorting them or take a -1 circumstance penalty to that check. Sorting them ends this consequence.",
    tags: ["pick-a-lock", "thieves-tools", "interact", "action-tax", "sorting"],
    filters: { skillTypes: ["thievery", "crafting"], actionSlugs: ["pick-a-lock"] },
    contentBatch: 2
  }),
  defineEquipmentIncident({
    id: "ei-018-wire-spool-auto-deploys",
    localizationKey: "WireSpoolAutoDeploys",
    impact: "moderate",
    fallbackTitle: "Wire Spool Auto-Deploys",
    fallbackDescription: "Resolve the normal critical failure for Disable a Device, including triggering the mechanism when applicable. A wire spool in the toolkit immediately deploys around your boots. Until the end of your next turn, your Speed is reduced by 5 feet. You can spend 1 Interact action to gather the wire and end this consequence early.",
    tags: ["disable-a-device", "thieves-tools", "wire", "speed", "interact"],
    filters: { skillTypes: ["thievery", "crafting"], actionSlugs: ["disable-a-device"] },
    contentBatch: 2
  }),
  defineEquipmentIncident({
    id: "ei-019-emergency-splint-selects-the-operator",
    localizationKey: "EmergencySplintSelectsTheOperator",
    impact: "moderate",
    fallbackTitle: "Emergency Splint Selects the Operator",
    fallbackDescription: "Resolve the normal critical failure for Treat Wounds or Administer First Aid. An emergency splint decides the healer is clearly the next patient and straps itself across your forearm. Until the end of your next turn, you take a -1 circumstance penalty to Medicine checks and Thievery checks that require that hand. You can spend 1 Interact action to remove the splint and end this consequence early.",
    tags: ["treat-wounds", "administer-first-aid", "healers-toolkit", "splint", "interact", "operator"],
    filters: { skillTypes: ["medicine", "nature", "crafting"], actionSlugs: ["treat-wounds", "administer-first-aid"] },
    contentBatch: 2
  }),
  defineEquipmentIncident({
    id: "ei-020-failure-analysis-actually-works",
    localizationKey: "FailureAnalysisActuallyWorks",
    impact: "light",
    weight: 0.65,
    fallbackTitle: "Failure Analysis Actually Works",
    fallbackDescription: "Resolve the normal critical failure for Repair or Craft. A tiny indicator on the toolkit points at something nearby and lights up ACTUAL PROBLEM. Your next Recall Knowledge check made within 10 minutes specifically to understand the failed item, project, or mechanism gains a +1 circumstance bonus. The original critical failure and all of its normal consequences remain unchanged.",
    tags: ["repair", "craft", "toolkit", "benefit", "mixed-result", "recall-knowledge", "one-use"],
    filters: { skillTypes: ["crafting"], actionSlugs: ["repair", "craft"] },
    contentBatch: 2
  })
]);
