async function fetchEggsData() {
  const response = await fetch('data/eggs.json');
  const eggsJson = await response.json();
  return eggsJson;
}

const eggs = [
  { name: "Bee Egg", image: "images/eggs/bee_egg.webp", Pets: [{ name: "Angel Bee", baseOdds: 10000, icon: "images/pets/angel_bee.webp" }, { name: "Evil Bee", baseOdds: 250000, icon: "images/pets/evil_bee.webp" }, { name: "Bee Bee Bee", baseOdds: 1000000, icon: "images/pets/bee_bee_bee.webp" }, { name: "Queen Bee (Secret)", baseOdds: 20000000, icon: "images/pets/queen_bee.webp" }], world: "limited" },
  { name: "500M Egg", image: "images/eggs/500m_egg.webp", Pets: [{ name: "Paragon", baseOdds: 2857.2, icon: "images/pets/paragon.webp" }, { name: "Platinum Dualcorn", baseOdds: 50000, icon: "images/pets/platinum_dualcorn.webp" }, { name: "Super Hexarium", baseOdds: 1000000, icon: "images/pets/super_hexarium.webp" }, { name: "Glitch", baseOdds: 2000000, icon: "images/pets/glitch.webp" }, { name: "Diamond Overlord (Secret)", baseOdds: 33333333.4, icon: "images/pets/diamond_overlord.webp" }, { name: "Super Trophy (Secret)", baseOdds: 100000000, icon: "images/pets/super_trophy.webp" }, { name: "Fallen Angel (Secret)", baseOdds: 133333333.4, icon: "images/pets/fallen_angel.webp" }, { name: "Eternal Star (Secret)", baseOdds: 200000000, icon: "images/pets/eternal_star.webp" }, { name: "King Kitty (Secret)", baseOdds: 1000000000, icon: "images/pets/king_kitty.webp" }, { name: "Giant Robot (Infinity)", baseOdds: 40000000000, icon: "images/pets/giant_robot.webp" }], world: "limited" },
  { name: "Common Egg", image: "images/eggs/common_egg.webp", Pets: [{ name: "King Doggy (Secret)", baseOdds: 100000000, icon: "images/pets/king_doggy.webp" }], world: "1" },
  { name: "Spikey Egg", image: "images/eggs/spikey_egg.webp", Pets: [{ name: "Emerald Golem", baseOdds: 200, icon: "images/pets/emerald_golem.webp" }], world: "1" },
  { name: "Magma Egg", image: "images/eggs/magma_egg.webp", Pets: [{ name: "Inferno Dragon", baseOdds: 400, icon: "images/pets/inferno_dragon.webp" }], world: "1" },
  { name: "Crystal Egg", image: "images/eggs/crystal_egg.webp", Pets: [{ name: "Unicorn", baseOdds: 400, icon: "images/pets/unicorn.webp" }, { name: "Flying Pig", baseOdds: 1000, icon: "images/pets/flying_pig.webp" }], world: "1" },
  { name: "Lunar Egg", image: "images/eggs/lunar_egg.webp", Pets: [{ name: "Lunar Serpent", baseOdds: 400, icon: "images/pets/lunar_serpent.webp" }, { name: "Electra", baseOdds: 1000, icon: "images/pets/electra.webp" }], world: "1" },
  { name: "Void Egg", image: "images/eggs/void_egg.webp", Pets: [{ name: "Dark Phoenix", baseOdds: 2000, icon: "images/pets/dark_phoenix.webp" }, { name: "Neon Elemntal", baseOdds: 5000, icon: "images/pets/neon_elemental.webp" }, { name: "NULLVoid", baseOdds: 1000000, icon: "images/pets/nullvoid.webp" }], world: "1" },
  { name: "Hell Egg", image: "images/eggs/hell_egg.webp", Pets: [{ name: "Inferno Cube", baseOdds: 4000, icon: "images/pets/inferno_cube.webp" }, { name: "Virus", baseOdds: 50000, icon: "images/pets/virus.webp" }], world: "1" },
  { name: "Nightmare Egg", image: "images/eggs/nightmare_egg.webp", Pets: [{ name: "Green Hydra", baseOdds: 25000, icon: "images/pets/green_hydra.webp" }, { name: "Demonic Hydra", baseOdds: 100000, icon: "images/pets/demonic_hydra.webp" }, { name: "The Overlord (Secret)", baseOdds: 1000000, icon: "images/pets/the_overlord.webp" }], world: "1" },
  { name: "Rainbow Egg", image: "images/eggs/rainbow_egg.webp", Pets: [{ name: "Hexarium", baseOdds: 100000, icon: "images/pets/hexarium.webp" }, { name: "Rainbow Shock", baseOdds: 200000, icon: "images/pets/rainbow_shock.webp" }], world: "1" },
  { name: "Mining Egg", image: "images/eggs/mining_egg.webp", Pets: [{ name: "Crystal Unicorn", baseOdds: 200, icon: "images/pets/crystal_unicorn.webp" }, { name: "Stone Gargoyle", baseOdds: 20000, icon: "images/pets/stone_gargoyle.webp" }], world: "2" },
  { name: "Cyber Egg", image: "images/eggs/cyber_egg.webp", Pets: [{ name: "Cyborg Phoenix", baseOdds: 2500, icon: "images/pets/cyborg_phoenix.webp" }, { name: "Space Invader", baseOdds: 50000, icon: "images/pets/space_invader.webp" }, { name: "Bionic Shard", baseOdds: 666667, icon: "images/pets/bionic_shard.webp" }, { name: "Mech Robot (Secret)", baseOdds: 66666667, icon: "images/pets/mech_robot.webp" }], world: "2" },
  { name: "Neon Egg", image: "images/eggs/neon_egg.webp", Pets: [{ name: "Neon Wyvern", baseOdds: 3334, icon: "images/pets/neon_wyvern.webp" }, { name: "Neon Wire Eye", baseOdds: 66667, icon: "images/pets/neon_wire_eye.webp" }, { name: "Equalizer", baseOdds: 833334, icon: "images/pets/equalizer.webp" }, { name: "Hyperwave Kitty (Secret)", baseOdds: 125000000, icon: "images/pets/hyperwave_kitty.webp" }], world: "2" },
  { name: "Chance Egg", image: "images/eggs/chance_egg.webp", Pets: [{ name: "Ring Master", baseOdds: 100000, icon: "images/pets/ring_master.webp" }, { name: "Royal Guardian", baseOdds: 200000000, icon: "images/pets/royal_guardian.webp" }], world: "2" }
];

