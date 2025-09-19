async function fetchEggsData() {
  const response = await fetch('Data/eggs.json');
  const eggsJson = await response.json();
  return eggsJson;
}

const eggs = [
  { name: "Common Egg", image: "Images/Eggs/Common_Egg.webp", Pets: [ { name: "King Doggy (Secret)", baseOdds: 100000000, icon: "Images/Pets/King_Doggy.webp" } ], world: "1" },
  { name: "Spikey Egg", image: "Images/Eggs/Spikey_Egg.webp", Pets: [ { name: "Emerald Golem", baseOdds: 200, icon: "Images/Pets/Emerald_Golem.webp" } ], world: "1" },
  { name: "Magma Egg", image: "Images/Eggs/Magma_Egg.webp", Pets: [ { name: "Inferno Dragon", baseOdds: 400, icon: "Images/Pets/Inferno_Dragon.webp" } ], world: "1" },
  { name: "Crystal Egg", image: "Images/Eggs/Crystal_Egg.webp", Pets: [ { name: "Unicorn", baseOdds: 400, icon: "Images/Pets/Unicorn.webp" }, { name: "Flying Pig", baseOdds: 1000, icon: "Images/Pets/Flying_Pig.webp" } ], world: "1" },
  { name: "Lunar Egg", image: "Images/Eggs/Lunar_Egg.webp", Pets: [ { name: "Lunar Serpent", baseOdds: 400, icon: "Images/Pets/Lunar_Serpent.webp" }, { name: "Electra", baseOdds: 1000, icon: "Images/Pets/Electra.webp" } ], world: "1" },
  { name: "Void Egg", image: "Images/Eggs/Void_Egg.webp", Pets: [ { name: "Dark Phoenix", baseOdds: 2000, icon: "Images/Pets/Dark_Phoenix.webp" }, { name: "Neon Elemntal", baseOdds: 5000, icon: "Images/Pets/Neon_Elemental.webp" }, { name: "NULLVoid", baseOdds: 1000000, icon: "Images/Pets/NULLVoid.webp" } ], world: "1" },
  { name: "Hell Egg", image: "Images/Eggs/Hell_Egg.webp", Pets: [ { name: "Inferno Cube", baseOdds: 4000, icon: "Images/Pets/Inferno_Cube.webp" }, { name: "Virus", baseOdds: 50000, icon: "Images/Pets/Virus.webp" } ], world: "1" },
  { name: "Nightmare Egg", image: "Images/Eggs/Nightmare_Egg.webp", Pets: [ { name: "Green Hydra", baseOdds: 25000, icon: "Images/Pets/Green_Hydra.webp" }, { name: "Demonic Hydra", baseOdds: 100000, icon: "Images/Pets/Demonic_Hydra.webp" }, { name: "The Overlord (Secret)", baseOdds: 50000000, icon: "Images/Pets/The_Overlord.webp" } ], world: "1" },
  { name: "Rainbow Egg", image: "Images/Eggs/Rainbow_Egg.webp", Pets: [ { name: "Hexarium", baseOdds: 100000, icon: "Images/Pets/Hexarium.webp" }, { name: "Rainbow Shock", baseOdds: 200000, icon: "Images/Pets/Rainbow_Shock.webp" } ], world: "1" },
  { name: "Mining Egg", image: "Images/Eggs/Mining_Egg.webp", Pets: [ { name: "Crystal Unicorn", baseOdds: 200, icon: "Images/Pets/Crystal_Unicorn.webp" }, { name: "Stone Gargoyle", baseOdds: 20000, icon: "Images/Pets/Stone_Gargoyle.webp" } ], world: "2" },
  { name: "Cyber Egg", image: "Images/Eggs/Cyber_Egg.webp", Pets: [ { name: "Cyborg Phoenix", baseOdds: 2500, icon: "Images/Pets/Cyborg_Phoenix.webp" }, { name: "Space Invader", baseOdds: 50000, icon: "Images/Pets/Space_Invader.webp" }, { name: "Bionic Shard", baseOdds: 666667, icon: "Images/Pets/Bionic_Shard.webp" }, { name: "Mech Robot (Secret)", baseOdds: 66666667, icon: "Images/Pets/Mech_Robot.webp" } ], world: "2" },
  { name: "Neon Egg", image: "Images/Eggs/Neon_Egg.webp", Pets: [ { name: "Neon Wyvern", baseOdds: 3334, icon: "Images/Pets/Neon_Wyvern.webp" }, { name: "Neon Wire Eye", baseOdds: 66667, icon: "Images/Pets/Neon_Wire_Eye.webp" }, { name: "Equalizer", baseOdds: 833334, icon: "Images/Pets/Equalizer.webp" }, { name: "Hyperwave Kitty (Secret)", baseOdds: 125000000, icon: "Images/Pets/Hyperwave_Kitty.webp" } ], world: "2" },
  { name: "Chance Egg", image: "Images/Eggs/Chance_Egg.webp", Pets: [ { name: "Ring Master", baseOdds: 100000, icon: "Images/Pets/Ring_Master.webp" }, { name: "Royal Guardian", baseOdds: 200000000, icon: "Images/Pets/Royal_Guardian.webp" } ], world: "2" },
  { name: "Icy Egg", image: "Images/Eggs/Icy_Egg.webp", Pets: [ { name: "Marshmallow", baseOdds: 200, icon: "Images/Pets/Marshmallow.webp"}, { name: "Minty Serpent", baseOdds: 66667, icon: "Images/Pets/Minty_Serpent.webp"}, { name: "Ice Winged Hydra", baseOdds: 333334, icon: "Images/Pets/Ice_Winged_Hydra.webp"}, { name: "Giant Pearl (Secret)", baseOdds: 125000000, icon: "Images/Pets/Giant_Pearl.webp"}], world: "3"},
  { name: "Vine Egg", image: "Images/Eggs/Vine_Egg.webp", Pets: [ { name: "Thorn Dragon", baseOdds: 4000, icon: "Images/Pets/Thorn_Dragon.webp"}, { name: "Flower Pot", baseOdds: 100000, icon: "Images/Pets/Flower_Pot.webp"}, { name: "Lovely Lotus", baseOdds: 1000000, icon: "Images/Pets/Lovely_Lotus.webp"}, { name: "Fire Champion (Secret)", baseOdds: 500000000, icon: "Images/Pets/Fire_Champion.webp"}, { name: "Dark Champion (Secret)", baseOdds: 500000000, icon: "Images/Pets/Dark_Champion.webp"}, { name: "Earth Champion (Secret)", baseOdds: 500000000, icon: "Images/Pets/Earth_Champion.webp"}, { name: "Sky Champion (Secret)", baseOdds: 500000000, icon: "Images/Pets/Sky_Champion.webp"}], world: "3"},
  { name: "Secret Egg", image: "Images/Eggs/Placeholder_Egg.webp", Pets: [ { name: "Gigantic Spitty (Infinity)", baseOdds: 40000000000, icon: "Images/Pets/Gigantic_Spitty.webp"}], world: "3"},
  { name: "Lava Egg", image: "Images/Eggs/Lava_Egg.webp", Pets: [ { name: "Magma Cube", baseOdds: 4000, icon: "Images/Pets/Magma_Cube.webp"}, { name: "Night Dweller", baseOdds: 100000, icon: "Images/Pets/Night_Dweller.webp"}, { name: "Fire King", baseOdds: 3333334, icon: "Images/Pets/Fire_King.webp"}, { name: "Hellshard (Secret)", baseOdds: 1000000000, icon: "Images/Pets/Hellshard.webp"}], world: "3"},
  { name: "Atlantis Egg", image: "Images/Eggs/Atlantis_Egg.webp", Pets: [ { name: "Angler fish", baseOdds: 4000, icon: "Images/Pets/Angler_Fish.webp"}, { name: "Jellyfish", baseOdds: 200000, icon: "Images/Pets/Jellyfish.webp"}, { name: "Atlantis Guardian", baseOdds: 2000000, icon: "Images/Pets/Atlantis_Guardian.webp"}, { name: "Tidal God (Secret)", baseOdds: 250000000, icon: "Images/Pets/Tidal_God.webp"}, { name: "Abyssal Sea Dragon (Secret)", baseOdds: 2000000000, icon: "Images/Pets/Abyssal_Sea_Dragon.webp"}], world: "3"},
  { name: "Dreamer Egg", image: "Images/Eggs/Placeholder_Egg.webp", Pets: [ { name: "Dreamscape Influence", baseOdds: 4000, icon: "Images/Pets/Dreamscape_Influence.webp"}, { name: "Serene Axolotl", baseOdds: 200000, icon: "Images/Pets/Serene_Axolotl.webp"}, { name: "Cosmic Herald", baseOdds: 2000000, icon: "Images/Pets/Cosmic_Herald.webp"}, { name: "Eternity (Secret)", baseOdds: 125000000, icon: "Images/Pets/Eternity.webp"}, { name: "Bloomshifter (Secret)", baseOdds: 500000000, icon: "Images/Pets/Bloomshifter.webp"}, { name: "Parasol Paladin (Secret)", baseOdds: 1000000000, icon: "Images/Pets/Parasol_Paladin.webp"}], world: "3"},
  { name: "Brainrot Egg" , image: "Images/Eggs/Brainrot_Egg.webp", Pets: [ { name: "Brainrot Shark", baseOdds: 20000, icon: "Images/Pets/Brainrot_Shark.webp"}, {name: "Nert Pufferfish", baseOdds: 50000, icon: "Images/Pets/Nert_Pufferfish.webp"}, { name: "BIG ROUND (Secret)", baseOdds: 50000000, icon: "Images/Pets/BIG_ROUND.webp"}], world: "limited"},
  { name: "Classic egg", image: "Images/Eggs/Classic_Egg.webp", Pets: [ { name: "Classic Unicorn", baseOdds: 4000, icon: "Images/Pets/Classic_Unicorn.webp"}, { name: "Classic Dominus", baseOdds: 200000, icon: "Images/Pets/Classic_Dominus.webp"}, { name: "Classic Noob", baseOdds: 2000000, icon: "Images/Pets/Classic_Noob.webp"}, { name: "Classic Overlord (Secret)", baseOdds: 100000000, icon: "Images/Pets/Classic_Overlord.webp"}, { name: "1x1x1x1 (Secret)", baseOdds: 500000000, icon: "Images/Pets/1x1x1x1.webp"}, { name: "Giant Classic Chicken (Secret)", baseOdds: 2500000000, icon: "Images/Pets/Giant_Classic_Chicken.webp"}], world: "3"},
];


