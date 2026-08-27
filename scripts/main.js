import { MODULE_ID } from "./constants.js";
import { initializeGoblinEngineering, refreshGoblinEngineeringPacks } from "./runtime.js";
import { bindSettingsRefresh, registerSettings } from "./settings.js";

if (globalThis.Hooks?.once) {
  Hooks.once("init", () => {
    registerSettings();
    bindSettingsRefresh(() => {
      const result = refreshGoblinEngineeringPacks();
      if (result && globalThis.game?.user?.isGM) {
        const message = globalThis.game?.i18n?.localize?.("PF2E_GOBLIN_ENGINEERING.Notifications.PackSelectionUpdated")
          ?? "Goblin Engineering pack selection updated.";
        globalThis.ui?.notifications?.info?.(message);
      }
    });
  });

  Hooks.once("pf2eCriticalForgeReady", (forge) => {
    try {
      initializeGoblinEngineering(forge);
      console.info(`${MODULE_ID} | Registered Goblin Engineering with Critical Forge.`);
    } catch (error) {
      console.error(`${MODULE_ID} | Registration failed.`, error);
      const message = globalThis.game?.i18n?.localize?.("PF2E_GOBLIN_ENGINEERING.Notifications.RegistrationFailed")
        ?? "PF2E Critical Forge: Goblin Engineering could not register with Critical Forge.";
      globalThis.ui?.notifications?.error?.(message);
    }
  });
}