let selectedWorld = null;
let selectedEgg = null;
let lastSearchValue = '';
const eggList = document.getElementById("egg-list");

function renderEggs() {
  animateEggList(() => {
    eggList.innerHTML = '';
    const eggsJson = window.eggsJson || [];
    const searchBarRow = document.getElementById('search-bar-row');
    const worldsSidebar = document.querySelector('.worlds-sidebar');
    
    const searchInput = document.getElementById('search-bar');
    if (searchInput) lastSearchValue = searchInput.value;
    document.querySelectorAll('.world-icon-btn').forEach(btn => {
      btn.classList.remove('selected');
      if (selectedWorld) {
        if (
          (selectedWorld === '1' && btn.classList.contains('overworld')) ||
          (selectedWorld === '2' && btn.classList.contains('minigame')) ||
          (selectedWorld === 'limited' && btn.classList.contains('limited'))
        ) {
          btn.classList.add('selected');
        }
      }
    });
    if (selectedEgg) {
      
      if (searchBarRow) searchBarRow.classList.add('hide-search-bar-row');
      
      if (worldsSidebar) worldsSidebar.style.display = 'none';

      const egg = eggs.find(e => e.name === selectedEgg);
      const jsonEgg = eggsJson.find(e => e.name === egg.name);
      const canSpawnAsRift = jsonEgg && jsonEgg.canSpawnAsRift;
      animateEggDetails(() => createEggDetailsView(egg, canSpawnAsRift));
      return;
    }
    
    if (searchBarRow) searchBarRow.classList.remove('hide-search-bar-row');
    if (worldsSidebar) worldsSidebar.style.display = '';
    let filteredEggs = eggs;
    if (selectedWorld) {
      filteredEggs = eggs.filter(egg => egg.world === selectedWorld);
    }
    filteredEggs.forEach(egg => {
      createEggGridItem(egg);
    });
  });
}

