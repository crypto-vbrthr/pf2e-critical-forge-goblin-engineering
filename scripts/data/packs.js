import { MODULE_ID, MODULE_VERSION, PACK_IDS, SETTING_KEYS } from "../constants.js";
import { WEAPON_MALFUNCTION_CARDS } from "./cards/weapon-malfunctions.js";

const EMPTY_CARDS = Object.freeze([]);

export const GOBLIN_PACK_CONFIGS = Object.freeze([
  Object.freeze({
    settingKey: SETTING_KEYS.WEAPON_MALFUNCTIONS,
    settingToken: "WeaponMalfunctions",
    id: PACK_IDS.WEAPON_MALFUNCTIONS,
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
      implementedCards: 20
    })
  }),
  Object.freeze({
    settingKey: SETTING_KEYS.RANGED_ENGINEERING,
    settingToken: "RangedEngineering",
    id: PACK_IDS.RANGED_ENGINEERING,
    fallbackTitle: "Goblin Engineering: Ranged Engineering",
    fallbackDescription: "Reserved for chaotic ranged-weapon engineering incidents in a later development block.",
    cards: EMPTY_CARDS,
    defaultEnabled: false,
    metadata: Object.freeze({
      theme: "goblin-engineering",
      family: "goblin-engineering",
      category: "ranged-engineering",
      scope: "planned",
      contentStatus: "reserved",
      plannedCards: 30,
      implementedCards: 0
    })
  }),
  Object.freeze({
    settingKey: SETTING_KEYS.EQUIPMENT_INCIDENTS,
    settingToken: "EquipmentIncidents",
    id: PACK_IDS.EQUIPMENT_INCIDENTS,
    fallbackTitle: "Goblin Engineering: Equipment Incidents",
    fallbackDescription: "Reserved for shields, tools, held items, and wider equipment incidents in a later development block.",
    cards: EMPTY_CARDS,
    defaultEnabled: false,
    metadata: Object.freeze({
      theme: "goblin-engineering",
      family: "goblin-engineering",
      category: "equipment-incidents",
      scope: "planned-runtime-integration",
      contentStatus: "reserved",
      plannedCards: 30,
      implementedCards: 0
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
      attack: Object.freeze({ cards: config.cards })
    })
  }));
}
