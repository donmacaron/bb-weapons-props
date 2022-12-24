Hooks.on("init", async function () {
  CONFIG.DND5E.weaponProperties = {
    ...CONFIG.DND5E.weaponProperties,
    // Добавь свои свойства
    arcane: "Arcane",
    piercing: "Piercing",
    reload: "Reload",
    scatter: "Scatter",
    serrated: "Serrated",
    trick: "Trick",
    lngreach: "Long Reach",
    unwieldy: "Unwieldy"
  };
});