function selectWorld(world) {
  const eggList = document.getElementById("egg-list");
  
  if (selectedWorld === world) {
    selectedWorld = null;
    selectedEgg = null;
    animateEggList(() => renderEggs());
    return;
  }
  selectedWorld = world;
  selectedEgg = null;
  animateEggList(() => renderEggs());
}

function animateEggList(callback) {
  const eggList = document.getElementById("egg-list");
  eggList.classList.add("fading");
  setTimeout(() => {
    eggList.innerHTML = '';
    callback();
    eggList.classList.remove("fading");
  }, 200);
}

function animateEggDetails(callback) {
  const layout = document.querySelector(".egg-details-layout");
  if (layout) {
    layout.classList.add("fading");
    setTimeout(() => {
      callback();
      layout.classList.remove("fading");
    }, 200);
  } else {
    callback();
  }
}

function createEggGridItem(egg) {
  const card = document.createElement("div");
  card.className = "egg-card";
  card.setAttribute("data-world", egg.world);
  card.style.cursor = "pointer";
  card.onclick = () => {
    selectedEgg = egg.name;
    renderEggs();
  };
  const eggHeader = document.createElement("div");
  eggHeader.className = "egg-header";
  eggHeader.innerHTML = `<img src="${egg.image}" alt="${egg.name}" style="width: 56px; height: 56px;" />
                         <h2>${egg.name}</h2>`;
  card.appendChild(eggHeader);
  eggList.appendChild(card);
}

function createEggDetailsView(egg, canSpawnAsRift) {
  eggList.innerHTML = '';
  const backBtn = document.createElement("button");
  backBtn.className = "egg-back-btn";
  backBtn.style.position = "absolute";
  backBtn.style.left = "20px";
  backBtn.style.top = "140px";
  backBtn.style.background = "none";
  backBtn.style.border = "none";
  backBtn.style.padding = "10px";
  backBtn.style.zIndex = "20";
  backBtn.style.cursor = "pointer";
  backBtn.innerHTML = `<img src="Images/Icons/back.ico" alt="Back" style="width:32px;height:32px;vertical-align:middle;">`;
  backBtn.onclick = () => {
    selectedEgg = null;
    const searchInput = document.getElementById('search-bar');
    if (searchInput) searchInput.value = lastSearchValue;
    renderEggs();
  };

  const layout = document.createElement('div');
  layout.className = 'egg-details-layout';

  const left = document.createElement('div');
  left.className = 'egg-details-left';
  const eggIcon = document.createElement('img');
  eggIcon.className = 'egg-icon-big';
  eggIcon.src = egg.image;
  eggIcon.alt = egg.name;
  left.appendChild(eggIcon);
  const eggName = document.createElement('div');
  eggName.className = 'egg-name';
  eggName.textContent = egg.name;
  left.appendChild(eggName);
  left.appendChild(createEggSettings(egg, canSpawnAsRift));

  const middle = document.createElement('div');
  middle.className = 'egg-details-middle';
  middle.appendChild(createEggPetInfoCard(egg, canSpawnAsRift));

  const right = document.createElement('div');
  right.className = 'egg-details-right';

  layout.appendChild(left);
  layout.appendChild(middle);
  layout.appendChild(right);

  eggList.appendChild(backBtn);
  eggList.appendChild(layout);
}



