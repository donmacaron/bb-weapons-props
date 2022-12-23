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
  CONFIG.DND5E.weaponIds = {
  ...CONFIG.DND5E.weaponIds,
  // Добавь ID предметов, являющихся базовым вариантом оружия
    trickweap: "eBxvVLR7jo35G75f",
    trickfirearm: "AgfoTQCMQ5uJH7NU",
    firearm: "vJ9KzYD03yIAfhLl",
    choir: "t1G8fkvutUGvqAbT"
  };
});
