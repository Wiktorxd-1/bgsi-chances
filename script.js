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
  { name: "Mining Egg", image: "Images/Eggs/Mining_Egg.webp", Pets: [ { name: "Crystal Unicorn", baseOdds: 200, icon: "Images/Pets/Crystal_Unicorn.webp" }, { name: "Stone Gargoyle", baseOdds: 20000, icon: "Images/Pets/Stone_Gargoyle.webp" }, { name: "Giant Cave Mole (Secret)", baseOdds: 500000000, icon: "Images/Pets/Giant_Cave_Mole.webp" } ], world: "2" },
  { name: "Cyber Egg", image: "Images/Eggs/Cyber_Egg.webp", Pets: [ { name: "Cyborg Phoenix", baseOdds: 2500, icon: "Images/Pets/Cyborg_Phoenix.webp" }, { name: "Space Invader", baseOdds: 50000, icon: "Images/Pets/Space_Invader.webp" }, { name: "Bionic Shard", baseOdds: 666667, icon: "Images/Pets/Bionic_Shard.webp" }, { name: "Mech Robot (Secret)", baseOdds: 66666667, icon: "Images/Pets/Mech_Robot.webp" } ], world: "2" },
  { name: "Neon Egg", image: "Images/Eggs/Neon_Egg.webp", Pets: [ { name: "Neon Wyvern", baseOdds: 3334, icon: "Images/Pets/Neon_Wyvern.webp" }, { name: "Neon Wire Eye", baseOdds: 66667, icon: "Images/Pets/Neon_Wire_Eye.webp" }, { name: "Equalizer", baseOdds: 833334, icon: "Images/Pets/Equalizer.webp" }, { name: "Hyperwave Kitty (Secret)", baseOdds: 125000000, icon: "Images/Pets/Hyperwave_Kitty.webp" } ], world: "2" },
  { name: "Chance Egg", image: "Images/Eggs/Chance_Egg.webp", Pets: [ { name: "Ring Master", baseOdds: 100000, icon: "Images/Pets/Ring_Master.webp" }, { name: "Royal Guardian", baseOdds: 200000000, icon: "Images/Pets/Royal_Guardian.webp" } ], world: "2" },
  { name: "Icy Egg", image: "Images/Eggs/Icy_Egg.webp", Pets: [ { name: "Marshmallow", baseOdds: 200, icon: "Images/Pets/Marshmallow.webp"}, { name: "Minty Serpent", baseOdds: 66667, icon: "Images/Pets/Minty_Serpent.webp"}, { name: "Ice Winged Hydra", baseOdds: 333334, icon: "Images/Pets/Ice_Winged_Hydra.webp"}, { name: "Giant Pearl (Secret)", baseOdds: 125000000, icon: "Images/Pets/Giant_Pearl.webp"}], world: "3"},
  { name: "Vine Egg", image: "Images/Eggs/Vine_Egg.webp", Pets: [ { name: "Thorn Dragon", baseOdds: 4000, icon: "Images/Pets/Thorn_Dragon.webp"}, { name: "Flower Pot", baseOdds: 100000, icon: "Images/Pets/Flower_Pot.webp"}, { name: "Lovely Lotus", baseOdds: 1000000, icon: "Images/Pets/Lovely_Lotus.webp"}, { name: "Fire Champion (Secret)", baseOdds: 500000000, icon: "Images/Pets/Fire_Champion.webp"}, { name: "Dark Champion (Secret)", baseOdds: 500000000, icon: "Images/Pets/Dark_Champion.webp"}, { name: "Earth Champion (Secret)", baseOdds: 500000000, icon: "Images/Pets/Earth_Champion.webp"}, { name: "Sky Champion (Secret)", baseOdds: 500000000, icon: "Images/Pets/Sky_Champion.webp"}], world: "3"},
  { name: "Secret Egg", image: "Images/Eggs/Placeholder_Egg.webp", Pets: [ { name: "Gigantic Spitty (Infinity)", baseOdds: 40000000000, icon: "Images/Pets/Gigantic_Spitty.webp"}], world: "3"},
  { name: "Lava Egg", image: "Images/Eggs/Lava_Egg.webp", Pets: [ { name: "Magma Cube", baseOdds: 4000, icon: "Images/Pets/Magma_Cube.webp"}, { name: "Night Dweller", baseOdds: 100000, icon: "Images/Pets/Night_Dweller.webp"}, { name: "Fire King", baseOdds: 3333334, icon: "Images/Pets/Fire_King.webp"}, { name: "Hellshard (Secret)", baseOdds: 1000000000, icon: "Images/Pets/Hellshard.webp"}], world: "3"},
  { name: "Atlantis Egg", image: "Images/Eggs/Atlantis_Egg.webp", Pets: [ { name: "Angler fish", baseOdds: 4000, icon: "Images/Pets/Angler_Fish.webp"}, { name: "Jellyfish", baseOdds: 200000, icon: "Images/Pets/Jellyfish.webp"}, { name: "Atlantis Guardian", baseOdds: 2000000, icon: "Images/Pets/Atlantis_Guardian.webp"}, { name: "Tidal God (Secret)", baseOdds: 250000000, icon: "Images/Pets/Tidal_God.webp"}, { name: "Abyssal Sea Dragon (Secret)", baseOdds: 2000000000, icon: "Images/Pets/Abyssal_Sea_Dragon.webp"}], world: "3"},
  { name: "Brainrot Egg" , image: "Images/Eggs/Brainrot_Egg.webp", Pets: [ { name: "Brainrot Shark", baseOdds: 20000, icon: "Images/Pets/Brainrot_Shark.webp"}, {name: "Nert Pufferfish", baseOdds: 50000, icon: "Images/Pets/Nert_Pufferfish.webp"}, { name: "BIG ROUND (Secret)", baseOdds: 200000000, icon: "Images/Pets/BIG_ROUND.webp"}], world: "limited"},
  { name: "Classic egg", image: "Images/Eggs/Classic_Egg.webp", Pets: [ { name: "Classic Unicorn", baseOdds: 4000, icon: "Images/Pets/Classic_Unicorn.webp"}, { name: "Classic Dominus", baseOdds: 200000, icon: "Images/Pets/Classic_Dominus.webp"}, { name: "Classic Noob", baseOdds: 2000000, icon: "Images/Pets/Classic_Noob.webp"}, { name: "Classic Overlord (Secret)", baseOdds: 100000000, icon: "Images/Pets/Classic_Overlord.webp"}, { name: "1x1x1x1 (Secret)", baseOdds: 500000000, icon: "Images/Pets/1x1x1x1.webp"}, { name: "Giant Classic Chicken (Secret)", baseOdds: 2500000000, icon: "Images/Pets/Giant_Classic_Chicken.webp"}], world: "3"},
  { name: "Autumn Egg", Pets: [ { name: "Autumn Paragon", baseOdds: 5000 }, { name: "Monarch Butterfly", baseOdds: 1000000}, { name:"Crystal Acorn", baseOdds: 5000000 }, { name: "Big Leafy (Secret)", baseOdds: 100000000 }, { name: "Candycorn Shard (Secret)", baseOdds: 500000000}, { name: "Almighty Pumpkin (Secret)", baseOdds: 2000000000}], world: "limited"},
  { name: "Developer Egg", Pets: [ { name: "Sylently's Hats", baseOdds: 100000}, { name: "Isaac Rainbow Shock", baseOdds: 1000000}, { name: "Sircfenner Plushie (Secret)", baseOdds: 500000000}, { name: "Quamatic Plushie (Secret)", baseOdds: 500000000}, { name: "Nert Plushie (Secret)", baseOdds: 500000000}, { name: "Sylently Plushie (Secret)", baseOdds: 500000000}, { name: "ObscureEntity Plushie (Secret)", baseOdds: 500000000}, { name: "Sylently's Pet (Infinity)", baseOdds: 5000000000}], world: "limited"},
  { name: "Candle Egg", Pets: [ { name: "Lantern Demon", baseOdds: 10000 }, { name: "Candle Phoenix", baseOdds: 2000000 }, { name: "Willow Chandelier", baseOdds: 10000000 }, { name: "Maple Divinity (Secret)", baseOdds: 2000000000 }, { name: "Aureate Koi (Infinity)", baseOdds: 50000000000}], world: "limited"},
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
  const eggImg = getEggImagePath(egg);
  eggHeader.innerHTML = `<img src="${eggImg}" alt="${egg.name}" style="width: 56px; height: 56px;" />
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

function parseChanceString(chanceStr) {
  if (!chanceStr || typeof chanceStr !== 'string') return null;
  const s = chanceStr.trim().toLowerCase();
  const m = s.match(/1\/\s*([\d,.]+)\s*([mb]?)/i);
  if (!m) return null;
  let num = m[1].replace(/[,]/g, '');
  let val = Number(num);
  const suffix = (m[2] || '').toLowerCase();
  if (suffix === 'm') val = val * 1_000_000;
  if (suffix === 'b') val = val * 1_000_000_000;
  if (!isFinite(val) || val <= 0) return null;
  return Math.round(val);
}

function secondsUntilNextUTCDate() {
  const now = new Date();
  const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0));
  return Math.max(0, Math.floor((next.getTime() - now.getTime()) / 1000));
}

async function createBountyDetailsView() {
  const bounties = await fetchBounties();
  const todayLabel = formatUTCDateToLabel(new Date());
  const todays = (bounties || []).find(b => b.Time === todayLabel) || (bounties && bounties[0]) || null;

  const searchBarRow = document.getElementById('search-bar-row');
  if (searchBarRow) searchBarRow.classList.add('hide-search-bar-row');
  const worldsSidebar = document.querySelector('.worlds-sidebar');
  if (worldsSidebar) worldsSidebar.style.display = 'none';

  const oldDiv = document.getElementById('bounty-divider');
  if (oldDiv && oldDiv.parentNode) oldDiv.parentNode.removeChild(oldDiv);

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
  layout.style.position = 'relative';
  
  const left = document.createElement('div');
  left.className = 'egg-details-left';

  const middle = document.createElement('div');
  middle.className = 'egg-details-middle';

  const right = document.createElement('div');
  right.className = 'egg-details-right';

  right.style.display = 'flex';
  right.style.flexDirection = 'column';
  right.style.alignItems = 'flex-start';
  right.style.flex = '1 1 0%';
  right.style.boxSizing = 'border-box';

  const petIconWrap = document.createElement('div');
  petIconWrap.style.display = 'flex';
  petIconWrap.style.justifyContent = 'center';
  petIconWrap.style.alignItems = 'center';
  petIconWrap.style.marginTop = '-8px';
  petIconWrap.style.marginBottom = '8px';
  const petImg = document.createElement('img');
  let currentBounty = todays;
  const petNameVal = (currentBounty && currentBounty.Pet) ? currentBounty.Pet : 'Doggy';
  petImg.src = getPetIconByName(petNameVal) || 'Images/pets/Doggy.webp';
  petImg.alt = petNameVal;
  petImg.style.width = '150px';
  petImg.style.height = '150px';
  petImg.style.objectFit = 'contain';
  petImg.style.borderRadius = '12px';
  petImg.style.boxShadow = '0 6px 24px rgba(0,0,0,0.22)';
  petIconWrap.appendChild(petImg);
  left.appendChild(petIconWrap);

  const infoWrap = document.createElement('div');
  infoWrap.style.textAlign = 'center';
  infoWrap.style.margin = '8px 6px';
  const nameEl = document.createElement('div');
  nameEl.style.fontWeight = '700';
  nameEl.style.fontSize = '1.4rem';
  nameEl.textContent = petNameVal;
  infoWrap.appendChild(nameEl);

  const chanceText = (currentBounty && currentBounty.Chance) ? currentBounty.Chance : 'Unknown';
  const chanceEl = document.createElement('div');
  chanceEl.style.color = 'var(--main-text)';
  chanceEl.style.marginTop = '6px';
  chanceEl.style.fontWeight = '700';
  chanceEl.textContent = `Chance (base): ${chanceText}`;
  infoWrap.appendChild(chanceEl);

  const eggText = (currentBounty && currentBounty.Egg) ? currentBounty.Egg : 'Unknown Egg';
  const eggEl = document.createElement('div');
  eggEl.style.marginTop = '6px';
  eggEl.innerHTML = `Egg: <strong>${eggText}</strong>`;
  infoWrap.appendChild(eggEl);

  const jsonEgg = (window.eggsJson || []).find(e => e.name === eggText) || null;
  const eggCanSpawnAsRift = !!(jsonEgg && jsonEgg.canSpawnAsRift);

  const timerEl = document.createElement('div');
  timerEl.style.marginTop = '8px';
  timerEl.style.fontWeight = '600';
  timerEl.id = 'bounty-timer';
  const updateTimer = () => {
    const secs = secondsUntilNextUTCDate();
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    timerEl.textContent = `Next update in: ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  };
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
  infoWrap.appendChild(timerEl);

  const hr = document.createElement('hr');
  hr.style.margin = '12px 0';
  hr.style.border = 'none';
  hr.style.borderTop = '1px solid var(--table-border)';
  infoWrap.appendChild(hr);

  const upcomingWrap = document.createElement('div');
  upcomingWrap.style.display = 'flex';
  upcomingWrap.style.flexDirection = 'column';
  upcomingWrap.style.gap = '12px';
  upcomingWrap.style.marginTop = '8px';
  upcomingWrap.id = 'bounty-upcoming-wrap';

  function parseApiDateToUTC(dateStr) {
    if (!dateStr) return null;
    const parts = dateStr.trim().split(' ');
    if (parts.length < 3) return null;
    const day = parseInt(parts[0], 10);
    const monthName = parts[1];
    const year = parseInt(parts[2], 10);
    const months = { January:0, February:1, March:2, April:3, May:4, June:5, July:6, August:7, September:8, October:9, November:10, December:11 };
    const m = months[monthName];
    if (isNaN(day) || isNaN(year) || m === undefined) return null;
    return new Date(Date.UTC(year, m, day, 0, 0, 0));
  }

  function formatShortLabel(timeStr) {
    const d = parseApiDateToUTC(timeStr);
    if (!d) return timeStr || '';
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const day = d.getUTCDate();
    const suffix = (n => (n%10===1 && n!==11)?'st':(n%10===2 && n!==12)?'nd':(n%10===3 && n!==13)?'rd':'th')(day);
    return `${months[d.getUTCMonth()]} ${day}${suffix}`;
  }

  const todayUTC = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 0,0,0));
  const filteredBounties = (bounties || []).filter(b => {
    const d = parseApiDateToUTC(b.Time);
    return d && d.getTime() >= todayUTC.getTime();
  });

  let upcomingPage = 0;
  // show 5 pets per upcoming page as requested
  const pageSize = 5;

  function renderUpcomingPage() {
    upcomingWrap.innerHTML = '';
    const start = upcomingPage * pageSize;
    const pageItems = filteredBounties.slice(start, start + pageSize);

    function normalizeName(n) {
      return (n || '').replace(/\(.*?\)/g, '').trim().toLowerCase();
    }
    
    if ((!layout.dataset.selectedBountyIndex || layout.dataset.selectedBountyIndex === '') && filteredBounties.length > 0) {
      let defaultIdx = -1;
      if (todays) {
        defaultIdx = filteredBounties.findIndex(b => b.Time === todays.Time && normalizeName(b.Pet) === normalizeName(todays.Pet));
      }
      if (defaultIdx === -1) defaultIdx = 0;
      layout.dataset.selectedBountyIndex = String(defaultIdx);
      layout.dataset.selectedPetName = filteredBounties[defaultIdx] ? filteredBounties[defaultIdx].Pet : '';
    }

    function updateUpcomingGlow() {
      const selectedIndex = String(layout.dataset.selectedBountyIndex || '');
      upcomingWrap.querySelectorAll('.bounty-upcoming-btn').forEach(btn => {
        if (btn.dataset.bountyIndex && btn.dataset.bountyIndex === selectedIndex) {
          btn.style.boxShadow = '0 0 12px #FBE7BD, 0 6px 24px rgba(0,0,0,0.12)';
          btn.style.transition = 'box-shadow 180ms ease';
        } else {
          btn.style.boxShadow = 'none';
        }
      });
    }

    if (!pageItems.length) {
      const none = document.createElement('div');
      none.style.opacity = '0.8';
      none.textContent = 'No upcoming bounties';
      upcomingWrap.appendChild(none);
    } else {
      pageItems.forEach((b, localIdx) => {
        const btn = document.createElement('button');
        btn.className = 'bounty-upcoming-btn';
        btn.style.display = 'flex';
        btn.style.alignItems = 'center';
        btn.style.gap = '12px';
        btn.style.padding = '8px 12px';
        btn.style.borderRadius = '12px';
        btn.style.border = '1px solid var(--table-border)';
        btn.style.background = 'var(--egg-card-bg)';
        btn.style.cursor = 'pointer';
        btn.style.color = 'var(--main-text)';
        btn.style.font = 'inherit';

        const icon = document.createElement('img');
        icon.src = getPetIconByName(b.Pet);
        icon.alt = b.Pet;
        icon.style.width = '36px';
        icon.style.height = '36px';
        icon.style.objectFit = 'contain';
        icon.style.borderRadius = '6px';
        icon.style.border = '1px solid transparent';
        const globalIndex = String(filteredBounties.indexOf(b));
        btn.dataset.bountyIndex = globalIndex;
        btn.dataset.petName = b.Pet || '';
        btn.style.boxShadow = 'none';

        const textWrap = document.createElement('div');
        textWrap.style.display = 'flex';
        textWrap.style.flexDirection = 'column';
        textWrap.style.alignItems = 'flex-start';
        const petSpan = document.createElement('div');
        petSpan.textContent = b.Pet;
        petSpan.style.fontWeight = '600';
        petSpan.style.fontSize = '0.95rem';
        const dateSpan = document.createElement('div');
        dateSpan.textContent = formatShortLabel(b.Time);
        dateSpan.style.opacity = '0.85';
        dateSpan.style.fontSize = '0.85rem';
        textWrap.appendChild(petSpan);
        textWrap.appendChild(dateSpan);

        btn.appendChild(icon);
        btn.appendChild(textWrap);

        btn.addEventListener('click', () => {
          currentBounty = b;
          const layoutEl = document.querySelector('.egg-details-layout');
          if (layoutEl) {
            layoutEl.dataset.selectedBountyIndex = btn.dataset.bountyIndex || '';
            layoutEl.dataset.selectedPetName = b.Pet || '';
            updateUpcomingGlow();
          }

          petImg.src = getPetIconByName(b.Pet);
          petImg.alt = b.Pet;
          nameEl.textContent = b.Pet;
          chanceEl.textContent = `Chance (base): ${b.Chance || 'Unknown'}`;

          const targetEggName = b.Egg || eggText;
          eggImg.src = getEggImagePath(targetEggName);
          eggImg.alt = targetEggName;
          eggNameUnder.textContent = targetEggName;

          const newBountyBaseOdds = parseChanceString(b.Chance);
          const newBountyPetObj = { name: b.Pet + ' (Bounty)', baseOdds: newBountyBaseOdds || 0, icon: getPetIconByName(b.Pet) };

          const selectedEggObj = eggs.find(e => e.name === targetEggName) || (window.eggsJson || []).find(e => e.name === targetEggName) || null;
          const selectedPetsList = selectedEggObj && Array.isArray(selectedEggObj.Pets) ? selectedEggObj.Pets.slice() : [];

          combinedEggForTable.name = targetEggName;
          combinedEggForTable.Pets = [];
          if (newBountyBaseOdds) combinedEggForTable.Pets.push(newBountyPetObj);
          combinedEggForTable.Pets = combinedEggForTable.Pets.concat(selectedPetsList);

          const selectedJsonEgg = (window.eggsJson || []).find(e => e.name === targetEggName) || null;
          const selectedCanSpawnAsRift = !!(selectedJsonEgg && selectedJsonEgg.canSpawnAsRift);

          if (petsCard && petsCard.parentNode) petsCard.parentNode.removeChild(petsCard);
          petsCard = createEggPetInfoCard(combinedEggForTable, selectedCanSpawnAsRift);
          petsCard.style.marginTop = '18px';
          petsCard.style.boxSizing = 'border-box';
          petsCard.style.overflow = 'visible';
          petsCard.style.display = 'block';
          petsCard.style.width = '100%';
          petsCard.style.minWidth = '480px';
          petsCard.style.alignSelf = 'stretch';
          right.appendChild(petsCard);
        });

        upcomingWrap.appendChild(btn);
      });
    }

    const navWrap = document.createElement('div');
    navWrap.style.display = 'flex';
    navWrap.style.justifyContent = 'space-between';
    navWrap.style.marginTop = '8px';

    if (upcomingPage > 0) {
      const backPageBtn = document.createElement('button');
      backPageBtn.textContent = 'Back';
      backPageBtn.style.padding = '6px 10px';
      backPageBtn.style.borderRadius = '8px';
      backPageBtn.style.border = '1px solid var(--table-border)';
      // ensure white text and use the currently-selected UI font
      backPageBtn.style.background = 'var(--controls-bg)';
      backPageBtn.style.cursor = 'pointer';
      backPageBtn.style.color = '#ffffff';
      backPageBtn.style.fontFamily = document.body.style.fontFamily || 'inherit';
      backPageBtn.onclick = () => { upcomingPage = Math.max(0, upcomingPage - 1); renderUpcomingPage(); };
      navWrap.appendChild(backPageBtn);
    } else {
      const spacer = document.createElement('div'); navWrap.appendChild(spacer);
    }

    const moreExists = (upcomingPage + 1) * pageSize < filteredBounties.length;
    if (moreExists) {
      const loadMoreBtn = document.createElement('button');
      loadMoreBtn.textContent = 'Load more';
      loadMoreBtn.style.padding = '6px 10px';
      loadMoreBtn.style.borderRadius = '8px';
      loadMoreBtn.style.border = '1px solid var(--table-border)';
      // ensure white text and match chosen font
      loadMoreBtn.style.background = 'var(--controls-bg)';
      loadMoreBtn.style.cursor = 'pointer';
      loadMoreBtn.style.color = '#ffffff';
      loadMoreBtn.style.fontFamily = document.body.style.fontFamily || 'inherit';
      loadMoreBtn.onclick = () => { upcomingPage++; renderUpcomingPage(); };
      navWrap.appendChild(loadMoreBtn);
    }

    upcomingWrap.appendChild(navWrap);
    updateUpcomingGlow();
  }

  renderUpcomingPage();
  infoWrap.appendChild(upcomingWrap);
  left.appendChild(infoWrap);

  const eggIconWrap = document.createElement('div');
  eggIconWrap.style.display = 'flex';
  eggIconWrap.style.flexDirection = 'column';
  eggIconWrap.style.justifyContent = 'flex-start';
  eggIconWrap.style.alignItems = 'flex-start';
  eggIconWrap.style.marginTop = '8px';
  eggIconWrap.style.marginLeft = '8px';
  const eggImg = document.createElement('img');
  eggImg.src = getEggImagePath(eggText);
  eggImg.alt = eggText;
  eggImg.style.width = '160px';
  eggImg.style.height = '160px';
  eggImg.style.objectFit = 'contain';
  eggImg.style.borderRadius = '8px';
  eggImg.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
  eggIconWrap.appendChild(eggImg);

  const eggNameUnder = document.createElement('div');
  eggNameUnder.style.textAlign = 'left';
  eggNameUnder.style.fontSize = '1.4rem';
  eggNameUnder.style.fontWeight = '700';
  eggNameUnder.style.marginTop = '8px';
  eggNameUnder.textContent = eggText;
  eggIconWrap.appendChild(eggNameUnder);

  middle.appendChild(eggIconWrap);

  const fakeEggForControls = { name: 'Bounty', Pets: [], world: 'bounty' };
  const controlsEl = createEggSettings(fakeEggForControls, eggCanSpawnAsRift);
  controlsEl.style.marginTop = '8px';
  controlsEl.style.alignSelf = 'flex-start';
  controlsEl.style.width = '100%';
  middle.appendChild(controlsEl);

  const eggObj = eggs.find(e => e.name === eggText) || (window.eggsJson || []).find(e => e.name === eggText) || null;
  const petsList = eggObj && Array.isArray(eggObj.Pets) ? eggObj.Pets.slice() : [];

  const bountyBaseOdds = parseChanceString(chanceText);
  const bountyPetObj = { name: (currentBounty && currentBounty.Pet ? currentBounty.Pet : petNameVal) + ' (Bounty)', baseOdds: bountyBaseOdds || 0, icon: getPetIconByName(currentBounty ? currentBounty.Pet : petNameVal) };

  const combinedEggForTable = { name: eggText, Pets: [] };
  if (bountyBaseOdds) combinedEggForTable.Pets.push(bountyPetObj);
  combinedEggForTable.Pets = combinedEggForTable.Pets.concat(petsList);

  let petsCard = createEggPetInfoCard(combinedEggForTable, false);
  petsCard.style.marginTop = '18px';
  petsCard.style.boxSizing = 'border-box';
  petsCard.style.overflow = 'visible';
  petsCard.style.display = 'block';
  petsCard.style.width = '100%';
  petsCard.style.minWidth = '480px';
  petsCard.style.alignSelf = 'stretch';
  right.appendChild(petsCard);

  layout.appendChild(left);
  layout.appendChild(middle);
  layout.appendChild(right);

  const diag = document.createElement('div');
  diag.id = 'layout-divider';
  Object.assign(diag.style, {
    position: 'absolute',
    width: '2px',
    background: 'var(--table-border)',
    top: '0',
    opacity: '0.9',
    pointerEvents: 'none',
    zIndex: '1'
  });
  layout.appendChild(diag);

  [left, middle, right].forEach(col => {
    col.style.position = 'relative';
    col.style.zIndex = '2';
  });

  function updateDivider() {
    if (!layout.contains(diag)) return;
    try {
      const layoutRect = layout.getBoundingClientRect();
      const leftRect = left.getBoundingClientRect();
      const middleRect = middle.getBoundingClientRect();
      let midpoint = Math.round((leftRect.right + middleRect.left) / 2);
      if (!isFinite(midpoint) || middleRect.left <= leftRect.right) {
        midpoint = Math.round(leftRect.right + 24);
      }
      const offset = Math.max(8, midpoint - layoutRect.left);
      diag.style.left = offset + 'px';
      diag.style.height = Math.max(32, layout.scrollHeight) + 'px';
    } catch (e) {}
  }

  const ro = new ResizeObserver(updateDivider);
  ro.observe(layout);
  ro.observe(left);
  ro.observe(middle);
  ro.observe(right);
  const mo = new MutationObserver(updateDivider);
  mo.observe(layout, { childList: true, subtree: true, attributes: true });
  window.addEventListener('resize', updateDivider);
  requestAnimationFrame(updateDivider);

  const cleanupObserver = new MutationObserver(() => {
    if (!document.body.contains(layout)) {
      try { ro.disconnect(); } catch (e) {}
      try { mo.disconnect(); } catch (e) {}
      try { cleanupObserver.disconnect(); } catch (e) {}
      window.removeEventListener('resize', updateDivider);
      const existing = document.getElementById('layout-divider');
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    }
  });
  cleanupObserver.observe(document.body, { childList: true, subtree: true });

  eggList.appendChild(backBtn);
  eggList.appendChild(layout);
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

  const oldDivider = document.getElementById('bounty-divider');
  if (oldDivider && oldDivider.parentNode) oldDivider.parentNode.removeChild(oldDivider);

  if (egg.name === "Bounty") {
    await createBountyDetailsView();
    return;
  }

  const layout = document.createElement('div');
  layout.className = 'egg-details-layout';
  layout.style.position = 'relative';
  
  const left = document.createElement('div');
  left.className = 'egg-details-left';
  const eggIcon = document.createElement('img');
  eggIcon.className = 'egg-icon-big';
  eggIcon.src = getEggImagePath(egg);
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
  } else if (egg.name === "Bounty") {
    left.appendChild(createEggSettings(egg, canSpawnAsRift));
    // create bounty-specific middle/right content in createBountyView when invoked
  } else {
    left.appendChild(createEggSettings(egg, canSpawnAsRift));
  }

  const middle = document.createElement('div');
  middle.className = 'egg-details-middle';

  // determine base pets list
  let petsToShow = egg.Pets ? egg.Pets.slice() : [];
  // if Infinity Egg, prefer loaded infinity data for the selected world
  if (egg.name === "Infinity Egg") {
    await loadInfinityEggData();
    if (infinityEggData && infinityEggData[selectedInfinityWorld] && Array.isArray(infinityEggData[selectedInfinityWorld].Pets)) {
      petsToShow = infinityEggData[selectedInfinityWorld].Pets.slice();
    }
  }

  // If there's a today's bounty that belongs to this egg, prepend the bounty pet so it is shown directly
  try {
    const bounties = await fetchBounties();
    const todayLabel = formatUTCDateToLabel(new Date());
    const todays = (bounties || []).find(b => b.Time === todayLabel) || null;
    if (todays && todays.Egg && todays.Egg === egg.name) {
      const bountyChance = parseChanceString(todays.Chance);
      const bountyPetObj = {
        name: (todays.Pet || 'Unknown') + ' (Bounty)',
        baseOdds: bountyChance || 0,
        icon: getPetIconByName(todays.Pet)
      };
      // ensure bounty pet is first
      petsToShow = [bountyPetObj].concat(petsToShow);
      // ensure controls reflect the new bounty (add secret multiplier if needed)
      const existingControls = left.querySelector('.controls');
      try {
        const controlsReplacement = createEggSettings({ name: egg.name, Pets: petsToShow }, canSpawnAsRift);
        if (existingControls && existingControls.parentNode) {
          existingControls.parentNode.replaceChild(controlsReplacement, existingControls);
        } else {
          // fallback: append if not present
          left.appendChild(controlsReplacement);
        }
      } catch (e) { /* ignore control refresh errors */ }
    }
  } catch (e) { /* ignore bounties fetch errors */ }

  const eggForTable = { ...egg, Pets: petsToShow };
  middle.appendChild(createEggPetInfoCard(eggForTable, canSpawnAsRift));

  const right = document.createElement('div');
  right.className = 'egg-details-right';

  // make right column behave like normal egg view: stretch and stack so card background grows with table
  right.style.display = 'flex';
  right.style.flexDirection = 'column';
  // let card size itself (do not force stretch) so background follows table content like normal eggs
  right.style.alignItems = 'flex-start';
  right.style.flex = '1 1 0%';
  // ensure the controls/pets card inside will stretch to fill right column width
  right.style.boxSizing = 'border-box';

  layout.appendChild(left);
  layout.appendChild(middle);
  layout.appendChild(right);

  // Add a stable vertical divider for all egg detail views.
  // We create a dedicated divider element per view (id 'layout-divider') and keep it behind content
  // so it doesn't cut off buttons (Infinity buttons will remain fully clickable/visible).
  const diag = document.createElement('div');
  diag.id = 'layout-divider';
  Object.assign(diag.style, {
    position: 'absolute',
    width: '2px',
    background: 'var(--table-border)',
    top: '0',
    opacity: '0.9',
    pointerEvents: 'none',
    // keep the divider visually behind controls/buttons
    zIndex: '1'
  });
  layout.appendChild(diag);

  // ensure columns render above the divider
  [left, middle, right].forEach(col => {
    col.style.position = 'relative';
    col.style.zIndex = '2';
  });

  function updateDivider() {
    if (!layout.contains(diag)) return;
    try {
      const layoutRect = layout.getBoundingClientRect();
      const leftRect = left.getBoundingClientRect();
      const middleRect = middle.getBoundingClientRect();
      // safe midpoint between left and middle columns
      let midpoint = Math.round((leftRect.right + middleRect.left) / 2);
      if (!isFinite(midpoint) || middleRect.left <= leftRect.right) {
        midpoint = Math.round(leftRect.right + 24);
      }
      // keep a small gap so buttons / controls aren't overlapped
      const offset = Math.max(8, midpoint - layoutRect.left);
      diag.style.left = offset + 'px';
      // height follows layout content; use layout.scrollHeight for robust value
      diag.style.height = Math.max(32, layout.scrollHeight) + 'px';
    } catch (e) { /* ignore layout read errors */ }
  }

  const ro = new ResizeObserver(updateDivider);
  ro.observe(layout);
  ro.observe(left);
  ro.observe(middle);
  ro.observe(right);
  // also watch for content changes that may affect sizes (infinity buttons, tables)
  const mo = new MutationObserver(updateDivider);
  mo.observe(layout, { childList: true, subtree: true, attributes: true });
  window.addEventListener('resize', updateDivider);
  // run once to position
  requestAnimationFrame(updateDivider);

  // cleanup when leaving this view
  const cleanupObserver = new MutationObserver(() => {
    if (!document.body.contains(layout)) {
      try { ro.disconnect(); } catch (e) {}
      try { mo.disconnect(); } catch (e) {}
      try { cleanupObserver.disconnect(); } catch (e) {}
      window.removeEventListener('resize', updateDivider);
      const existing = document.getElementById('layout-divider');
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    }
  });
  cleanupObserver.observe(document.body, { childList: true, subtree: true });

  eggList.appendChild(backBtn);
  eggList.appendChild(layout);
}



