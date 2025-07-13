async function fetchEggsData() {
  const response = await fetch('Data/eggs.json');
  const eggsJson = await response.json();
  return eggsJson;
}

const eggs = [
  {"name": "500M Egg", "image": "Images/Eggs/500M_Egg.webp", "Pets": [{"name": "Paragon", "baseOdds": 2857.2, "icon": "Images/Pets/Paragon.webp"}, {"name": "Platinum Dualcorn", "baseOdds": 50000, "icon": "Images/Pets/Platinum_Dualcorn.webp"}, {"name": "Super Hexarium", "baseOdds": 1000000, "icon": "Images/Pets/Super_Hexarium.webp"}, {"name": "Glitch", "baseOdds": 2000000, "icon": "Images/Pets/Glitch.webp"}, {"name": "Diamond Overlord (Secret)", "baseOdds": 33333333.4, "icon": "Images/Pets/Diamond_Overlord.webp"}, {"name": "Super Trophy (Secret)", "baseOdds": 100000000, "icon": "Images/Pets/Super_Trophy.webp"}, {"name": "Eternal Star (Secret)", "baseOdds": 200000000, "icon": "Images/Pets/Eternal_Star.webp"}, {"name": "Fallen Angel (Secret)", "baseOdds": 133333333.4, "icon": "Images/Pets/Fallen_Angel.webp"}, {"name": "King Kitty (Secret)", "baseOdds": 1000000000, "icon": "Images/Pets/King_Kitty.webp"}, {"name": "Giant Robot (Infinity)", "baseOdds": 40000000000, "icon": "Images/Pets/Giant_Robot.webp"}]},
  { name: "Common Egg", image: "Images/Eggs/Common_Egg.webp", Pets: [ { name: "King Doggy (Secret)", baseOdds: 100000000, icon: "Images/Pets/King_Doggy.webp" } ], world: "1" },
  { name: "Spikey Egg", image: "Images/Eggs/Spikey_Egg.webp", Pets: [ { name: "Emerald Golem", baseOdds: 200, icon: "Images/Pets/Emerald_Golem.webp" } ], world: "1" },
  { name: "Magma Egg", image: "Images/Eggs/Magma_Egg.webp", Pets: [ { name: "Inferno Dragon", baseOdds: 400, icon: "Images/Pets/Inferno_Dragon.webp" } ], world: "1" },
  { name: "Crystal Egg", image: "Images/Eggs/Crystal_Egg.webp", Pets: [ { name: "Unicorn", baseOdds: 400, icon: "Images/Pets/Unicorn.webp" }, { name: "Flying Pig", baseOdds: 1000, icon: "Images/Pets/Flying_Pig.webp" } ], world: "1" },
  { name: "Lunar Egg", image: "Images/Eggs/Lunar_Egg.webp", Pets: [ { name: "Lunar Serpent", baseOdds: 400, icon: "Images/Pets/Lunar_Serpent.webp" }, { name: "Electra", baseOdds: 1000, icon: "Images/Pets/Electra.webp" } ], world: "1" },
  { name: "Void Egg", image: "Images/Eggs/Void_Egg.webp", Pets: [ { name: "Dark Phoenix", baseOdds: 2000, icon: "Images/Pets/Dark_Phoenix.webp" }, { name: "Neon Elemntal", baseOdds: 5000, icon: "Images/Pets/Neon_Elemental.webp" }, { name: "NULLVoid", baseOdds: 1000000, icon: "Images/Pets/NULLVoid.webp" } ], world: "1" },
  { name: "Hell Egg", image: "Images/Eggs/Hell_Egg.webp", Pets: [ { name: "Inferno Cube", baseOdds: 4000, icon: "Images/Pets/Inferno_Cube.webp" }, { name: "Virus", baseOdds: 50000, icon: "Images/Pets/Virus.webp" } ], world: "1" },
  { name: "Nightmare Egg", image: "Images/Eggs/Nightmare_Egg.webp", Pets: [ { name: "Green Hydra", baseOdds: 25000, icon: "Images/Pets/Green_Hydra.webp" }, { name: "Demonic Hydra", baseOdds: 100000, icon: "Images/Pets/Demonic_Hydra.webp" }, { name: "The Overlord (Secret)", baseOdds: 1000000, icon: "Images/Pets/The_Overlord.webp" } ], world: "1" },
  { name: "Rainbow Egg", image: "Images/Eggs/Rainbow_Egg.webp", Pets: [ { name: "Hexarium", baseOdds: 100000, icon: "Images/Pets/Hexarium.webp" }, { name: "Rainbow Shock", baseOdds: 200000, icon: "Images/Pets/Rainbow_Shock.webp" } ], world: "1" },
  { name: "Mining Egg", image: "Images/Eggs/Mining_Egg.webp", Pets: [ { name: "Crystal Unicorn", baseOdds: 200, icon: "Images/Pets/Crystal_Unicorn.webp" }, { name: "Stone Gargoyle", baseOdds: 20000, icon: "Images/Pets/Stone_Gargoyle.webp" } ], world: "2" },
  { name: "Cyber Egg", image: "Images/Eggs/Cyber_Egg.webp", Pets: [ { name: "Cyborg Phoenix", baseOdds: 2500, icon: "Images/Pets/Cyborg_Phoenix.webp" }, { name: "Space Invader", baseOdds: 50000, icon: "Images/Pets/Space_Invader.webp" }, { name: "Bionic Shard", baseOdds: 666667, icon: "Images/Pets/Bionic_Shard.webp" }, { name: "Mech Robot (Secret)", baseOdds: 66666667, icon: "Images/Pets/Mech_Robot.webp" } ], world: "2" },
  { name: "Neon Egg", image: "Images/Eggs/Neon_Egg.webp", Pets: [ { name: "Neon Wyvern", baseOdds: 3334, icon: "Images/Pets/Neon_Wyvern.webp" }, { name: "Neon Wire Eye", baseOdds: 66667, icon: "Images/Pets/Neon_Wire_Eye.webp" }, { name: "Equalizer", baseOdds: 833334, icon: "Images/Pets/Equalizer.webp" }, { name: "Hyperwave Kitty (Secret)", baseOdds: 125000000, icon: "Images/Pets/Hyperwave_Kitty.webp" } ], world: "2" },
  { name: "Chance Egg", image: "Images/Eggs/Chance_Egg.webp", Pets: [ { name: "Ring Master", baseOdds: 100000, icon: "Images/Pets/Ring_Master.webp" }, { name: "Royal Guardian", baseOdds: 200000000, icon: "Images/Pets/Royal_Guardian.webp" } ], world: "2" }
];