function createEggSettings(egg, canSpawnAsRift) {
  const controls = document.createElement("div");
  controls.className = "controls";
  let controlsHtml = '';
  if (canSpawnAsRift) {
    if (egg.name === "Bee Egg") {
      controlsHtml += `
        <label>Rift:</label>
        <select class="multiplier">
          <option value="5" selected>5x</option>
          <option value="10">10x</option>
          <option value="20">20x</option>
          <option value="25">25x</option>
        </select>
      `;
    } else {
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
  }
  controlsHtml += `
    <label>Luck Multiplier (%):</label>
    <input type="number" class="luck" value="0" />
  `;
  const hasSecret = egg.Pets.some(pet => /(Secret|Infinity)/i.test(pet.name));
  if (hasSecret) {
    controlsHtml += `
      <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-top:4px;width:100%;">
        <label style="margin-bottom:0;">Secret Multiplier (x):</label>
        <input type="number" class="secret-mult" value="1" min="1" step="0.01" style="width:70px;margin-bottom:0;" />
      </div>
    `;
  }
  controls.innerHTML = controlsHtml;
  return controls;
}

function createEggPetInfoCard(egg, canSpawnAsRift) {
  const card = document.createElement("div");
  card.className = "egg-card";
  card.setAttribute("data-world", egg.world);
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
  card.appendChild(table);

  setTimeout(() => {
    const layout = document.querySelector('.egg-details-layout');
    if (!layout) return;
    const controls = layout.querySelector('.egg-details-left .controls');
    if (!controls) return;
    const multiplierSelect = controls.querySelector(".multiplier");
    const luckInput = controls.querySelector(".luck");
    const secretInput = controls.querySelector(".secret-mult");
    const petList = table.querySelector(".pet-list");

    function formatAdjustedPercent(adjustedChance) {
      const adjustedPercent = adjustedChance * 100;
      if (adjustedPercent === 0) return "Unknown";
      const formatted = adjustedPercent.toExponential(8);
      return parseFloat(formatted).toString();
    }

    function updateChances() {
      const multiplierValue = multiplierSelect ? parseFloat(multiplierSelect.value) : 0;
      const riftBonusPercent = multiplierValue * 100;
      const luckPercent = luckInput.value === "" ? 0 : parseFloat(luckInput.value);
      const secretTimes = secretInput ? (secretInput.value === "" ? 1 : Math.max(1, parseFloat(secretInput.value))) : 1;
      const effectiveLuckPercent = luckPercent + riftBonusPercent;
      petList.innerHTML = "";
      egg.Pets.forEach(pet => {
        const isSecret = /(Secret|Infinity)/i.test(pet.name);
        const baseChance = 1 / pet.baseOdds;
        let combinedMultiplier = 1 + effectiveLuckPercent / 100;
        if (isSecret) {
          combinedMultiplier *= secretTimes;
        }
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
      setupPetStatsHover();
    }

    updateChances();
    if (multiplierSelect) multiplierSelect.addEventListener("change", updateChances);
    luckInput.addEventListener("focus", () => {
      if (luckInput.value === "0") luckInput.value = "";
    });
    luckInput.addEventListener("blur", () => {
      if (luckInput.value === "") luckInput.value = "0";
    });
    luckInput.addEventListener("input", updateChances);
    if (secretInput) secretInput.addEventListener("input", updateChances);
  }, 0);

  return card;
}



let petsData = null;
async function fetchPetsData() {
  if (petsData) return petsData;
  const response = await fetch('Data/pets.json');
  petsData = await response.json();
  return petsData;
}


(async function() {
  window.eggsJson = await fetchEggsData();
  await fetchPetsData();
  renderEggs();
  setupPetStatsHover();
  const warningIcon = document.getElementById('search-warning-icon');
  const warningTooltip = document.getElementById('search-warning-tooltip');
  if (warningIcon && warningTooltip) {
    warningIcon.addEventListener('mouseenter', () => {
      warningTooltip.style.display = 'block';
    });
    warningIcon.addEventListener('mouseleave', () => {
      warningTooltip.style.display = 'none';
    });
  }
})();
function searchEggsAndPets() {
  const searchTerm = document.getElementById('search-bar').value.toLowerCase();
  eggList.innerHTML = '';
  const eggsJson = window.eggsJson || [];
  eggs.forEach(egg => {
    const jsonEgg = eggsJson.find(e => e.name === egg.name);
    const canSpawnAsRift = jsonEgg && jsonEgg.canSpawnAsRift;
    if (egg.world === selectedWorld && (egg.name.toLowerCase().includes(searchTerm) || egg.Pets.some(pet => pet.name.toLowerCase().includes(searchTerm)))) {
      createEggCard(egg, canSpawnAsRift);
    }
  });
}

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