function createEggSettings(egg, canSpawnAsRift) {
  const controls = document.createElement("div");
  controls.className = "controls";
  let controlsHtml = '';
  if (canSpawnAsRift) {
    if (egg.name === "Brainrot Egg") {
      controlsHtml += `
        <label>Rift:</label>
        <select class="multiplier">
          <option value="2">2x</option>
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
          <option value="15">15x</option>
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
  // show secret multiplier for Infinity Egg and for Bounty
  // treat explicit Secret/Infinity items and also bounty-tagged pets as "has secret"
  const hasSecret = egg.Pets && egg.Pets.some(pet => /(Secret|Infinity|Bounty)/i.test(pet.name)) || egg.name === "Infinity Egg" || egg.name === "Bounty";
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
  card.setAttribute("data-world", egg.world || "");
  // allow the card to size to its table content (do not force a minHeight)
  card.style.boxSizing = 'border-box';
  card.style.padding = '12px';
  card.style.width = '100%';
  card.style.height = 'auto';
  card.style.minHeight = '0';

  const table = document.createElement("table");
  // allow table to size to its content so card background can follow
  table.style.width = 'auto';
  table.style.boxSizing = 'border-box';
  table.style.tableLayout = 'auto';
   table.style.borderCollapse = 'collapse';
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
 
   // ensure reasonable th / td spacing and column sizing to avoid overlap
   // set explicit th widths so table allocates space predictably
   Array.from(table.querySelectorAll('th')).forEach((th, i) => {
     th.style.padding = '8px 12px';
     th.style.textAlign = i === 0 ? 'left' : 'center';
     th.style.fontWeight = '600';
     th.style.whiteSpace = 'nowrap';
   });
   // provide a small stylesheet fallback for cells created later
   const cellBaseStyle = {
     padding: '8px 12px',
     whiteSpace: 'nowrap',
     overflow: 'hidden',
     textOverflow: 'ellipsis',
     verticalAlign: 'middle'
   };
 
   setTimeout(() => {
     const layout = document.querySelector('.egg-details-layout');
     // Look for controls in left, middle or right so bounty view (which places controls in middle)
     // is picked up and updates the pet table when luck/secret/rift changes.
     const controls = layout ? (
       layout.querySelector('.egg-details-left .controls') ||
       layout.querySelector('.egg-details-middle .controls') ||
       layout.querySelector('.egg-details-right .controls')
     ) : null;
    const multiplierSelect = controls ? controls.querySelector(".multiplier") : null;
    const luckInput = controls ? controls.querySelector(".luck") : null;
    const secretInput = controls ? controls.querySelector(".secret-mult") : null;
    const petList = table.querySelector(".pet-list");
 
     function normalizeName(n) {
       return (n || '').replace(/\(.*?\)/g, '').trim().toLowerCase();
     }
 
     function formatAdjustedPercent(adjustedChance) {
      if (!isFinite(adjustedChance) || adjustedChance <= 0) return "Unknown";
      const percent = adjustedChance * 100;
      // Normal-range: use locale formatting with reasonable precision
      if (percent >= 0.0001) {
        return percent.toLocaleString(undefined, { maximumFractionDigits: 6 });
      }
      // Very small percentages: show enough decimals to represent the value instead of "0"
      // compute fraction digits needed (bounded to avoid extremely long output)
      const abs = Math.abs(percent);
      const digitsNeeded = Math.min(12, Math.max(4, Math.ceil(-Math.log10(abs)) + 3));
      const fixed = percent.toFixed(digitsNeeded);
      const trimmed = fixed.replace(/\.?0+$/, '');
      // If still excessively long, fall back to exponential with 3 significant digits
      if (trimmed.length > 18) return percent.toExponential(3);
      return trimmed;
     }
 
     function applySelectionGlow() {
       // Only mark a single pet-row as selected (the first match). Do NOT show gold glow on pet images.
       const selectedName = layout && layout.dataset.selectedPetName ? normalizeName(layout.dataset.selectedPetName) : null;
       let marked = false;
       petList.querySelectorAll('tr').forEach(r => {
         const rowPet = r.dataset.petName || '';
         const img = r.querySelector('img');
         if (img) {
           img.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
           img.style.transition = 'box-shadow 200ms ease';
         }
         if (!marked && selectedName && normalizeName(rowPet) === selectedName) {
           r.classList.add('selected-pet-row');
           marked = true;
         } else {
           r.classList.remove('selected-pet-row');
         }
       });
     }
 
     function updateChances() {
       const multiplierValue = multiplierSelect ? parseFloat(multiplierSelect.value) : 0;
       const riftBonusPercent = multiplierValue * 100;
       const luckPercent = luckInput ? (luckInput.value === "" ? 0 : parseFloat(luckInput.value)) : 0;
       const secretTimes = secretInput ? (secretInput.value === "" ? 1 : Math.max(1, parseFloat(secretInput.value))) : 1;
       const effectiveLuckPercent = luckPercent + riftBonusPercent;
       petList.innerHTML = "";
       (egg.Pets || []).forEach(pet => {
         const isSecret = /\((Secret|Infinity|Bounty)\)/i.test(pet.name) || /\bBounty\b/i.test(pet.name);
         const baseChance = pet.baseOdds && pet.baseOdds > 0 ? 1 / pet.baseOdds : 0;
         let combinedMultiplier = 1 + effectiveLuckPercent / 100;
         if (isSecret) combinedMultiplier *= secretTimes;
         const adjustedChance = baseChance * combinedMultiplier;
         const adjustedOneInNum = (adjustedChance > 0 && isFinite(1 / adjustedChance)) ? Math.round(1 / adjustedChance) : Infinity;
         const adjustedOneIn = adjustedOneInNum === Infinity ? '∞' : adjustedOneInNum.toLocaleString();
 
         const adjustedPercentFormatted = formatAdjustedPercent(adjustedChance);
         const adjustedPercentCell = adjustedPercentFormatted === "Unknown" ? "Unknown" : `${adjustedPercentFormatted}%`;
 
         const petIconPath = pet.icon || getPetIconByName(pet.name) || "Images/Pets/Doggy.webp";
 
         // build row elements so we can style the img for selection
         const row = document.createElement("tr");
         row.dataset.petName = pet.name;
 
         const tdPet = document.createElement("td");
         tdPet.className = "pet-name";
         tdPet.style.position = 'relative';
 
         const img = document.createElement('img');
         img.src = petIconPath;
         img.alt = pet.name;
         img.style.width = '34px';
         img.style.height = '34px';
         img.style.objectFit = 'contain';
         img.style.borderRadius = '6px';
         img.style.marginRight = '8px';
         img.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
         img.style.transition = 'box-shadow 200ms ease';
 
         const textNode = document.createTextNode(' ' + pet.name);
 
         tdPet.appendChild(img);
         tdPet.appendChild(textNode);
 
         // helper: create cell that truncates long numbers and adds a "More" button to expand
         function createExpandableCell(text, align = 'center') {
          const td = document.createElement('td');
          Object.assign(td.style, cellBaseStyle);
          td.style.textAlign = align;
          const s = (text === null || text === undefined) ? '' : String(text);
 
          // short values show directly and centered
          if (s.length <= 20) {
            td.textContent = s;
            td.style.textAlign = 'center';
            return td;
          }
 
          // For long numbers: DO NOT show the number until button clicked.
          // Create a centered placeholder area and a themed button that disappears after click.
          const placeholder = document.createElement('div');
          placeholder.textContent = ''; // intentionally empty per request
          placeholder.style.display = 'block';
          placeholder.style.width = '100%';
          placeholder.style.textAlign = 'center';
          placeholder.style.whiteSpace = 'nowrap';
          placeholder.style.overflow = 'hidden';
          placeholder.style.height = '1em';
          placeholder.style.lineHeight = '1em';
 
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.textContent = 'Show';
          btn.className = 'expand-num-btn';
          // theme-aware styling (rounded, grey/purple depending on CSS vars)
          btn.style.marginLeft = '8px';
          btn.style.padding = '6px 10px';
          btn.style.fontSize = '0.9em';
          btn.style.cursor = 'pointer';
          btn.style.verticalAlign = 'middle';
          btn.style.borderRadius = '10px';
          btn.style.border = '1px solid var(--table-border)';
          btn.style.background = 'var(--controls-bg)';
          btn.style.color = 'var(--main-text)';
 
          btn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            // reveal full number, center it, allow wrapping if needed
            placeholder.textContent = s;
            placeholder.style.whiteSpace = 'normal';
            placeholder.style.overflow = 'visible';
            placeholder.style.height = 'auto';
            placeholder.style.wordBreak = 'break-word';
            placeholder.style.textAlign = 'center';
            // remove the button so it disappears
            try { btn.remove(); } catch (e) { btn.style.display = 'none'; }
          });
 
          td.appendChild(placeholder);
          td.appendChild(btn);
          return td;
        }
 
        const tdBase = createExpandableCell(pet.baseOdds ? `1 in ${Number(pet.baseOdds).toLocaleString()}` : 'Unknown', 'center');
        const tdOneIn = createExpandableCell(`1 in ${adjustedOneIn}`, 'center');
        const tdPercent = createExpandableCell(adjustedPercentCell, 'center');
 
         row.appendChild(tdPet);
         row.appendChild(tdBase);
         row.appendChild(tdOneIn);
         row.appendChild(tdPercent);
 
         petList.appendChild(row);
       });
 
       // apply glow to currently selected pet (if any)
       applySelectionGlow();
 
       setupPetStatsHover();
 
       // ensure the card background expands to fit the table content (fixes "table larger than background")
       // compute using scroll sizes (robust across wrapping) on next frame
       requestAnimationFrame(() => {
         try {
           const tableW = table.scrollWidth || table.getBoundingClientRect().width;
           const tableH = table.scrollHeight || table.getBoundingClientRect().height;
           const cs = getComputedStyle(card);
           const padLeft = parseFloat(cs.paddingLeft) || 0;
           const padRight = parseFloat(cs.paddingRight) || 0;
           const padTop = parseFloat(cs.paddingTop) || 0;
           const padBottom = parseFloat(cs.paddingBottom) || 0;
           // add small buffer to avoid clipping
           const targetMinWidth = Math.ceil(tableW + padLeft + padRight + 12);
           const targetMinHeight = Math.ceil(tableH + padTop + padBottom + 12);
           // apply sizing so background (egg-card) fully contains the table
           card.style.minWidth = targetMinWidth + 'px';
           card.style.minHeight = targetMinHeight + 'px';
           card.style.overflow = 'visible';
           card.style.display = 'block';
         } catch (e) { /* ignore */ }
       });
     }
 
     updateChances();
     if (multiplierSelect) multiplierSelect.addEventListener("change", updateChances);
     if (luckInput) {
       luckInput.addEventListener("focus", () => { if (luckInput.value === "0") luckInput.value = ""; });
       luckInput.addEventListener("blur", () => { if (luckInput.value === "") luckInput.value = "0"; });
       luckInput.addEventListener("input", updateChances);
     }
     if (secretInput) secretInput.addEventListener("input", updateChances);
 
     // observe layout dataset changes to update pet-row selection when selection changes
     if (layout) {
       const mo = new MutationObserver(() => applySelectionGlow());
       mo.observe(layout, { attributes: true, attributeFilter: ['data-selected-bounty-index', 'data-selected-pet-name'] });
     }
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

// bounty button + icon update (fetches API and updates icon; opens custom bounty page)
async function fetchBounties() {
  try {
    const res = await fetch('https://bgsiapi.fytg.me/bounties');
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (e) {
    return [];
  }
}

function formatUTCDateToLabel(d) {
  const day = d.getUTCDate();
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const month = monthNames[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return `${day} ${month} ${year}`;
}

async function updateBountyButtonIcon() {
  let btn = document.querySelector('.world-icon-btn.bounty');
  if (!btn) btn = ensureBountyButton();
  const bounties = await fetchBounties();
  const petPlaceholder = `Images/Pets/Doggy.webp`;
  const imgEl = btn.querySelector('.world-icon-img') || btn.querySelector('img');
  const labelEl = btn.querySelector('.world-icon-label') || btn.querySelector('div,span');
  if (!bounties || bounties.length === 0) {
    if (imgEl) imgEl.src = petPlaceholder;
    if (labelEl) labelEl.textContent = 'Bounty';
    btn.title = 'Bounty (no data)';
    btn.style.display = '';
    return;
  }
  const todayLabel = formatUTCDateToLabel(new Date());
  const todays = bounties.find(b => b.Time === todayLabel) || bounties[0];
   const petName = (todays && todays.Pet) ? todays.Pet : 'Doggy';
  const eggName = (todays && todays.Egg) ? todays.Egg : '';
  const petIcon = `Images/Pets/${formatNameToPath(petName)}.webp`;
  if (imgEl) {
    imgEl.src = petIcon;
    imgEl.alt = petName;
    imgEl.style.objectFit = 'contain';
  }
  if (labelEl) {
    labelEl.textContent = 'Bounty';
  }
  btn.title = `Bounty (UTC): ${petName}${eggName ? ' — ' + eggName : ''}`;
  btn.style.display = '';
}

function ensureBountyButton() {
  const sidebar = document.querySelector('.worlds-sidebar') || document.querySelector('#sidebar') || document.querySelector('.sidebar') || document.body;
  let existing = sidebar.querySelector('.world-icon-btn.bounty');
  if (existing) return existing;

  const reference = sidebar.querySelector('.world-icon-btn:not(.bounty)');
  let btn;
  if (reference) {
    btn = reference.cloneNode(true);
    btn.className = btn.className.split(' ').filter(c => !/overworld|minigame|seas|limited|infinity|infinite/.test(c)).join(' ');
    btn.classList.add('world-icon-btn', 'bounty');
    const labelEl = btn.querySelector('.world-icon-label') || btn.querySelector('div,span');
    if (labelEl) labelEl.textContent = 'Bounty';
    const imgEl = btn.querySelector('.world-icon-img') || btn.querySelector('img');
    if (imgEl) {
      imgEl.src = 'Images/Pets/Doggy.webp';
      imgEl.alt = 'Bounty';
      imgEl.style.objectFit = 'contain';
    }
  } else {
    btn = document.createElement('button');
    btn.className = 'world-icon-btn bounty';
    btn.innerHTML = `
      <img class="world-icon-img" src="Images/Pets/Doggy.webp" alt="Bounty" />
      <div class="world-icon-label">Bounty</div>
    `;
  }

  btn.type = 'button';
  btn.title = 'Bounty';

  // Open bounty details view (no placeholder toast)
  btn.onclick = (e) => {
    e.preventDefault();
    animateEggDetails(() => createBountyDetailsView());
  };

  const referenceBtn = sidebar.querySelector('.world-icon-btn.infinity, .world-icon-btn.infinite, .world-icon-btn.limited') || null;
  if (referenceBtn && referenceBtn.parentNode) {
    referenceBtn.parentNode.insertBefore(btn, referenceBtn.nextSibling);
  } else {
    sidebar.appendChild(btn);
  }
  return btn;
}

document.addEventListener('DOMContentLoaded', function () {
  ensureBountyButton();
  updateBountyButtonIcon();
  setInterval(updateBountyButtonIcon, 5 * 60 * 1000); // refresh every 5 minutes
});

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

// new helper: resolve pet/egg icon paths if explicit icon/image missing
function formatNameToPath(name) {
  if (!name) return '';
  // normalize and remove any parenthetical suffixes e.g. "(Secret)"
  let s = String(name).trim();
  s = s.replace(/\(.*?\)/g, '').trim();

  // Protect any existing encoded forms so we can unify them to a single %27 later.
  s = s.replace(/%2527/g, '__DOUBLE_ENC_P27__'); // already-double-encoded -> placeholder
  s = s.replace(/%27/g, '__ENC_P27__');           // already-single-encoded -> placeholder

  // Convert curly or straight apostrophes to the UI-encoded form %27
  s = s.replace(/[\u2018\u2019']/g, '%27');

  // replace whitespace with underscores
  s = s.replace(/\s+/g, '_');

  // remove common path-breaking characters
  s = s.replace(/[\/\\"]/g, '');

  // allow letters, numbers, underscore, hyphen, dot, parentheses and percent sequences
  s = s.replace(/[^A-Za-z0-9_%\-\._()]/g, '');

  // collapse multiple underscores
  s = s.replace(/_+/g, '_');

  // Restore any placeholders as a single %27 so final filenames always use %27 (not %2527)
  s = s.replace(/__DOUBLE_ENC_P27__/g, '%27');
  s = s.replace(/__ENC_P27__/g, '%27');

  return s;
}
function getPetIconByName(petName) {
  if (!petName) return "Images/Pets/Doggy.webp";
  const baseName = petName.replace(/\(.*?\)/g, '').trim();
  const candidate = `Images/Pets/${formatNameToPath(baseName)}.webp`;
  return candidate;
}
function getEggImagePath(eggOrName) {
  if (!eggOrName) return "Images/Eggs/Placeholder_Egg.webp";
  if (typeof eggOrName === 'string') {
    const candidate = `Images/Eggs/${formatNameToPath(eggOrName)}.webp`;
    return candidate;
  }
  if (eggOrName.image) return eggOrName.image;
  const candidate = `Images/Eggs/${formatNameToPath(eggOrName.name)}.webp`;
  return candidate;
}

// Add a lightweight bounty watcher that refreshes the current egg view when bounties change.
// This ensures:
// - when a bounty is added to an egg that previously had no secret control, the view is rebuilt
//   so the secret multiplier/control appears.
// - when a secret/bounty expires or changes, the table is updated live for users currently on the page.
let __lastBountiesJson = null;
let __bountyWatcherStarted = false;

function startBountyWatcher() {
  if (__bountyWatcherStarted) return;
  __bountyWatcherStarted = true;

  // Poll interval (ms). Adjust if you already have a server push mechanism.
  const POLL_MS = 20_000;

  async function check() {
    try {
      const bounties = await fetchBounties();
      const json = JSON.stringify(bounties || []);
      if (json !== __lastBountiesJson) {
        __lastBountiesJson = json;
        // If an egg details view is open, refresh it so controls/table update to reflect bounty/secret changes.
        try {
          // selectedEgg is used elsewhere in the app as the currently-open egg (object or name).
          // Try to resolve an egg object if selectedEgg is a name.
          if (typeof selectedEgg !== 'undefined' && selectedEgg) {
            let eggObj = selectedEgg;
            if (typeof selectedEgg === 'string') {
              eggObj = (window.eggs || window.eggsJson || []).find(e => e.name === selectedEgg) || null;
            }
            if (eggObj) {
              // Re-create the egg details view to pick up any bounty/secret changes.
              // Find whether the egg supports rift from known data if available
              const canRift = !!(eggObj.canSpawnAsRift || (eggObj.canSpawnAsRift === true));
              // call async view rebuild but don't await to avoid blocking
              createEggDetailsView(eggObj, canRift).catch(() => { /* ignore */ });
            }
          }
          // Also refresh bounty page if it's open
          const bountyLayout = document.querySelector('.egg-details-layout[data-world="bounty"]');
          if (bountyLayout) {
            // populateBountyView is the existing function that (re)builds the bounty content
            if (typeof populateBountyView === 'function') {
              populateBountyView().catch(() => { /* ignore */ });
            }
          }
        } catch (e) {
          // best-effort; don't break polling
          console.warn('bounty-watcher: update failed', e);
        }
      }
    } catch (e) {
      // ignore transient errors
      // console.debug('bounty-watcher fetch error', e);
    }
  }

  // run immediately then on interval
  check();
  setInterval(check, POLL_MS);
}

// Start watcher automatically
startBountyWatcher();