const eggList = document.getElementById("egg-list");

function createEggCard(egg, canSpawnAsRift) {
  const card = document.createElement("div");
  card.className = "egg-card";
  card.setAttribute("data-world", egg.world);

  const eggHeader = document.createElement("div");
  eggHeader.className = "egg-header";
  eggHeader.innerHTML = `<img src="${egg.image}" alt="${egg.name}" style="width: 40px; height: 40px;" />
                           <h2>${egg.name}</h2>`;

  const controls = document.createElement("div");
  controls.className = "controls";
  let controlsHtml = '';
  if (canSpawnAsRift) {
    controlsHtml += `
      <label>Rift:</label>
      <select class="multiplier">
        <option value="0">No</option>
        <option value="5">5x</option>
        <option value="10">10x</option>
        <option value="20">20x</option>
        <option value="25">25x</option>
      </select>
    `;
  }
  controlsHtml += `
    <label>Luck Multiplier (%):</label>
    <input type="number" class="luck" value="0" />
  `;
  controls.innerHTML = controlsHtml;

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Pet</th>
        <th>Base Odds</th>
        <th>Adjusted (1 in X)</th>
        <th>Adjusted (%)</th>
      </tr>
    </thead>
    <tbody class="pet-list"></tbody>
  `;

  card.appendChild(eggHeader);
  card.appendChild(controls);
  card.appendChild(table);
  eggList.appendChild(card);

  const multiplierSelect = controls.querySelector(".multiplier");
  const luckInput = controls.querySelector(".luck");
  const petList = table.querySelector(".pet-list");

  function formatAdjustedPercent(adjustedChance) {
    const adjustedPercent = adjustedChance * 100;
    if (adjustedPercent === 0) {
      return "Unknown";
    }
    const formatted = adjustedPercent.toExponential(8);
    return parseFloat(formatted).toString();
  }

  function updateChances() {
    const multiplierValue = multiplierSelect ? parseFloat(multiplierSelect.value) : 0;
    const riftBonusPercent = multiplierValue * 100;
    const luckPercent = parseFloat(luckInput.value);
    const effectiveLuckPercent = luckPercent + riftBonusPercent;
    const combinedMultiplier = 1 + effectiveLuckPercent / 100;

    petList.innerHTML = "";

    egg.Pets.forEach(pet => {
      const baseChance = 1 / pet.baseOdds;
      const adjustedChance = baseChance * combinedMultiplier;
      const adjustedOneIn = adjustedChance > 0 ? Math.round(1 / adjustedChance).toLocaleString() : "∞";
      let adjustedPercent = formatAdjustedPercent(adjustedChance);

      if (adjustedPercent.length > 16) {
        adjustedPercent = `<button class='show-amount'>Show amount</button>`;
      }

      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="pet-name">
          <img src="${pet.icon}" alt="${pet.name}" />
          ${pet.name}
        </td>
        <td>1 in ${pet.baseOdds.toLocaleString()}</td>
        <td>1 in ${adjustedOneIn}</td>
        <td>${adjustedPercent}%</td>
      `;
      petList.appendChild(row);
    });
  }

  updateChances();
  if (multiplierSelect) multiplierSelect.addEventListener("change", updateChances);
  luckInput.addEventListener("input", () => {
    if (luckInput.value === "" || parseFloat(luckInput.value) < 0) {
      luckInput.value = 0;
    }
    updateChances();
  });
}



