import { MODULE_ID, PACK_IDS } from "../../constants.js";

const FILTER_KEYS = Object.freeze([
  "damageTypes",
  "weaponGroups",
  "attackTraits",
  "excludedAttackTraits",
  "saveTypes",
  "skillTypes",
  "actionSlugs",
  "itemTypes",
  "itemTraits",
  "excludedItemTraits",
  "spellTraditions",
  "spellTraits",
  "sourceTraits",
  "targetTraits",
  "excludedSourceTraits",
  "excludedTargetTraits"
]);

function unique(values = []) {
  return [...new Set(values.map((value) => String(value).trim()).filter(Boolean))];
}

function freezeFilters(filters = {}) {
  return Object.freeze(Object.fromEntries(
    FILTER_KEYS.map((key) => [key, Object.freeze(unique(filters[key] ?? []))])
  ));
}

function defineGoblinCard({
  id,
  packId,
  collection,
  localizationKey,
  tone = "humorous",
  impact = "moderate",
  fallbackTitle,
  fallbackDescription,
  weight = 1,
  tags = [],
  filters = {},
  requiredAttackTraits = ["melee"],
  defaultExcludedAttackTraits = ["spell", "unarmed", "ranged"],
  contentBatch = 1
}) {
  return Object.freeze({
    schemaVersion: 1,
    id: `${MODULE_ID}.${collection}.${id}`,
    packId,
    category: "criticalFumble",
    deckType: "attack",
    tone,
    impact,
    titleKey: `PF2E_GOBLIN_ENGINEERING.Cards.${localizationKey}.Title`,
    descriptionKey: `PF2E_GOBLIN_ENGINEERING.Cards.${localizationKey}.Description`,
    fallbackTitle,
    fallbackDescription,
    weight,
    tags: Object.freeze(["goblin-engineering", collection, "critical-fumble", "weapon", ...unique(tags)]),
    filters: freezeFilters({
      ...filters,
      attackTraits: unique([...requiredAttackTraits, ...(filters.attackTraits ?? [])]),
      excludedAttackTraits: unique([...defaultExcludedAttackTraits, ...(filters.excludedAttackTraits ?? [])])
    }),
    conditions: null,
    effect: null,
    metadata: Object.freeze({
      collection,
      contentBatch,
      resolution: "manual"
    })
  });
}

function defineGoblinSkillCard({
  id,
  packId,
  collection,
  localizationKey,
  tone = "humorous",
  impact = "moderate",
  fallbackTitle,
  fallbackDescription,
  weight = 1,
  tags = [],
  filters = {},
  contentBatch = 1
}) {
  return Object.freeze({
    schemaVersion: 1,
    id: `${MODULE_ID}.${collection}.${id}`,
    packId,
    category: "skillCheckCriticalFailure",
    deckType: "skill",
    tone,
    impact,
    titleKey: `PF2E_GOBLIN_ENGINEERING.Cards.${localizationKey}.Title`,
    descriptionKey: `PF2E_GOBLIN_ENGINEERING.Cards.${localizationKey}.Description`,
    fallbackTitle,
    fallbackDescription,
    weight,
    tags: Object.freeze(["goblin-engineering", collection, "skill-check", "critical-failure", "equipment", ...unique(tags)]),
    filters: freezeFilters(filters),
    conditions: null,
    effect: null,
    metadata: Object.freeze({
      collection,
      contentBatch,
      resolution: "manual"
    })
  });
}

export function defineWeaponMalfunction(options) {
  return defineGoblinCard({
    ...options,
    packId: PACK_IDS.WEAPON_MALFUNCTIONS,
    collection: "weapon-malfunctions"
  });
}

export function defineRangedEngineering(options) {
  return defineGoblinCard({
    ...options,
    packId: PACK_IDS.RANGED_ENGINEERING,
    collection: "ranged-engineering",
    requiredAttackTraits: ["ranged"],
    defaultExcludedAttackTraits: ["spell", "unarmed"]
  });
}

export function defineEquipmentIncident(options) {
  return defineGoblinSkillCard({
    ...options,
    packId: PACK_IDS.EQUIPMENT_INCIDENTS,
    collection: "equipment-incidents"
  });
}
