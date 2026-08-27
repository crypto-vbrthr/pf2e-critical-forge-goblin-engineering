import { MODULE_ID, PACK_IDS } from "../../constants.js";

const FILTER_KEYS = Object.freeze([
  "damageTypes",
  "weaponGroups",
  "attackTraits",
  "excludedAttackTraits",
  "saveTypes",
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
      attackTraits: unique(["melee", ...(filters.attackTraits ?? [])]),
      excludedAttackTraits: unique(["spell", "unarmed", "ranged", ...(filters.excludedAttackTraits ?? [])])
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

export function defineWeaponMalfunction(options) {
  return defineGoblinCard({
    ...options,
    packId: PACK_IDS.WEAPON_MALFUNCTIONS,
    collection: "weapon-malfunctions"
  });
}