let petsData = null;
async function fetchPetsData() {
  if (petsData) return petsData;
  const response = await fetch('Data/pets.json');
  petsData = await response.json();
  return petsData;
}

(async function() {
  const eggsJson = await fetchEggsData();
  await fetchPetsData();
  eggs.forEach(egg => {
    const jsonEgg = eggsJson.find(e => e.name === egg.name);
    const canSpawnAsRift = jsonEgg && jsonEgg.canSpawnAsRift;
    createEggCard(egg, canSpawnAsRift);
  });
  setupPetStatsHover();
})();

function setupPetStatsHover() {
  let statsCard = document.createElement('div');
  statsCard.id = 'pet-stats-card';
  statsCard.className = 'pet-stats-popup';
  statsCard.style.display = 'none';
  statsCard.innerHTML = '';
  document.body.appendChild(statsCard);


  const statIcons = {
    bubbles: 'Images/Icons/Bubble_Gum.webp',
    gems: 'Images/Icons/Gems.webp',
    coins: 'Images/Icons/Coins.webp',
    tickets: 'Images/Icons/Tickets.webp',
    festival_coins: 'Images/Icons/Festival_Coins.webp',
  };

  function getStatIcon(stat) {
    if (stat === 'bubbles') return statIcons.bubbles;
    if (stat === 'gems') return statIcons.gems;
    if (stat === 'coins') return statIcons.coins;
    if (stat === 'tickets') return statIcons.tickets;
    if (stat === 'festival_coins') return statIcons.festival_coins;
    return '';
  }

  function buildStatsRows(stats) {
    let html = '';
    const statOrder = ['bubbles', 'gems', 'coins', 'tickets', 'festival_coins'];
    for (const stat of statOrder) {
      if (stats[stat] !== undefined && stats[stat] !== null) {
        if (stat === 'gems' && Number(stats[stat]) === 0) continue;
        html += `<div class="pet-stats-row">
          <img src="${getStatIcon(stat)}" alt="${stat}" class="pet-stats-icon">
          <span class="pet-stats-value">x${stats[stat]}</span>
        </div>`;
      }
    }
    return html;
  }

  function findPetData(petName) {
    if (!petsData) return null;
    let baseName = petName.replace(/\(.*?\)/g, '').trim();
    let found = petsData.find(p => p.pet_name && p.pet_name.toLowerCase() === baseName.toLowerCase());
    if (found) return found;
    found = petsData.find(p => p.pet_name && baseName.toLowerCase().includes(p.pet_name.toLowerCase()));
    if (found) return found;
    found = petsData.find(p => p.pet_name && baseName.toLowerCase().startsWith(p.pet_name.toLowerCase()));
    return found || null;
  }

  let fadeTimeout = null;
  let showingMax = false;
  let lastStats = null;
  let isCardVisible = false;
  let currentCell = null;
  let isMouseOverCell = false;
  let isMouseOverPopup = false;

  function showStatsCard(cell) {
    const petName = cell.textContent.trim();
    const petData = findPetData(petName);
    if (!petData || !petData.variants || !petData.variants.length) return;
    const normalVariant = petData.variants.find(v => v.name === 'Normal');
    if (!normalVariant || !normalVariant.stats) return;
    lastStats = normalVariant.stats;
    showingMax = false;
    renderStatsCard(lastStats.base, 'Base stats');
    const icon = cell.querySelector('img');
    let rect = cell.getBoundingClientRect();
    let iconRect = icon ? icon.getBoundingClientRect() : rect;
    let x = iconRect.right + 40;
    let y = iconRect.top + (iconRect.height / 2) - 50;
    if (x + 260 > window.innerWidth) x = window.innerWidth - 270;
    if (y + 180 > window.innerHeight) y = window.innerHeight - 190;
    if (y < 0) y = 10;
    statsCard.style.left = x + 'px';
    statsCard.style.top = y + 'px';
    statsCard.style.display = 'block';
    statsCard.style.pointerEvents = 'auto';
    isCardVisible = true;
    currentCell = cell;
    setTimeout(() => { statsCard.style.opacity = '1'; }, 10);
  }

  function tryHideStatsCard() {
    if (!isMouseOverCell && !isMouseOverPopup) {
      statsCard.style.opacity = '0';
      fadeTimeout = setTimeout(() => {
        statsCard.style.display = 'none';
        statsCard.style.pointerEvents = 'none';
        isCardVisible = false;
        currentCell = null;
      }, 180);
    }
  }

  function renderStatsCard(stats, label) {
    let html = `<img src='Images/Icons/close.ico' id='close-stats-card' alt='Close' title='Close' class='close-stats-card'>`;
    html += `<div class='pet-stats-label'>${label}</div>`;
    html += buildStatsRows(stats);
    html += `<button id='toggle-max-stats' class='toggle-max-stats'>${showingMax ? 'Show Base stats' : 'Show Max stats'}</button>`;
    statsCard.innerHTML = html;
    const closeBtn = statsCard.querySelector('#close-stats-card');
    closeBtn.onclick = (ev) => {
      ev.stopPropagation();
      statsCard.style.opacity = '0';
      setTimeout(() => {
        statsCard.style.display = 'none';
        statsCard.style.pointerEvents = 'none';
        isCardVisible = false;
        currentCell = null;
      }, 180);
    };
    const btn = statsCard.querySelector('#toggle-max-stats');
    btn.onclick = (ev) => {
      ev.stopPropagation();
      showingMax = !showingMax;
      renderStatsCard(showingMax ? lastStats.max : lastStats.base, showingMax ? 'Max stats' : 'Base stats');
    };
  }

  document.querySelectorAll('.pet-name').forEach(cell => {
    cell.style.position = 'relative';
    cell.addEventListener('mouseenter', function() {
      isMouseOverCell = true;
      if (fadeTimeout) clearTimeout(fadeTimeout);
      showStatsCard(cell);
    });
    cell.addEventListener('mouseleave', function(e) {
      isMouseOverCell = false;
      if (e && statsCard.contains(e.relatedTarget)) return;
      fadeTimeout = setTimeout(tryHideStatsCard, 10);
    });
  });
  statsCard.addEventListener('mouseenter', function() {
    isMouseOverPopup = true;
    if (fadeTimeout) clearTimeout(fadeTimeout);
    statsCard.style.opacity = '1';
  });
  statsCard.addEventListener('mouseleave', function(e) {
    isMouseOverPopup = false;
    if (e && currentCell && currentCell.contains(e.relatedTarget)) return;
    fadeTimeout = setTimeout(tryHideStatsCard, 10);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
  setTheme(savedTheme);


  if (!localStorage.getItem('selectedTheme')) {
    setTheme('dark');
  }
});

function setTheme(theme) {
  document.body.className = theme === 'dark' ? 'theme-dark' : 'theme-purple';
  localStorage.setItem('selectedTheme', theme);

  const root = document.documentElement;
  if (theme === 'dark') {
    root.style.setProperty('--main-bg', '#121212');
    root.style.setProperty('--main-bg-accent', '#2a2a2a');
    root.style.setProperty('--main-bg-accent2', '#3a3a3a');
    root.style.setProperty('--main-text', '#e0e0e0');
    root.style.setProperty('--container-bg', '#1e1e1e');
    root.style.setProperty('--container-border', '#2a2a2a');
    root.style.setProperty('--table-bg', '#2a2a2a');
    root.style.setProperty('--table-th-bg', '#1e1e1e');
    root.style.setProperty('--table-td-bg', '#1e1e1e');
    root.style.setProperty('--table-border', '#3a3a3a');
    root.style.setProperty('--egg-card-bg', '#2a2a2a');
    root.style.setProperty('--egg-header-bg', '#1e1e1e');
    root.style.setProperty('--controls-bg', '#1e1e1e');
    root.style.setProperty('--sidebar-bg', '#1e1e1e');
    root.style.setProperty('--sidebar-header-bg', '#2a2a2a');
    root.style.setProperty('--credits-bg', '#1e1e1e');
    root.style.setProperty('--settings-bg', '#1e1e1e');
    root.style.setProperty('--popup-bg', 'rgba(30,30,30,0.98)');
  } else {
    root.style.setProperty('--main-bg', '#2e003e');
    root.style.setProperty('--main-bg-accent', '#3c005d');
    root.style.setProperty('--main-bg-accent2', '#4a006b');
    root.style.setProperty('--main-text', '#fff');
    root.style.setProperty('--container-bg', '#18101c');
    root.style.setProperty('--container-border', '#2e003e');
    root.style.setProperty('--table-bg', '#5b0077');
    root.style.setProperty('--table-th-bg', '#450056');
    root.style.setProperty('--table-td-bg', '#450056');
    root.style.setProperty('--table-border', '#5e0081');
    root.style.setProperty('--egg-card-bg', '#3c005d');
    root.style.setProperty('--egg-header-bg', '#4a006b');
    root.style.setProperty('--controls-bg', '#4a006b');
    root.style.setProperty('--sidebar-bg', '#4a006b');
    root.style.setProperty('--sidebar-header-bg', '#32004d');
    root.style.setProperty('--credits-bg', '#4a006b');
    root.style.setProperty('--settings-bg', '#4a006b');
    root.style.setProperty('--popup-bg', 'rgba(40,0,60,0.98)');
  }
}