let selectedWorld = null;
let selectedEgg = null;
let lastSearchValue = '';
const eggList = document.getElementById("egg-list");
let lastNormalWorld = null;

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
          (selectedWorld === '3' && btn.classList.contains('seas')) ||
          (selectedWorld === 'limited' && btn.classList.contains('limited')) ||
          (selectedWorld === 'infinity' && btn.classList.contains('infinity'))
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

    let searchTerm = '';
    if (searchInput && searchInput.value.trim() !== '') {
      searchTerm = searchInput.value.trim().toLowerCase();
      filteredEggs = filteredEggs.filter(egg =>
        egg.name.toLowerCase().includes(searchTerm) ||
        egg.Pets.some(pet => pet.name.toLowerCase().includes(searchTerm))
      );
    }

    if (selectedWorld) {
      filteredEggs = filteredEggs.filter(egg => egg.world === selectedWorld);
    }

    if (filteredEggs.length === 0) {
      const noResults = document.createElement('div');
      noResults.style.textAlign = 'center';
      noResults.style.margin = '32px 0';
      noResults.style.fontSize = '1.3em';
      noResults.style.opacity = '0.7';
      noResults.textContent = 'No eggs found that match the search';
      eggList.appendChild(noResults);
      return;
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
  if (["1", "2", "3", "limited"].includes(world)) {
    lastNormalWorld = world;
  }
  selectedWorld = world;
  selectedEgg = null;
  if (world === "infinity") {
    selectedEgg = "Infinity Egg";
  }
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

let infinityEggData = null;
let selectedInfinityWorld = "1";

async function loadInfinityEggData() {
  if (infinityEggData) return infinityEggData;
  const res = await fetch("Data/infinity_egg.json");
  infinityEggData = await res.json();
  return infinityEggData;
}

async function createEggDetailsView(egg, canSpawnAsRift) {
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
    if (selectedWorld === "infinity") {
      selectedWorld = lastNormalWorld || null;
    }
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

  if (egg.name === "Infinity Egg") {
    await loadInfinityEggData();
    const theme = document.body.classList.contains('theme-dark') ? 'dark' : 'purple';
    const worlds = [
      { id: "1", label: "Overworld", icon: "Images/Icons/The_Overworld_Icon.webp" },
      { id: "2", label: "Minigame", icon: "Images/Icons/Minigame_Paradise_Icon.webp" },
      { id: "3", label: "Seven Seas", icon: "Images/Icons/Seven_Seas_Icon.webp" }
    ];
    const btnRow = document.createElement("div");
    btnRow.style.display = "flex";
    btnRow.style.flexDirection = "row";     
    btnRow.style.flexWrap = "nowrap";        
    btnRow.style.alignItems = "center";
    btnRow.style.gap = "12px";
    btnRow.style.margin = "16px 0";
    btnRow.style.justifyContent = "center";
    btnRow.style.width = "100%";
    btnRow.style.overflowX = "auto";       
    btnRow.style.padding = "6px 4px";

    worlds.forEach(w => {
      const btn = document.createElement("button");

      btn.style.display = "flex";
      btn.style.alignItems = "center";
      btn.style.gap = "8px";
      btn.style.padding = "7px 18px";
      btn.style.borderRadius = "8px";
      btn.style.border = "none";
      btn.style.fontWeight = "bold";
      btn.style.cursor = "pointer";
      btn.style.fontSize = "1rem";

      btn.style.color = "var(--main-text)";

      const selectedBg = "rgb(66,78,166)";
      btn.style.background = (selectedInfinityWorld === w.id) ? selectedBg : "var(--controls-bg)";

      const iconImg = document.createElement("img");
      iconImg.src = w.icon;
      iconImg.alt = w.label + " Icon";
      iconImg.style.width = "28px";
      iconImg.style.height = "28px";
      iconImg.style.objectFit = "contain";

      const labelSpan = document.createElement("span");
      labelSpan.textContent = w.label;

      btn.appendChild(iconImg);
      btn.appendChild(labelSpan);

      btn.onclick = () => {
        selectedInfinityWorld = w.id;
        createEggDetailsView(egg, canSpawnAsRift);
      };

      btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-1px)');
      btn.addEventListener('mouseleave', () => btn.style.transform = 'none');

      btnRow.appendChild(btn);
    });
    left.appendChild(btnRow);
    left.appendChild(createEggSettings(egg, canSpawnAsRift));
  } else {

    left.appendChild(createEggSettings(egg, canSpawnAsRift));
  }

  const middle = document.createElement('div');
  middle.className = 'egg-details-middle';


  let petsToShow = egg.Pets;
  if (egg.name === "Infinity Egg" && infinityEggData && infinityEggData[selectedInfinityWorld]) {
    petsToShow = infinityEggData[selectedInfinityWorld].Pets;
  }


  const eggForTable = { ...egg, Pets: petsToShow };
  middle.appendChild(createEggPetInfoCard(eggForTable, canSpawnAsRift));

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
  const hasSecret = egg.Pets.some(pet => /(Secret|Infinity)/i.test(pet.name)) || egg.name === "Infinity Egg";
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
    const controls = layout ? layout.querySelector('.egg-details-left .controls') : null;
    const multiplierSelect = controls ? controls.querySelector(".multiplier") : null;
    const luckInput = controls ? controls.querySelector(".luck") : null;
    const secretInput = controls ? controls.querySelector(".secret-mult") : null;
    const petList = table.querySelector(".pet-list");

    function formatAdjustedPercent(adjustedChance) {
      const adjustedPercent = adjustedChance * 100;
      if (!adjustedPercent || !isFinite(adjustedPercent)) return "Unknown";
      const formatted = adjustedPercent.toExponential(8);
      return parseFloat(formatted).toString();
    }

    function updateChances() {
      const multiplierValue = multiplierSelect ? parseFloat(multiplierSelect.value) : 0;
      const riftBonusPercent = multiplierValue * 100;
      const luckPercent = luckInput ? (luckInput.value === "" ? 0 : parseFloat(luckInput.value)) : 0;
      const secretTimes = secretInput ? (secretInput.value === "" ? 1 : Math.max(1, parseFloat(secretInput.value))) : 1;
      const effectiveLuckPercent = luckPercent + riftBonusPercent;
      petList.innerHTML = "";
      egg.Pets.forEach(pet => {
        const isSecret = /\((Secret|Infinity)\)/i.test(pet.name);
        const baseChance = pet.baseOdds && pet.baseOdds > 0 ? 1 / pet.baseOdds : 0;
        let combinedMultiplier = 1 + effectiveLuckPercent / 100;
        if (isSecret) combinedMultiplier *= secretTimes;
        const adjustedChance = baseChance * combinedMultiplier;
        const adjustedOneIn = adjustedChance > 0 ? Math.round(1 / adjustedChance).toLocaleString() : "∞";

        let adjustedPercent = formatAdjustedPercent(adjustedChance);
        const adjustedPercentCell = adjustedPercent === "Unknown" ? "Unknown" : `${adjustedPercent}%`;

        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="pet-name">
            <img src="${pet.icon}" alt="${pet.name}" />
            ${pet.name}
          </td>
          <td>1 in ${pet.baseOdds ? pet.baseOdds.toLocaleString() : 'Unknown'}</td>
          <td>1 in ${adjustedOneIn}</td>
          <td>${adjustedPercentCell}</td>
        `;
        petList.appendChild(row);
      });
      setupPetStatsHover();
    }

    updateChances();

    if (multiplierSelect) multiplierSelect.addEventListener("change", updateChances);
    if (luckInput) {
      luckInput.addEventListener("focus", () => { if (luckInput.value === "0") luckInput.value = ""; });
      luckInput.addEventListener("blur", () => { if (luckInput.value === "") luckInput.value = "0"; });
      luckInput.addEventListener("input", updateChances);
    }
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
    pearls: 'Images/Icons/Pearls.webp' 
  };

  function getStatIcon(stat) {
    if (stat === 'bubbles') return statIcons.bubbles;
    if (stat === 'gems') return statIcons.gems;
    if (stat === 'coins') return statIcons.coins;
    if (stat === 'tickets') return statIcons.tickets;
    if (stat === 'festival_coins') return statIcons.festival_coins;
    if (stat === 'pearls') return statIcons.pearls;
    return '';
  }

  function buildStatsRows(stats) {
    let html = '';

    const statOrder = ['bubbles', 'gems', 'coins', 'tickets', 'festival_coins', 'pearls'];
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

document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
  setTheme(savedTheme);
  if (!localStorage.getItem('selectedTheme')) {
    setTheme('dark');
  }

  const fontSelect = document.getElementById('font-select');
  const savedFont = localStorage.getItem('selectedFont') || 'Arial';
  function applySavedFont() {

    if (fontSelect) {
      fontSelect.value = savedFont;
    }
    setFont(savedFont);
  }
  applySavedFont();
  if (fontSelect) {
    fontSelect.addEventListener('change', function () {
      setFont(this.value);
    });
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


eggs.unshift({
  name: "Infinity Egg",
  image: "Images/Eggs/Infinity_Egg.webp",
  Pets: [
    { name: "Placeholder", baseOdds: 1, icon: "Images/Pets/Placeholder.webp" }
  ],
  world: "infinity"
});



function selectWorld(world) {
  const eggList = document.getElementById("egg-list");
  if (selectedWorld === world) {
    selectedWorld = null;
    selectedEgg = null;
    animateEggList(() => renderEggs());
    return;
  }
  if (["1", "2", "3", "limited"].includes(world)) {
    lastNormalWorld = world;
  }
  selectedWorld = world;
  selectedEgg = null;
  if (world === "infinity") {
    selectedEgg = "Infinity Egg";
  }
  animateEggList(() => renderEggs());
}

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-bar');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      renderEggs();
    });
  }
});


function setFont(font) {
  let fontFamily;
  switch (font) {
    case 'Lato':
      fontFamily = 'Lato, Arial, Helvetica, sans-serif';
      break;
    case 'Roboto':
      fontFamily = 'Roboto, Arial, Helvetica, sans-serif';
      break;
    case 'Lexend':
      fontFamily = 'Lexend, Arial, Helvetica, sans-serif';
      break;
    case 'Helvetica':
      fontFamily = 'Helvetica, Arial, sans-serif';
      break;
    case 'Comic Sans MS':
      fontFamily = 'Comic Sans MS, Arial, Helvetica, sans-serif';
      break;
    case 'Arial':
    default:
      fontFamily = 'Arial, Helvetica, sans-serif';
  }
  document.body.style.fontFamily = fontFamily;
  localStorage.setItem('selectedFont', font);
}