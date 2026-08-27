import test from "node:test";
import assert from "node:assert/strict";
import { MODULE_ID, SETTING_KEYS } from "../scripts/constants.js";
import { buildGoblinEngineeringPacks } from "../scripts/data/packs.js";
import { readPackSettings, registerSettings } from "../scripts/settings.js";

test("registers independent world settings for all three planned packs", () => {
  const registrations = [];
  const gameRef = { settings: { register: (moduleId, key, config) => registrations.push({ moduleId, key, config }) } };
  assert.equal(registerSettings(gameRef), true);
  assert.deepEqual(registrations.map((entry) => entry.key), [
    SETTING_KEYS.WEAPON_MALFUNCTIONS,
    SETTING_KEYS.RANGED_ENGINEERING,
    SETTING_KEYS.EQUIPMENT_INCIDENTS
  ]);
  for (const entry of registrations) {
    assert.equal(entry.moduleId, MODULE_ID);
    assert.equal(entry.config.scope, "world");
    assert.equal(entry.config.type, Boolean);
    assert.equal(typeof entry.config.onChange, "function");
  }
  assert.deepEqual(registrations.map((entry) => entry.config.config), [true, true, false]);
  assert.deepEqual(registrations.map((entry) => entry.config.default), [true, true, false]);
});

test("reads settings independently and falls back to development defaults", () => {
  const values = new Map([
    [SETTING_KEYS.WEAPON_MALFUNCTIONS, false],
    [SETTING_KEYS.RANGED_ENGINEERING, true],
    [SETTING_KEYS.EQUIPMENT_INCIDENTS, true]
  ]);
  const gameRef = { settings: { get: (_moduleId, key) => values.get(key) } };
  assert.deepEqual(readPackSettings(gameRef), {
    [SETTING_KEYS.WEAPON_MALFUNCTIONS]: false,
    [SETTING_KEYS.RANGED_ENGINEERING]: true,
    [SETTING_KEYS.EQUIPMENT_INCIDENTS]: true
  });
  assert.deepEqual(readPackSettings({ settings: { get: () => { throw new Error("not ready"); } } }), {
    [SETTING_KEYS.WEAPON_MALFUNCTIONS]: true,
    [SETTING_KEYS.RANGED_ENGINEERING]: true,
    [SETTING_KEYS.EQUIPMENT_INCIDENTS]: false
  });
});

test("pack settings independently disable active packs while reserved packs stay disabled", () => {
  const packs = buildGoblinEngineeringPacks({
    [SETTING_KEYS.WEAPON_MALFUNCTIONS]: false,
    [SETTING_KEYS.RANGED_ENGINEERING]: false,
    [SETTING_KEYS.EQUIPMENT_INCIDENTS]: true
  });
  assert.equal(packs[0].enabled, false);
  assert.equal(packs[1].enabled, false);
  assert.equal(packs[2].enabled, false);
});
