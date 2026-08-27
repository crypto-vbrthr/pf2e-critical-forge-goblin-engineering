export const MODULE_ID = "pf2e-critical-forge-goblin-engineering";
export const MODULE_TITLE = "PF2E Critical Forge: Goblin Engineering";
export const MODULE_VERSION = "0.1.0-dev.7";
export const API_VERSION = "0.1.0";

export const REQUIRED_CRITICAL_FORGE_VERSION = ">=1.0.1-rc.5";
export const REQUIRED_CRITICAL_FORGE_API_VERSION = ">=0.9.7";
export const REQUIRED_EXTENSION_CONTRACT_VERSION = ">=1";

export const PACK_IDS = Object.freeze({
  WEAPON_MALFUNCTIONS: `${MODULE_ID}.weapon-malfunctions`,
  RANGED_ENGINEERING: `${MODULE_ID}.ranged-engineering`,
  EQUIPMENT_INCIDENTS: `${MODULE_ID}.equipment-incidents`
});

export const SETTING_KEYS = Object.freeze({
  WEAPON_MALFUNCTIONS: "enableWeaponMalfunctions",
  RANGED_ENGINEERING: "enableRangedEngineering",
  EQUIPMENT_INCIDENTS: "enableEquipmentIncidents"
});
