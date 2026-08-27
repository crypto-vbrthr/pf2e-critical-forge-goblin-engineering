import { MODULE_ID, MODULE_VERSION, PACK_IDS, SETTING_KEYS } from "../constants.js";
import { WEAPON_MALFUNCTION_CARDS } from "./cards/weapon-malfunctions.js";
import { RANGED_ENGINEERING_CARDS } from "./cards/ranged-engineering.js";
import { EQUIPMENT_INCIDENT_CARDS } from "./cards/equipment-incidents.js";

export const GOBLIN_PACK_CONFIGS = Object.freeze([
  Object.freeze({
    settingKey: SETTING_KEYS.WEAPON_MALFUNCTIONS,
    settingToken: "WeaponMalfunctions",
    id: PACK_IDS.WEAPON_MALFUNCTIONS,
    deckType: "attack",
    fallbackTitle: "Goblin Engineering: Weapon Malfunctions",
    fallbackDescription: "Humorous critical fumbles for non-spell melee weapons, focused on unreliable hardware, suspicious safety features, and brief equipment problems.",
    cards: WEAPON_MALFUNCTION_CARDS,
    defaultEnabled: true,
    metadata: Object.freeze({
      theme: "goblin-engineering",
      family: "goblin-engineering",
      category: "weapon-malfunctions",
      scope: "non-spell-melee-weapon-critical-fumbles",
      contentStatus: "development",
      plannedCards: 30,
      implementedCards: 30
    })
  }),
  Object.freeze({
    settingKey: SETTING_KEYS.RANGED_ENGINEERING,
    settingToken: "RangedEngineering",
    id: PACK_IDS.RANGED_ENGINEERING,
    deckType: "attack",
    fallbackTitle: "Goblin Engineering: Ranged Engineering",
    fallbackDescription: "Humorous critical fumbles for non-spell ranged weapons, focused on unreliable ammunition systems, questionable safety devices, and hardware that develops opinions mid-fight.",
    cards: RANGED_ENGINEERING_CARDS,
    defaultEnabled: true,
    metadata: Object.freeze({
      theme: "goblin-engineering",
      family: "goblin-engineering",
      category: "ranged-engineering",
      scope: "non-spell-ranged-weapon-critical-fumbles",
      contentStatus: "development",
      plannedCards: 30,
      implementedCards: 30
    })
  }),
  Object.freeze({
    settingKey: SETTING_KEYS.EQUIPMENT_INCIDENTS,
    settingToken: "EquipmentIncidents",
    id: PACK_IDS.EQUIPMENT_INCIDENTS,
    deckType: "skill",
    fallbackTitle: "Goblin Engineering: Equipment Incidents",
    fallbackDescription: "Humorous critical failures for equipment-heavy skill checks such as Repair, Craft, Pick a Lock, Disable a Device, Treat Wounds, Administer First Aid, Treat Disease, and Treat Poison.",
    cards: EQUIPMENT_INCIDENT_CARDS,
    defaultEnabled: true,
    metadata: Object.freeze({
      theme: "goblin-engineering",
      family: "goblin-engineering",
      category: "equipment-incidents",
      scope: "equipment-heavy-skill-check-critical-failures",
      contentStatus: "development",
      plannedCards: 30,
      implementedCards: 30
    })
  })
]);

export function buildGoblinEngineeringPacks(settings = {}) {
  return GOBLIN_PACK_CONFIGS.map((config) => Object.freeze({
    schemaVersion: 1,
    id: config.id,
    titleKey: `PF2E_GOBLIN_ENGINEERING.Packs.${config.settingToken}.Title`,
    descriptionKey: `PF2E_GOBLIN_ENGINEERING.Packs.${config.settingToken}.Description`,
    fallbackTitle: config.fallbackTitle,
    fallbackDescription: config.fallbackDescription,
    version: MODULE_VERSION,
    priority: 20,
    enabled: config.cards.length > 0 && (settings[config.settingKey] ?? config.defaultEnabled) !== false,
    metadata: config.metadata,
    decks: Object.freeze({
      [config.deckType]: Object.freeze({ cards: config.cards })
    })
  }));
}
