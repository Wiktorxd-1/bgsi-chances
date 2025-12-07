const eggs = [
{ name: "Common Egg", Pets: [ { name: "King Doggy (Secret)", baseOdds: 100000000 } ], world: "1" },
{ name: "Spikey Egg", Pets: [ { name: "Emerald Golem", baseOdds: 200 } ], world: "1" },
{ name: "Magma Egg", Pets: [ { name: "Inferno Dragon", baseOdds: 400 } ], world: "1" },
{ name: "Crystal Egg", Pets: [ { name: "Unicorn", baseOdds: 400 }, { name: "Flying Pig", baseOdds: 1000 } ], world: "1" },
{ name: "Lunar Egg", Pets: [ { name: "Lunar Serpent", baseOdds: 400 }, { name: "Electra", baseOdds: 1000 } ], world: "1" },
{ name: "Void Egg", Pets: [ { name: "Dark Phoenix", baseOdds: 2000 }, { name: "Neon Elemental", baseOdds: 5000 }, { name: "NULLVoid", baseOdds: 1000000 } ], world: "1" },
{ name: "Hell Egg", Pets: [ { name: "Inferno Cube", baseOdds: 4000 }, { name: "Virus", baseOdds: 50000 } ], world: "1" },
{ name: "Nightmare Egg", Pets: [ { name: "Green Hydra", baseOdds: 25000 }, { name: "Demonic Hydra", baseOdds: 100000 }, { name: "The Overlord (Secret)", baseOdds: 50000000 } ], world: "1" },
{ name: "Rainbow Egg", Pets: [ { name: "Hexarium", baseOdds: 100000 }, { name: "Rainbow Shock", baseOdds: 200000 } ], world: "1" },
{ name: "Mining Egg", Pets: [ { name: "Crystal Unicorn", baseOdds: 200 }, { name: "Stone Gargoyle", baseOdds: 20000 }, { name: "Giant Cave Mole (Secret)", baseOdds: 500000000 } ], world: "2" },
{ name: "Cyber Egg", Pets: [ { name: "Cyborg Phoenix", baseOdds: 2500 }, { name: "Space Invader", baseOdds: 50000 }, { name: "Bionic Shard", baseOdds: 666667 }, { name: "Mech Robot (Secret)", baseOdds: 66666667 } ], world: "2" },
{ name: "Neon Egg", Pets: [ { name: "Neon Wyvern", baseOdds: 3333 }, { name: "Neon Wire Eye", baseOdds: 66667 }, { name: "Equalizer", baseOdds: 833333 }, { name: "Hyperwave Kitty (Secret)", baseOdds: 125000000 } ], world: "2" },
{ name: "Chance Egg", Pets: [ { name: "Ring Master", baseOdds: 100000 }, { name: "Royal Guardian (Secret)", baseOdds: 200000000 } ], world: "1" },
{ name: "Icy Egg", Pets: [ { name: "Marshmallow", baseOdds: 2000 }, { name: "Minty Serpent", baseOdds: 66667 }, { name: "Ice Winged Hydra", baseOdds: 833333 }, { name: "Giant Pearl (Secret)", baseOdds: 125000000 } ], world: "3" },
{ name: "Vine Egg", Pets: [ { name: "Thorn Dragon", baseOdds: 4000 }, { name: "Flower Pot", baseOdds: 100000 }, { name: "Lovely Lotus", baseOdds: 1000000 }, { name: "Earth Champion (Secret)", baseOdds: 500000000 }, { name: "Dark Champion (Secret)", baseOdds: 500000000 }, { name: "Fire Champion (Secret)", baseOdds: 500000000 }, { name: "Sky Champion (Secret)", baseOdds: 500000000 } ], world: "3" },
{ name: "Lava Egg", Pets: [ { name: "Magma Cube", baseOdds: 4000 }, { name: "Night Dweller", baseOdds: 100000 }, { name: "Fire King", baseOdds: 1333333 }, { name: "Hellshard (Secret)", baseOdds: 1000000000 } ], world: "3" },
{ name: "Secret Egg", Pets: [ { name: "Gigantic Spitty (Infinity)", baseOdds: 40000000000 } ], world: "1" },
{ name: "Atlantis Egg", Pets: [ { name: "Angler Fish", baseOdds: 4000 }, { name: "Jellyfish", baseOdds: 200000 }, { name: "Atlantis Guardian", baseOdds: 2000000 }, { name: "Tidal God (Secret)", baseOdds: 250000000 } ], world: "3" },
{ name: "Classic Egg", Pets: [ { name: "Classic Unicorn", baseOdds: 4000 }, { name: "Classic Dominus", baseOdds: 200000 }, { name: "Classic Noob", baseOdds: 2000000 }, { name: "Classic Overlord (Secret)", baseOdds: 100000000 } ], world: "3" },
{ name: "Developer Egg", Pets: [ { name: "Sylently's Hats", baseOdds: 100000 }, { name: "Isaac Rainbow Shock", baseOdds: 1000000 }, { name: "Nert Plushie (Secret)", baseOdds: 500000000 }, { name: "ObscureEntity Plushie (Secret)", baseOdds: 500000000 }, { name: "Quamatic Plushie (Secret)", baseOdds: 500000000 }, { name: "Sircfenner Plushie (Secret)", baseOdds: 500000000 }, { name: "Sylently Plushie (Secret)", baseOdds: 500000000 }, { name: "FutureWebsiteOwner Plushie (Secret)", baseOdds: 500000000 }, { name: "Sylently's Pet (Infinity)", baseOdds: 20000000000 } ], world: "1" },
{ name: "Gingerbread Egg", Pets: [ { name: "Gingerbread Shard (Secret)", baseOdds: 100000000 } ], world: "limited1" },
{ name: "Candycane Egg", Pets: [ { name: "Royal Candy Cane", baseOdds: 10000 }, { name: "Demonic Peppermint", baseOdds: 40000 }, { name: "Peppermint Heart (Secret)", baseOdds: 200000000 }, { name: "Velvet Wolflord (Secret)", baseOdds: 1000000000 } ], world: "limited1" },
{ name: "Yuletide Egg", Pets: [ { name: "Mistletoe Fiend", baseOdds: 10000 }, { name: "Jingle Orb", baseOdds: 100000 }, { name: "Illuminated Fawn", baseOdds: 2000000 }, { name: "Santa's Hat (Secret)", baseOdds: 400000000 }, { name: "Holy Bell (Secret)", baseOdds: 1000000000 }, { name: "Holy Candle (Secret)", baseOdds: 2000000000 }, { name: "Archangel (Secret)", baseOdds: 5000000000 }, { name: "Frosted Dogcat (Secret)", baseOdds: 10000000000 }, { name: "Morning Star (Infinity)", baseOdds: 80000000000 } ], world: "limited1" },
{ name: "Rumblecon Egg", image: "Images/eggs/Placeholder.webp", Pets: [ { name: "MVP Rumblecon Doggy", baseOdds: 100000 }, { name: "Rumblecon Ticket Vendor", baseOdds: 1000000 }, { name: "The Golden Ticket (Secret)", baseOdds: 100000000 }, { name: "Rumblecon Trophy (Secret)", baseOdds: 500000000 }, { name: "Rumblecon Halftime Show (Secret)", baseOdds: 1000000000 }, { name: "RUMBLECON GOD (Infinity)", baseOdds: 200000000000 } ], world: "limited" }
];

const BOUNTY_OVERRIDES = {
  'OG Lucky Pyramidium': 1250000000,
  'OG Hellshard': 400000000,
  'OG Overlord Plushie': 100000000
};

function getBountyOverrideByName(petName) {
  if (!petName) return null;
  const normalized = String(petName).replace(/\(.*?\)/g, '').trim().toLowerCase();
  for (const key of Object.keys(BOUNTY_OVERRIDES || {})) {
    if (!key) continue;
    const kNorm = String(key).replace(/\(.*?\)/g, '').trim().toLowerCase();
    if (kNorm === normalized) return BOUNTY_OVERRIDES[key];
  }
  return null;
} 


const FESTIVE_POTION_MAP = {
  'I': { luck: 50, shiny: 50, mythic: 25 },
  'II': { luck: 125, shiny: 75, mythic: 50 },
  'III': { luck: 150, shiny: 100, mythic: 75 },
  'IV': { luck: 300, shiny: 200, mythic: 150 }
};


const MASTERY_MAP = {
  0: { luck: 0, secretLuck: 0, infinityLuck: 0 },
  1: { luck: 5, secretLuck: 0, infinityLuck: 0 },
  2: { luck: 10, secretLuck: 0, infinityLuck: 0 },
  3: { luck: 15, secretLuck: 0, infinityLuck: 0 },
  4: { luck: 20, secretLuck: 0, infinityLuck: 0 },
  5: { luck: 25, secretLuck: 0, infinityLuck: 0 },
  6: { luck: 30, secretLuck: 0, infinityLuck: 0 },
  7: { luck: 30, secretLuck: 1, infinityLuck: 0 },
  8: { luck: 30, secretLuck: 2, infinityLuck: 0 },
  9: { luck: 30, secretLuck: 3, infinityLuck: 0 },
 10: { luck: 30, secretLuck: 4, infinityLuck: 0 },
 11: { luck: 30, secretLuck: 5, infinityLuck: 0 },
 12: { luck: 30, secretLuck: 5, infinityLuck: 1 },
 13: { luck: 30, secretLuck: 5, infinityLuck: 2 },
 14: { luck: 30, secretLuck: 5, infinityLuck: 3 }
};



let selectedWorld = null;
let selectedEgg = null;
let lastSearchValue = '';
const eggList = document.getElementById("egg-list");
let lastNormalWorld = null;

function renderEggs() {
  if (window && window._openBountyOnLoad) {
    return;
  }
  animateEggList(() => {
    eggList.innerHTML = '';
    const eggsJson = window.eggsJson || [];
    const searchBarRow = document.getElementById('search-bar-row');
    const worldsSidebar = document.querySelector('.worlds-sidebar')
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
        if (selectedWorld === 'limited') {

          filteredEggs = filteredEggs.filter(egg => egg.world === 'limited' || egg.world === 'limitedH' || egg.world === 'limited1');
        } else {
          filteredEggs = filteredEggs.filter(egg => egg.world === selectedWorld);
        }
    }

    if (filteredEggs.length === 0) {
      const noResults = document.createElement('div');
      noResults.style.textAlign = 'center';
      noResults.style.margin = '32px 0';
      noResults.style.fontSize = '1.3em';
      noResults.style.opacity = '0.7';
      noResults.textContent = 'No eggs found that match the query';
      eggList.appendChild(noResults);
      return;
    }

    filteredEggs.forEach(egg => {
      createEggGridItem(egg);
    });
  });
}

 

async function fetchEggsData() {

  const resp = await fetch('Data/eggs.json');
  const eggsJson = await resp.json();

  let riftSet = new Set();
  try {
    const r = await fetch('Data/rifts.txt');
    if (r && r.ok) {
      const txt = await r.text();
      riftSet = new Set(txt.split(/\r?\n/).map(l => l.trim()).filter(Boolean));
    }
  } catch (e) {

  }

  if (Array.isArray(eggsJson)) {
    for (const egg of eggsJson) {
      try {

        const isRift = !riftSet.has(egg.name);
        egg.rift = isRift;
        egg.canSpawnAsRift = isRift;
      } catch (e) {
      }
    }
  }

  return eggsJson;
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
  let applyBountyFunc = null;

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
  
  const timerLabelEl = document.createElement('div');
  timerLabelEl.style.fontWeight = '700';
  timerLabelEl.style.marginBottom = '4px';
  timerLabelEl.textContent = '';
  const timerValueEl = document.createElement('div');
  timerValueEl.style.whiteSpace = 'pre';
  timerValueEl.textContent = '';
  timerEl.appendChild(timerLabelEl);
  timerEl.appendChild(timerValueEl);
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

  let timerInterval = null;
  function updateTimer() {
    try {
      const selectedIdxRaw = layout.dataset.selectedBountyIndex;
      const selectedIdx = Number(selectedIdxRaw || '');
      let prefix = 'Next bounty in: ';

      let secs = secondsUntilNextUTCDate();

      if (!Number.isNaN(selectedIdx) && selectedIdxRaw !== '' && filteredBounties && filteredBounties.length > selectedIdx) {
        const b = filteredBounties[selectedIdx];

        if (!b || !b.Time) {
          try { timerLabelEl.textContent = 'Time until this bounty:'; } catch (e) {}
          try { timerValueEl.textContent = 'Loading...'; } catch (e) {}
          return;
        }
        const target = parseApiDateToUTC(b.Time);
        if (!target) {
          try { timerLabelEl.textContent = 'Time until this bounty:'; } catch (e) {}
          try { timerValueEl.textContent = 'Loading...'; } catch (e) {}
          return;
        }
        const now = Date.now();
        const diff = Math.max(0, Math.floor((target.getTime() - now) / 1000));
        secs = diff;
        const today = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 0,0,0));
        if (target.getTime() >= today.getTime()) {
          const isToday = (target.getTime() === today.getTime());
          if (isToday) {
            secs = secondsUntilNextUTCDate();
            prefix = 'Next bounty in: ';
          } else {
            prefix = 'Time until this bounty: ';
          }
        }
      }

      if (!isFinite(secs) || secs < 0) {
        try { timerLabelEl.textContent = 'Time until this bounty:'; } catch (e) {}
        try { timerValueEl.textContent = 'Loading...'; } catch (e) {}
        return;
      }
      const days = Math.floor(secs / 86400);
      const hours = Math.floor((secs % 86400) / 3600);
      const minutes = Math.floor((secs % 3600) / 60);
      const seconds = secs % 60;
      const p = n => String(n).padStart(2, '0');
      try { timerLabelEl.textContent = prefix.trim(); } catch (e) {}
      try {
        if (days > 0) {
          timerValueEl.textContent = `${days}d ${p(hours)}:${p(minutes)}:${p(seconds)}`;
        } else {
          timerValueEl.textContent = `${p(hours)}:${p(minutes)}:${p(seconds)}`;
        }
      } catch (e) {}
    } catch (e) {
      try { timerLabelEl.textContent = 'Time until this bounty:'; } catch (e) {}
      try { timerValueEl.textContent = 'Loading...'; } catch (e) {}
    }
  }
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);

  let upcomingPage = 0;
  const pageSize = 5;
  const PLACEHOLDER_EGG_IMAGE = 'Images/eggs/Placeholder.webp';

  function safeVal(v) {
    if (v === null || v === undefined) return null;
    const s = String(v).trim();
    if (s === '' || s === '?' ) return null;
    return s;
  }

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


      applyBountyFunc = (b, index) => {
        currentBounty = b;
        try { timerLabelEl.textContent = 'Time until this bounty:'; } catch (e) {}
        try { timerValueEl.textContent = 'Loading...'; } catch (e) {}
        const layoutEl = document.querySelector('.egg-details-layout');
        if (layoutEl) {
          layoutEl.dataset.selectedBountyIndex = index || '';
          layoutEl.dataset.selectedPetName = safeVal(b && b.Pet) || '';
          updateUpcomingGlow();
        }

        const petNameSafe = safeVal(b && b.Pet) || 'Unknown';
        petImg.src = getPetIconByName(petNameSafe) || 'Images/pets/Doggy.webp';
        petImg.alt = petNameSafe;
        nameEl.textContent = petNameSafe;
        chanceEl.textContent = `Chance (base): ${safeVal(b && b.Chance) || 'Unknown'}`;

        const targetEggRaw = safeVal(b && b.Egg);
        const targetEggName = targetEggRaw || 'Unknown Egg';
        eggImg.src = targetEggRaw ? getEggImagePath(targetEggName) : PLACEHOLDER_EGG_IMAGE;
        eggImg.alt = targetEggName;
        eggNameUnder.textContent = targetEggName;
    try { eggEl.innerHTML = `Egg: <strong>${targetEggName}</strong>`; } catch (e) {}

        let newBountyBaseOdds = parseChanceString(b && b.Chance);
        try {
          const override = getBountyOverrideByName(b && b.Pet);
          if (override) {
            newBountyBaseOdds = override;
            try { chanceEl.textContent = `Chance (base): 1/${newBountyBaseOdds.toLocaleString()}`; } catch (e) {}
          }
        } catch (e) {}
        const newBountyPetObj = { name: (safeVal(b && b.Pet) || 'Unknown') + ' (Bounty)', baseOdds: newBountyBaseOdds || 0, icon: getPetIconByName(b && b.Pet) };

        const selectedEggObj = eggs.find(e => e.name === targetEggName) || (window.eggsJson || []).find(e => e.name === targetEggName) || null;
        const selectedPetsList = selectedEggObj && Array.isArray(selectedEggObj.Pets) ? selectedEggObj.Pets.slice() : [];

        combinedEggForTable.name = targetEggName;
        combinedEggForTable.Pets = [];
        if (newBountyBaseOdds) combinedEggForTable.Pets.push(newBountyPetObj);
        combinedEggForTable.Pets = combinedEggForTable.Pets.concat(selectedPetsList);
        combinedEggForTable.secretBountyRotation = true;

        const selectedJsonEgg = (window.eggsJson || []).find(e => e.name === targetEggName) || null;
        const selectedCanSpawnAsRift = !!(selectedJsonEgg && selectedJsonEgg.canSpawnAsRift);

        if (petsCard && petsCard.parentNode) petsCard.parentNode.removeChild(petsCard);
        petsCard = createEggPetInfoCard(combinedEggForTable, selectedCanSpawnAsRift);
        petsCard.style.marginTop = '18px';
        petsCard.style.boxSizing = 'border-box';
        petsCard.style.overflow = 'visible';
        petsCard.style.display = 'block';
        petsCard.style.width = '100%';
        petsCard.style.minWidth = '0';
        petsCard.style.alignSelf = 'stretch';
        right.appendChild(petsCard);

        try {
          const existingControls = middle.querySelector('.controls');
          const newControls = createEggSettings(combinedEggForTable, selectedCanSpawnAsRift);
          newControls.style.marginTop = '8px';
          newControls.style.alignSelf = 'flex-start';
          newControls.style.width = '100%';
          if (existingControls && existingControls.parentNode) existingControls.parentNode.replaceChild(newControls, existingControls);
          else middle.appendChild(newControls);
        } catch (e) {}
      };

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
        const petSafe = safeVal(b && b.Pet) || 'Unknown';
        icon.src = getPetIconByName(petSafe) || PLACEHOLDER_EGG_IMAGE;
        icon.alt = petSafe;
        icon.style.width = '36px';
        icon.style.height = '36px';
        icon.style.objectFit = 'contain';
        icon.style.borderRadius = '6px';
        icon.style.border = '1px solid transparent';
        const globalIndex = String(filteredBounties.indexOf(b));
        btn.dataset.bountyIndex = globalIndex;
        btn.dataset.petName = petSafe || '';
        btn.style.boxShadow = 'none';

        const textWrap = document.createElement('div');
        textWrap.style.display = 'flex';
        textWrap.style.flexDirection = 'column';
        textWrap.style.alignItems = 'flex-start';
        const petSpan = document.createElement('div');
        petSpan.textContent = safeVal(b && b.Pet) || 'Unknown';
        petSpan.style.fontWeight = '600';
        petSpan.style.fontSize = '0.95rem';
        const dateSpan = document.createElement('div');
        dateSpan.textContent = (b && b.Time) ? formatShortLabel(b.Time) : 'Unknown';
        dateSpan.style.opacity = '0.85';
        dateSpan.style.fontSize = '0.85rem';
        textWrap.appendChild(petSpan);
        textWrap.appendChild(dateSpan);

        btn.appendChild(icon);
        btn.appendChild(textWrap);

        btn.addEventListener('click', () => {
          if (typeof applyBountyFunc === 'function') {
            applyBountyFunc(b, btn.dataset.bountyIndex);
          } else {
            currentBounty = b;
            const layoutEl = document.querySelector('.egg-details-layout');
            if (layoutEl) {
              layoutEl.dataset.selectedBountyIndex = btn.dataset.bountyIndex || '';
              layoutEl.dataset.selectedPetName = safeVal(b && b.Pet) || '';
              updateUpcomingGlow();
            }
            try { timerLabelEl.textContent = 'Time until this bounty:'; } catch (e) {}
            try { timerValueEl.textContent = 'Loading...'; } catch (e) {}

            const petNameSafe = safeVal(b && b.Pet) || 'Unknown';
            petImg.src = getPetIconByName(petNameSafe) || 'Images/pets/Doggy.webp';
            petImg.alt = petNameSafe;
            nameEl.textContent = petNameSafe;
            chanceEl.textContent = `Chance (base): ${safeVal(b && b.Chance) || 'Unknown'}`;

            const targetEggRaw = safeVal(b && b.Egg);
            const targetEggName = targetEggRaw || eggText || 'Unknown Egg';
            eggImg.src = targetEggRaw ? getEggImagePath(targetEggName) : PLACEHOLDER_EGG_IMAGE;
            eggImg.alt = targetEggName;
            eggNameUnder.textContent = targetEggName;

            let newBountyBaseOdds = parseChanceString(b && b.Chance);
            try {
              const override = getBountyOverrideByName(b && b.Pet);
              if (override) {
                newBountyBaseOdds = override;
                try { chanceEl.textContent = `Chance (base): 1/${newBountyBaseOdds.toLocaleString()} (override)`; } catch (e) {}
              }
            } catch (e) {}
            const newBountyPetObj = { name: (safeVal(b && b.Pet) || 'Unknown') + ' (Bounty)', baseOdds: newBountyBaseOdds || 0, icon: getPetIconByName(b && b.Pet) };

            const selectedEggObj = eggs.find(e => e.name === targetEggName) || (window.eggsJson || []).find(e => e.name === targetEggName) || null;
            const selectedPetsList = selectedEggObj && Array.isArray(selectedEggObj.Pets) ? selectedEggObj.Pets.slice() : [];

            combinedEggForTable.name = targetEggName;
            combinedEggForTable.Pets = [];
            if (newBountyBaseOdds) combinedEggForTable.Pets.push(newBountyPetObj);
            combinedEggForTable.Pets = combinedEggForTable.Pets.concat(selectedPetsList);
            combinedEggForTable.secretBountyRotation = true;

            const selectedJsonEgg = (window.eggsJson || []).find(e => e.name === targetEggName) || null;
            const selectedCanSpawnAsRift = !!(selectedJsonEgg && selectedJsonEgg.canSpawnAsRift);

            if (petsCard && petsCard.parentNode) petsCard.parentNode.removeChild(petsCard);
            petsCard = createEggPetInfoCard(combinedEggForTable, selectedCanSpawnAsRift);
            petsCard.style.marginTop = '18px';
            petsCard.style.boxSizing = 'border-box';
            petsCard.style.overflow = 'visible';
            petsCard.style.display = 'block';
            petsCard.style.width = '100%';
            petsCard.style.minWidth = '0';
            petsCard.style.alignSelf = 'stretch';
            right.appendChild(petsCard);

            try {
              const existingControls = middle.querySelector('.controls');
              const newControls = createEggSettings(combinedEggForTable, selectedCanSpawnAsRift);
              newControls.style.marginTop = '8px';
              newControls.style.alignSelf = 'flex-start';
              newControls.style.width = '100%';
              if (existingControls && existingControls.parentNode) existingControls.parentNode.replaceChild(newControls, existingControls);
              else middle.appendChild(newControls);
            } catch (e) {}
          }
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

  try {
    const selIdx = layout.dataset.selectedBountyIndex || '';
    if (selIdx !== '' && filteredBounties[Number(selIdx)]) {
      if (typeof applyBountyFunc === 'function') applyBountyFunc(filteredBounties[Number(selIdx)], selIdx);
    }
  } catch (e) {}
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

  const fakeEggForControls = { name: 'Bounty', Pets: [], world: 'bounty', secretBountyRotation: true };
  const controlsEl = createEggSettings(fakeEggForControls, eggCanSpawnAsRift);
  controlsEl.style.marginTop = '8px';
  controlsEl.style.alignSelf = 'flex-start';
  controlsEl.style.width = '100%';
  middle.appendChild(controlsEl);

  const eggObj = eggs.find(e => e.name === eggText) || (window.eggsJson || []).find(e => e.name === eggText) || null;
  const petsList = eggObj && Array.isArray(eggObj.Pets) ? eggObj.Pets.slice() : [];

  let bountyBaseOdds = parseChanceString(chanceText);
  const bountyNameKey = (currentBounty && currentBounty.Pet) ? currentBounty.Pet : petNameVal;
  try {
    const override = getBountyOverrideByName(bountyNameKey);
    if (override) {
      bountyBaseOdds = override;
      try { chanceEl.textContent = `Chance (base): 1/${bountyBaseOdds.toLocaleString()}`; } catch (e) {}
    }
  } catch (e) {}
  const bountyPetObj = { name: (currentBounty && currentBounty.Pet ? currentBounty.Pet : petNameVal) + ' (Bounty)', baseOdds: bountyBaseOdds || 0, icon: getPetIconByName(currentBounty ? currentBounty.Pet : petNameVal) };

  const combinedEggForTable = { name: eggText, Pets: [], secretBountyRotation: true };
  if (bountyBaseOdds) combinedEggForTable.Pets.push(bountyPetObj);
  combinedEggForTable.Pets = combinedEggForTable.Pets.concat(petsList);

  let petsCard = createEggPetInfoCard(combinedEggForTable, false);
  petsCard.style.marginTop = '18px';
  petsCard.style.boxSizing = 'border-box';
  petsCard.style.overflow = 'visible';
  petsCard.style.display = 'block';
  petsCard.style.width = '100%';
  petsCard.style.minWidth = '0';
  petsCard.style.alignSelf = 'stretch';
  right.appendChild(petsCard);

  try {
    const existingControls = middle.querySelector('.controls');
    const newControls = createEggSettings(combinedEggForTable, eggCanSpawnAsRift);
    newControls.style.marginTop = '8px';
    newControls.style.alignSelf = 'flex-start';
    newControls.style.width = '100%';
    if (existingControls && existingControls.parentNode) existingControls.parentNode.replaceChild(newControls, existingControls);
    else middle.appendChild(newControls);
  } catch (e) {}

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
      { id: "3", label: "Seven Seas", icon: "Images/Icons/Seven_Seas_Icon.webp" },
      { id: "c2025", label: "Christmas 2025", icon: "Images/Icons/Christmas_Icon.webp" }
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
  } else {
    left.appendChild(createEggSettings(egg, canSpawnAsRift));
  }

  const middle = document.createElement('div');
  middle.className = 'egg-details-middle';

  let petsToShow = egg.Pets ? egg.Pets.slice() : [];
  if (egg.name === "Infinity Egg") {
    await loadInfinityEggData();
    if (infinityEggData && infinityEggData[selectedInfinityWorld] && Array.isArray(infinityEggData[selectedInfinityWorld].Pets)) {
      petsToShow = infinityEggData[selectedInfinityWorld].Pets.filter(p => p && p.name && isFinite(Number(p.baseOdds)) && Number(p.baseOdds) > 0).slice();
    }
  }

  try {
    const bounties = await fetchBounties();
    const todayLabel = formatUTCDateToLabel(new Date());
    const todays = (bounties || []).find(b => b.Time === todayLabel) || null;
    if (todays && todays.Egg && todays.Egg === egg.name) {
      let bountyChance = parseChanceString(todays.Chance);
      try {
        const override = getBountyOverrideByName(todays && todays.Pet);
        if (override) bountyChance = override;
      } catch (e) {}
      const bountyPetObj = {
        name: (todays.Pet || 'Unknown') + ' (Bounty)',
        baseOdds: bountyChance || 0,
        icon: getPetIconByName(todays.Pet)
      };
      petsToShow = [bountyPetObj].concat(petsToShow);
      const existingControls = left.querySelector('.controls');
      try {
        const controlsReplacement = createEggSettings({ name: egg.name, Pets: petsToShow }, canSpawnAsRift);
        if (existingControls && existingControls.parentNode) {
          existingControls.parentNode.replaceChild(controlsReplacement, existingControls);
        } else {
          left.appendChild(controlsReplacement);
        }
      } catch (e) { }
    }
  } catch (e) { }

  const eggForTable = { ...egg, Pets: petsToShow };
  try {
    const bounties = await fetchBounties().catch(() => null);
    if (Array.isArray(bounties) && bounties.length) {
      const match = bounties.find(b => (b && b.Egg || '').trim().toLowerCase() === (egg.name || '').trim().toLowerCase());
      if (match) {
        let bountyBaseOdds = parseChanceString(match && match.Chance);
        try {
          const override = getBountyOverrideByName(match && match.Pet);
          if (override) bountyBaseOdds = override;
        } catch (e) {}
        const bountyPetObj = { name: (match && match.Pet ? match.Pet : 'Unknown') + ' (Bounty)', baseOdds: bountyBaseOdds || 0, icon: getPetIconByName(match ? match.Pet : '') };
        eggForTable.Pets = [bountyPetObj].concat(eggForTable.Pets || []);
        eggForTable.secretBountyRotation = true;
      }
    }
  } catch (e) {}
  middle.appendChild(createEggPetInfoCard(eggForTable, canSpawnAsRift));

  const right = document.createElement('div');
  right.className = 'egg-details-right';

  right.style.display = 'flex';
  right.style.flexDirection = 'column';
  right.style.alignItems = 'flex-start';
  right.style.flex = '1 1 0%';
  right.style.boxSizing = 'border-box';

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
      { id: "3", label: "Seven Seas", icon: "Images/Icons/Seven_Seas_Icon.webp" },
      { id: "c2025", label: "Christmas 2025", icon: "Images/Icons/Christmas_Icon.webp" }
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
  } else {
    left.appendChild(createEggSettings(egg, canSpawnAsRift));
  }

  const middle = document.createElement('div');
  middle.className = 'egg-details-middle';

  let petsToShow = egg.Pets ? egg.Pets.slice() : [];
  if (egg.name === "Infinity Egg") {
    await loadInfinityEggData();
    if (infinityEggData && infinityEggData[selectedInfinityWorld] && Array.isArray(infinityEggData[selectedInfinityWorld].Pets)) {
      petsToShow = infinityEggData[selectedInfinityWorld].Pets.slice();
    }
  }

  try {
    const bounties = await fetchBounties();
    const todayLabel = formatUTCDateToLabel(new Date());
    const todays = (bounties || []).find(b => b.Time === todayLabel) || null;
    if (todays && todays.Egg && todays.Egg === egg.name) {
      let bountyChance = parseChanceString(todays.Chance);
      try { const override = getBountyOverrideByName(todays && todays.Pet); if (override) bountyChance = override; } catch (e) {}
      const bountyPetObj = {
        name: (todays.Pet || 'Unknown') + ' (Bounty)',
        baseOdds: bountyChance || 0,
        icon: getPetIconByName(todays.Pet)
      };
      petsToShow = [bountyPetObj].concat(petsToShow);
      const existingControls = left.querySelector('.controls');
      try {
        const controlsReplacement = createEggSettings({ name: egg.name, Pets: petsToShow }, canSpawnAsRift);
        if (existingControls && existingControls.parentNode) {
          existingControls.parentNode.replaceChild(controlsReplacement, existingControls);
        } else {
          left.appendChild(controlsReplacement);
        }
      } catch (e) { }
    }
  } catch (e) { }

  const eggForTable = { ...egg, Pets: petsToShow };
  try {
    const bounties = await fetchBounties().catch(() => null);
    if (Array.isArray(bounties) && bounties.length) {
      const match = bounties.find(b => (b && b.Egg || '').trim().toLowerCase() === (egg.name || '').trim().toLowerCase());
      if (match) {
        let bountyBaseOdds = parseChanceString(match && match.Chance);
        const bountyKey = (match && match.Pet) ? match.Pet : null;
        try { const override = getBountyOverrideByName(bountyKey); if (override) bountyBaseOdds = override; } catch (e) {}
        const bountyPetObj = { name: (match && match.Pet ? match.Pet : 'Unknown') + ' (Bounty)', baseOdds: bountyBaseOdds || 0, icon: getPetIconByName(match ? match.Pet : '') };
        eggForTable.Pets = [bountyPetObj].concat(eggForTable.Pets || []);
        eggForTable.secretBountyRotation = true;
      }
    }
  } catch (e) {}
  middle.appendChild(createEggPetInfoCard(eggForTable, canSpawnAsRift));

  const right = document.createElement('div');
  right.className = 'egg-details-right';

  right.style.display = 'flex';
  right.style.flexDirection = 'column';
  right.style.alignItems = 'flex-start';
  right.style.flex = '1 1 0%';
  right.style.boxSizing = 'border-box';

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
      { id: "3", label: "Seven Seas", icon: "Images/Icons/Seven_Seas_Icon.webp" },
      { id: "c2025", label: "Christmas 2025", icon: "Images/Icons/Christmas_Icon.webp" }
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
  } else {
    left.appendChild(createEggSettings(egg, canSpawnAsRift));
  }

  const middle = document.createElement('div');
  middle.className = 'egg-details-middle';

  let petsToShow = egg.Pets ? egg.Pets.slice() : [];
  if (egg.name === "Infinity Egg") {
    await loadInfinityEggData();
    if (infinityEggData && infinityEggData[selectedInfinityWorld] && Array.isArray(infinityEggData[selectedInfinityWorld].Pets)) {
      petsToShow = infinityEggData[selectedInfinityWorld].Pets.slice();
    }
  }

  try {
    const bounties = await fetchBounties();
    const todayLabel = formatUTCDateToLabel(new Date());
    const todays = (bounties || []).find(b => b.Time === todayLabel) || null;
    if (todays && todays.Egg && todays.Egg === egg.name) {
      let bountyChance = parseChanceString(todays.Chance);
      try { const override = getBountyOverrideByName(todays && todays.Pet); if (override) bountyChance = override; } catch (e) {}
      const bountyPetObj = {
        name: (todays.Pet || 'Unknown') + ' (Bounty)',
        baseOdds: bountyChance || 0,
        icon: getPetIconByName(todays.Pet)
      };
      petsToShow = [bountyPetObj].concat(petsToShow);
      const existingControls = left.querySelector('.controls');
      try {
        const controlsReplacement = createEggSettings({ name: egg.name, Pets: petsToShow }, canSpawnAsRift);
        if (existingControls && existingControls.parentNode) {
          existingControls.parentNode.replaceChild(controlsReplacement, existingControls);
        } else {
          left.appendChild(controlsReplacement);
        }
      } catch (e) { }
    }
  } catch (e) { }

  const eggForTable = { ...egg, Pets: petsToShow };
  try {
    const bounties = await fetchBounties().catch(() => null);
    if (Array.isArray(bounties) && bounties.length) {
      const match = bounties.find(b => (b && b.Egg || '').trim().toLowerCase() === (egg.name || '').trim().toLowerCase());
      if (match) {
        let bountyBaseOdds = parseChanceString(match && match.Chance);
        const bountyKey = (match && match.Pet) ? match.Pet : null;
        try { const override = getBountyOverrideByName(bountyKey); if (override) bountyBaseOdds = override; } catch (e) {}
        const bountyPetObj = { name: (match && match.Pet ? match.Pet : 'Unknown') + ' (Bounty)', baseOdds: bountyBaseOdds || 0, icon: getPetIconByName(match ? match.Pet : '') };
        eggForTable.Pets = [bountyPetObj].concat(eggForTable.Pets || []);
        eggForTable.secretBountyRotation = true;
      }
    }
  } catch (e) {}
  middle.appendChild(createEggPetInfoCard(eggForTable, canSpawnAsRift));

  const right = document.createElement('div');
  right.className = 'egg-details-right';

  right.style.display = 'flex';
  right.style.flexDirection = 'column';
  right.style.alignItems = 'flex-start';
  right.style.flex = '1 1 0%';
  right.style.boxSizing = 'border-box';

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
      { id: "3", label: "Seven Seas", icon: "Images/Icons/Seven_Seas_Icon.webp" },
      { id: "c2025", label: "Christmas 2025", icon: "Images/Icons/Christmas_Icon.webp" }
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
  } else {
    left.appendChild(createEggSettings(egg, canSpawnAsRift));
  }

  const middle = document.createElement('div');
  middle.className = 'egg-details-middle';

  let petsToShow = egg.Pets ? egg.Pets.slice() : [];
  if (egg.name === "Infinity Egg") {
    await loadInfinityEggData();
    if (infinityEggData && infinityEggData[selectedInfinityWorld] && Array.isArray(infinityEggData[selectedInfinityWorld].Pets)) {
      petsToShow = infinityEggData[selectedInfinityWorld].Pets.slice();
    }
  }

  try {
    const bounties = await fetchBounties();
    const todayLabel = formatUTCDateToLabel(new Date());
    const todays = (bounties || []).find(b => b.Time === todayLabel) || null;
    if (todays && todays.Egg && todays.Egg === egg.name) {
      let bountyChance = parseChanceString(todays.Chance);
      try { const override = getBountyOverrideByName(todays && todays.Pet); if (override) bountyChance = override; } catch (e) {}
      const bountyPetObj = {
        name: (todays.Pet || 'Unknown') + ' (Bounty)',
        baseOdds: bountyChance || 0,
        icon: getPetIconByName(todays.Pet)
      };
      petsToShow = [bountyPetObj].concat(petsToShow);
      const existingControls = left.querySelector('.controls');
      try {
        const controlsReplacement = createEggSettings({ name: egg.name, Pets: petsToShow }, canSpawnAsRift);
        if (existingControls && existingControls.parentNode) {
          existingControls.parentNode.replaceChild(controlsReplacement, existingControls);
        } else {
          left.appendChild(controlsReplacement);
        }
      } catch (e) { }
    }
  } catch (e) { }

  const eggForTable = { ...egg, Pets: petsToShow };
  try {
    const bounties = await fetchBounties().catch(() => null);
    if (Array.isArray(bounties) && bounties.length) {
      const match = bounties.find(b => (b && b.Egg || '').trim().toLowerCase() === (egg.name || '').trim().toLowerCase());
      if (match) {
        let bountyBaseOdds = parseChanceString(match && match.Chance);
        const bountyKey = (match && match.Pet) ? match.Pet : null;
        try { const override = getBountyOverrideByName(bountyKey); if (override) bountyBaseOdds = override; } catch (e) {}
        const bountyPetObj = { name: (match && match.Pet ? match.Pet : 'Unknown') + ' (Bounty)', baseOdds: bountyBaseOdds || 0, icon: getPetIconByName(match ? match.Pet : '') };
        eggForTable.Pets = [bountyPetObj].concat(eggForTable.Pets || []);
        eggForTable.secretBountyRotation = true;
      }
    }
  } catch (e) {}
  middle.appendChild(createEggPetInfoCard(eggForTable, canSpawnAsRift));

  const right = document.createElement('div');
  right.className = 'egg-details-right';

  right.style.display = 'flex';
  right.style.flexDirection = 'column';
  right.style.alignItems = 'flex-start';
  right.style.flex = '1 1 0%';
  right.style.boxSizing = 'border-box';

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
      { id: "3", label: "Seven Seas", icon: "Images/Icons/Seven_Seas_Icon.webp" },
      { id: "c2025", label: "Christmas 2025", icon: "Images/Icons/Christmas_Icon.webp" }
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
  } else {
    left.appendChild(createEggSettings(egg, canSpawnAsRift));
  }

  const middle = document.createElement('div');
  middle.className = 'egg-details-middle';

  let petsToShow = egg.Pets ? egg.Pets.slice() : [];
  if (egg.name === "Infinity Egg") {
    await loadInfinityEggData();
    if (infinityEggData && infinityEggData[selectedInfinityWorld] && Array.isArray(infinityEggData[selectedInfinityWorld].Pets)) {
      petsToShow = infinityEggData[selectedInfinityWorld].Pets.slice();
    }
  }

  try {
    const bounties = await fetchBounties();
    const todayLabel = formatUTCDateToLabel(new Date());
    const todays = (bounties || []).find(b => b.Time === todayLabel) || null;
    if (todays && todays.Egg && todays.Egg === egg.name) {
      let bountyChance = parseChanceString(todays.Chance);
      try { const override = getBountyOverrideByName(todays && todays.Pet); if (override) bountyChance = override; } catch (e) {}
      const bountyPetObj = {
        name: (todays.Pet || 'Unknown') + ' (Bounty)',
        baseOdds: bountyChance || 0,
        icon: getPetIconByName(todays.Pet)
      };
      petsToShow = [bountyPetObj].concat(petsToShow);
      const existingControls = left.querySelector('.controls');
      try {
        const controlsReplacement = createEggSettings({ name: egg.name, Pets: petsToShow }, canSpawnAsRift);
        if (existingControls && existingControls.parentNode) {
          existingControls.parentNode.replaceChild(controlsReplacement, existingControls);
        } else {
          left.appendChild(controlsReplacement);
        }
      } catch (e) { }
    }
  } catch (e) { }

  const eggForTable = { ...egg, Pets: petsToShow };
  middle.appendChild(createEggPetInfoCard(eggForTable, canSpawnAsRift));

  const right = document.createElement('div');
  right.className = 'egg-details-right';

  right.style.display = 'flex';
  right.style.flexDirection = 'column';
  right.style.alignItems = 'flex-start';
  right.style.flex = '1 1 0%';
  right.style.boxSizing = 'border-box';

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
          <option value="other">Other</option>
        </select>
  <div class="multiplier-other-wrap" style="display:none;margin:6px 0 12px 0;width:100%;">
          <input type="number" class="multiplier-other" placeholder="2" min="0" step="0.01" style="width:100%;display:block;box-sizing:border-box;margin-bottom:0;" />
        </div>
      `;
    } else {
      controlsHtml += `
        <label>Rift:</label>
        <select class="multiplier">
          <option value="0">No</option>
          <option value="5">x5</option>
          <option value="10">x10</option>
          <option value="15">x15</option>
          <option value="20">x20</option>
          <option value="25">x25</option>
          <option value="100000">x100K</option>
          <option value="1000000">x1M</option>
          <option value="other">Other</option>
        </select>
  <div class="multiplier-other-wrap" style="display:none;margin:6px 0 12px 0;width:100%;">
          <input type="number" class="multiplier-other" placeholder="2" min="0" step="0.01" style="width:100%;display:block;box-sizing:border-box;margin-bottom:0;" />
        </div>
      `;
    }
  }
    controlsHtml += `
    <label>Luck Multiplier (%):</label>
    <input type="number" class="luck" value="0" />
  `;

  if (egg && egg.world === 'limitedH') {
    controlsHtml += `
      <div style="margin-top:8px;display:flex;gap:8px;align-items:center;">
        <img src="Images/Pets/OG_Radiance.webp" alt="OG Radiance" style="width:28px;height:28px;object-fit:contain;border-radius:6px;margin-right:6px;" />
        <button type="button" class="og-radiance-btn" data-selected="false" style="border-radius:999px;padding:8px 12px;border:1px solid var(--table-border);background:var(--controls-bg);cursor:pointer;font-family:inherit;color:var(--main-text);min-width:86px;">OG Radiance</button>
      </div>
    `;
  }
  const hasSecret = (egg.Pets && egg.Pets.some(pet => /(Secret|Infinity|Bounty)/i.test(pet.name))) || egg.name === "Infinity Egg";

  const hasSecretForced = !!egg.secretBountyRotation;
  const hasSecretFinal = hasSecret || hasSecretForced;
  if (hasSecretFinal) {
    controlsHtml += `
      <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-top:4px;width:100%;">
        <label style="margin-bottom:0;">Secret Multiplier (x):</label>
        <input type="number" class="secret-mult" value="1" min="1" step="0.01" style="width:70px;margin-bottom:0;" />
      </div>
    `;
  }
  controlsHtml += `
    <div style="margin-top:8px;position:relative;">
      <button type="button" class="variants-toggle" aria-expanded="false"
        style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 12px;border-radius:10px;border:1px solid var(--table-border);background:var(--controls-bg);cursor:pointer;font-family:inherit;color:var(--main-text);width:100%;">
        <span style="font-weight:600;">Variants</span>
        <span class="variants-arrow" style="display:inline-block;margin-left:6px;transition:transform 200ms ease;">▾</span>
      </button>

      <div class="variants-panel" style="display:none;margin-top:8px;flex-direction:column;gap:10px;font-family:inherit;color:var(--main-text);width:100%;padding:10px;border-radius:8px;border:1px solid var(--table-border);background:var(--controls-bg);box-sizing:border-box;overflow:hidden;opacity:0;transition:max-height 260ms ease, opacity 220ms ease;">
        <div class="variant-row" style="display:flex;align-items:center;gap:10px;flex-wrap:nowrap;">
          <button type="button" class="variant-btn shiny-btn" data-selected="false"
            style="border-radius:999px;padding:8px 12px;border:1px solid var(--table-border);background:var(--controls-bg);cursor:pointer;font-family:inherit;color:var(--main-text);min-width:72px;">
            Shiny
          </button>
          <input type="text" class="variant-input shiny-input" placeholder="1 in 40" value="1 in 40"
            style="width:160px;font-family:inherit;color:var(--main-text);background:transparent;border:1px solid rgba(255,255,255,0.04);padding:6px 8px;border-radius:8px;box-sizing:border-box;" />
        </div>

        <div class="variant-row" style="display:flex;align-items:center;gap:10px;flex-wrap:nowrap;">
          <button type="button" class="variant-btn mythic-btn" data-selected="false"
            style="border-radius:999px;padding:8px 12px;border:1px solid var(--table-border);background:var(--controls-bg);cursor:pointer;font-family:inherit;color:var(--main-text);min-width:72px;">
            Mythic
          </button>
          <input type="text" class="variant-input mythic-input" placeholder="1 in 100" value="1 in 100"
            style="width:160px;font-family:inherit;color:var(--main-text);background:transparent;border:1px solid rgba(255,255,255,0.04);padding:6px 8px;border-radius:8px;box-sizing:border-box;" />
        </div>

         <div style="font-size:0.82rem;color:var(--main-text);opacity:0.85;">Examples: "13" or "1 in 13"</div>
       </div>
     </div>
   `;
  
  const isChristmasEgg = !!(egg && egg.world && egg.world.toLowerCase() === 'limited1');
  if (isChristmasEgg) {
    controlsHtml += `
      <details class="christmas-settings" open style="margin-top:12px;border-radius:8px;border:1px solid var(--table-border);padding:10px;background:var(--controls-bg);">
        <summary style="font-weight:700;cursor:pointer;margin-bottom:8px;">Christmas settings</summary>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:8px;">
          <label style="min-width:110px;">Festive Potion:</label>
          <select class="festive-select" style="display:none;min-width:160px;">
            <option value="none">None</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
          </select>
          <div style="position:relative;display:inline-block;">
            <button class="festive-dropdown-btn" type="button" style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:10px;border:1px solid var(--table-border);background:var(--controls-bg);cursor:pointer;color:var(--main-text);">
              <img class="festive-icon" src="Images/Icons/Festive_Potion_NONE.webp" alt="Festive Potion Icon" onerror="this.src='Images/Icons/Placeholder.webp'" style="width:20px;height:20px;object-fit:contain;border-radius:6px;" />
              <span class="festive-label">None</span>
              <span style="margin-left:8px;opacity:0.7;">▾</span>
            </button>
            <div class="festive-panel" style="display:none;position:absolute;left:0;top:calc(100% + 6px);z-index:40;border-radius:8px;padding:8px;min-width:180px;background:var(--controls-bg);border:1px solid var(--table-border);box-shadow:0 8px 30px rgba(0,0,0,0.12);">
              <div style="display:flex;flex-direction:column;gap:6px;">
                    <button type="button" class="festive-option" data-val="none" style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:8px;background:transparent;border:none;color:var(--main-text);cursor:pointer;">
                  <img src="Images/Icons/Festive_Potion_NONE.webp" width="26" height="26" onerror="this.src='Images/Icons/Placeholder.webp'" style="object-fit:contain;border-radius:6px;" />
                  <span>None</span>
                </button>
                <button type="button" class="festive-option" data-val="I" style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:8px;background:transparent;border:none;color:var(--main-text);cursor:pointer;">
                  <img src="Images/Icons/Festive_Potion_I.webp" width="26" height="26" onerror="this.src='Images/Icons/Placeholder.webp'" style="object-fit:contain;border-radius:6px;" />
                  <span>I</span>
                </button>
                <button type="button" class="festive-option" data-val="II" style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:8px;background:transparent;border:none;color:var(--main-text);cursor:pointer;">
                  <img src="Images/Icons/Festive_Potion_II.webp" width="26" height="26" onerror="this.src='Images/Icons/Placeholder.webp'" style="object-fit:contain;border-radius:6px;" />
                  <span>II</span>
                </button>
                <button type="button" class="festive-option" data-val="III" style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:8px;background:transparent;border:none;color:var(--main-text);cursor:pointer;">
                  <img src="Images/Icons/Festive_Potion_III.webp" width="26" height="26" onerror="this.src='Images/Icons/Placeholder.webp'" style="object-fit:contain;border-radius:6px;" />
                  <span>III</span>
                </button>
                <button type="button" class="festive-option" data-val="IV" style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:8px;background:transparent;border:none;color:var(--main-text);cursor:pointer;">
                  <img src="Images/Icons/Festive_Potion_IV.webp" width="26" height="26" onerror="this.src='Images/Icons/Placeholder.webp'" style="object-fit:contain;border-radius:6px;" />
                  <span>IV</span>
                </button>
              </div>
            </div>
          </div>
          <button type="button" class="festive-infinity-btn" data-selected="false" title="Infinity Festive Elixir" style="border-radius:999px;padding:8px 12px;border:1px solid var(--table-border);background:var(--controls-bg);cursor:pointer;font-family:inherit;color:var(--main-text);min-width:110px;display:flex;align-items:center;gap:8px;">
            <img class="festive-inf-icon" src="Images/Icons/Festive_Infinity_Elixir.webp" width="20" height="20" onerror="this.src='Images/Icons/Placeholder.webp'" style="object-fit:contain;border-radius:6px;" />
            <span>Infinity Festive Elixir</span>
          </button>
        </div>
        <div style="display:flex;gap:8px;align-items:center;margin-top:8px;">
          <label style="min-width:110px;">Christmas Mastery:</label>
          <input type="number" class="christmas-mastery" value="0" min="0" max="14" step="1" style="width:80px;" />
        </div>
        
      </details>
    `;
  }
  controls.innerHTML = controlsHtml;
  try {
    const STORAGE_KEY = 'luck_settings';
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}; } catch (e) { saved = {}; }

    const luckEl = controls.querySelector('.luck');
    const secretEl = controls.querySelector('.secret-mult');
    const shinyBtn = controls.querySelector('.shiny-btn');
    const mythicBtn = controls.querySelector('.mythic-btn');
    const shinyInput = controls.querySelector('.shiny-input');
    const mythicInput = controls.querySelector('.mythic-input');

    function readSettingsFromDOM() {
      return {
        luck: luckEl ? (luckEl.value === '' ? 0 : Number(luckEl.value)) : 0,
        secretMult: secretEl ? (secretEl.value === '' ? 1 : Number(secretEl.value)) : 1,
        festive: {
          selected: (controls.querySelector('.festive-select') ? (controls.querySelector('.festive-select').value || 'none') : 'none'),
          infinity: (controls.querySelector('.festive-infinity-btn') ? (controls.querySelector('.festive-infinity-btn').dataset.selected === 'true') : false)
        },
        mastery: {
          level: (controls.querySelector('.christmas-mastery') ? Number(controls.querySelector('.christmas-mastery').value || 0) : 0)
        },
        variants: {
          shiny: {
            selected: !!(shinyBtn && shinyBtn.dataset && shinyBtn.dataset.selected === 'true'),
            odds: shinyInput ? String(shinyInput.value || '') : '',
            userModified: shinyInput ? (shinyInput.dataset.userModified === 'true') : false
          },
          mythic: {
            selected: !!(mythicBtn && mythicBtn.dataset && mythicBtn.dataset.selected === 'true'),
            odds: mythicInput ? String(mythicInput.value || '') : '',
            userModified: mythicInput ? (mythicInput.dataset.userModified === 'true') : false
    }
    }
      };
    }

    function saveSettings() {
      try {
        const toSave = readSettingsFromDOM();
        
        if (toSave.mastery && typeof toSave.mastery.level !== 'undefined') {
          let v = parseInt(toSave.mastery.level || 0) || 0; if (v < 0) v = 0; if (v > 14) v = 14; toSave.mastery.level = v;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
      } catch (e) {}
    }


    if (typeof saved === 'object') {
      if (luckEl && typeof saved.luck !== 'undefined') luckEl.value = saved.luck;
      if (secretEl && typeof saved.secretMult !== 'undefined') secretEl.value = saved.secretMult;
      if (controls.querySelector('.festive-select') && saved.festive && typeof saved.festive.selected !== 'undefined') {
        const sel = saved.festive.selected || 'none';
        controls.querySelector('.festive-select').value = sel;
        const icon = controls.querySelector('.festive-icon');
        if (icon) { icon.onerror = () => icon.src = 'Images/Icons/Placeholder.webp'; icon.src = `Images/Icons/${sel === 'none' ? 'Festive_Potion_NONE' : `Festive_Potion_${sel}`}.webp`; }
        const dropBtn = controls.querySelector('.festive-dropdown-btn');
        if (dropBtn) {
          const label = dropBtn.querySelector('.festive-label'); if (label) label.textContent = sel === 'none' ? 'None' : sel;
        }
        
        const panelOptions = controls.querySelectorAll('.festive-option');
        if (panelOptions && panelOptions.forEach) {
          panelOptions.forEach(o => { if (o.dataset && o.dataset.val) { if (o.dataset.val === sel) o.style.background = 'rgba(255,255,255,0.04)'; else o.style.background = 'transparent'; } });
        }
      }
      if (controls.querySelector('.festive-infinity-btn') && saved.festive && typeof saved.festive.infinity !== 'undefined') {
        const b = controls.querySelector('.festive-infinity-btn');
        b.dataset.selected = saved.festive.infinity ? 'true' : 'false';
        if (b.dataset.selected === 'true') { b.style.background = '#2596be'; b.style.color = '#ffffff'; } else { b.style.background = 'var(--controls-bg)'; b.style.color = 'var(--main-text)'; }
      }
      if (controls.querySelector('.christmas-mastery') && saved.mastery && typeof saved.mastery.level !== 'undefined') controls.querySelector('.christmas-mastery').value = saved.mastery.level;
      
  if (shinyInput && saved.variants && saved.variants.shiny && typeof saved.variants.shiny.odds !== 'undefined') {
    shinyInput.value = saved.variants.shiny.odds;
    shinyInput.dataset.userModified = saved.variants.shiny.userModified === true || String(saved.variants.shiny.userModified) === 'true' ? 'true' : 'false';
  }
  if (mythicInput && saved.variants && saved.variants.mythic && typeof saved.variants.mythic.odds !== 'undefined') {
    mythicInput.value = saved.variants.mythic.odds;
    mythicInput.dataset.userModified = saved.variants.mythic.userModified === true || String(saved.variants.mythic.userModified) === 'true' ? 'true' : 'false';
  }
  if (shinyBtn && saved.variants && saved.variants.shiny && saved.variants.shiny.selected) shinyBtn.dataset.selected = 'true';
  if (mythicBtn && saved.variants && saved.variants.mythic && saved.variants.mythic.selected) mythicBtn.dataset.selected = 'true';
    }

    if (luckEl) luckEl.addEventListener('input', saveSettings);
    if (secretEl) secretEl.addEventListener('input', saveSettings);
    if (shinyInput) shinyInput.addEventListener('input', saveSettings);
    if (mythicInput) mythicInput.addEventListener('input', saveSettings);
    if (shinyBtn) shinyBtn.addEventListener('click', () => { setTimeout(saveSettings, 0); });
    if (mythicBtn) mythicBtn.addEventListener('click', () => { setTimeout(saveSettings, 0); });
    const festiveSelectEl = controls.querySelector('.festive-select');
    const festiveDropdownBtn = controls.querySelector('.festive-dropdown-btn');
    const festivePanel = controls.querySelector('.festive-panel');
    const festiveOptions = controls.querySelectorAll('.festive-option');
    const festiveInfinityBtnEl = controls.querySelector('.festive-infinity-btn');
    const masteryInputEl = controls.querySelector('.christmas-mastery');
    if (festiveSelectEl) festiveSelectEl.addEventListener('change', () => { 
      const icon = controls.querySelector('.festive-icon');
      const v = festiveSelectEl.value || 'none';
      const fileName = v === 'none' ? 'Festive_Potion_NONE' : `Festive_Potion_${v}`;
      if (icon) { icon.onerror = () => icon.src = 'Images/Icons/Placeholder.webp'; icon.src = `Images/Icons/${fileName}.webp`; }
      saveSettings(); if (controls) controls.dispatchEvent(new Event('luckSettingsChanged')); document.dispatchEvent(new Event('luckSettingsChanged'));
      
      if (festiveDropdownBtn) {
        const label = festiveDropdownBtn.querySelector('.festive-label');
        if (label) label.textContent = v === 'none' ? 'None' : v;
      }
      
      festiveOptions.forEach(o => { if (o.dataset && o.dataset.val) { if (o.dataset.val === v) o.style.background = 'rgba(255,255,255,0.04)'; else o.style.background = 'transparent'; } });
    });
    if (festiveInfinityBtnEl) {
      festiveInfinityBtnEl.addEventListener('click', () => {
        const sel = festiveInfinityBtnEl.dataset.selected === 'true' ? 'false' : 'true';
        festiveInfinityBtnEl.dataset.selected = sel;
        if (sel === 'true') { festiveInfinityBtnEl.style.background = '#2596be'; festiveInfinityBtnEl.style.color = '#ffffff'; }
        else { festiveInfinityBtnEl.style.background = 'var(--controls-bg)'; festiveInfinityBtnEl.style.color = 'var(--main-text)'; }
          saveSettings(); if (controls) controls.dispatchEvent(new Event('luckSettingsChanged')); document.dispatchEvent(new Event('luckSettingsChanged'));
      });
    }

    
    if (festiveDropdownBtn && festivePanel) {
      festiveDropdownBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const open = festivePanel.style.display === 'block';
        
        document.querySelectorAll('.festive-panel').forEach(p => p.style.display = 'none');
        festivePanel.style.display = open ? 'none' : 'block';
      });
      
      document.addEventListener('click', () => { if (festivePanel) festivePanel.style.display = 'none'; });
    }
    if (festiveOptions && festiveOptions.forEach) {
      festiveOptions.forEach(opt => {
        opt.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const v = opt.dataset.val || 'none';
          if (festiveSelectEl) {
            festiveSelectEl.value = v;
            festiveSelectEl.dispatchEvent(new Event('change'));
          }
          if (festivePanel) festivePanel.style.display = 'none';
        });
      });
    }
    if (masteryInputEl) {
      masteryInputEl.addEventListener('input', () => {
        let v = parseInt(masteryInputEl.value || '0') || 0;
        if (v < 0) v = 0;
        if (v > 14) v = 14;
        masteryInputEl.value = v;
        const info = MASTERY_MAP[v] || MASTERY_MAP[0];
        
        saveSettings(); if (controls) controls.dispatchEvent(new Event('luckSettingsChanged')); document.dispatchEvent(new Event('luckSettingsChanged'));
        if (window && window._BGSI_DEBUG) console.debug('masteryInput changed', v);
      });
      masteryInputEl.addEventListener('change', () => { if (controls) controls.dispatchEvent(new Event('luckSettingsChanged')); document.dispatchEvent(new Event('luckSettingsChanged')); });
      const vInit = Math.max(0, Math.min(14, parseInt(masteryInputEl.value || '0') || 0));
      const infoInit = MASTERY_MAP[vInit] || MASTERY_MAP[0];
      
    }

  } catch (e) {}
  return controls;
}

function createEggPetInfoCard(egg, canSpawnAsRift) {
  const card = document.createElement("div");
  card.className = "egg-card";
  card.setAttribute("data-world", egg.world || "");
  card.style.boxSizing = 'border-box';
  card.style.padding = '12px';
  card.style.width = '100%';
  card.style.height = 'auto';
  card.style.minHeight = '0';

  const table = document.createElement("table");
  table.style.width = '100%';
  table.style.maxWidth = '100%';
  table.style.overflowX = 'auto';
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

   Array.from(table.querySelectorAll('th')).forEach((th, i) => {
     th.style.padding = '8px 12px';
     th.style.textAlign = i === 0 ? 'left' : 'center';
     th.style.fontWeight = '600';
     th.style.whiteSpace = 'nowrap';
   });
   const cellBaseStyle = {
     padding: '8px 12px',
     whiteSpace: 'nowrap',
     overflow: 'hidden',
     textOverflow: 'ellipsis',
     verticalAlign: 'middle'
   };

   setTimeout(() => {
     const layout = document.querySelector('.egg-details-layout');
     const controls = layout ? (
       layout.querySelector('.egg-details-left .controls') ||
       layout.querySelector('.egg-details-middle .controls') ||
       layout.querySelector('.egg-details-right .controls')
     ) : null;
    const multiplierSelect = controls ? controls.querySelector(".multiplier") : null;
  const ogRadianceBtn = controls ? controls.querySelector('.og-radiance-btn') : null;
    const multiplierOtherWrap = controls ? controls.querySelector(".multiplier-other-wrap") : null;
    const multiplierOtherInput = controls ? controls.querySelector(".multiplier-other") : null;
    const luckInput = controls ? controls.querySelector(".luck") : null;
    const secretInput = controls ? controls.querySelector(".secret-mult") : null;
    const variantsToggle = controls ? controls.querySelector('.variants-toggle') : null;
    const variantsPanel = controls ? controls.querySelector('.variants-panel') : null;
    const shinyBtn = controls ? controls.querySelector('.shiny-btn') : null;
    const mythicBtn = controls ? controls.querySelector('.mythic-btn') : null;
    const shinyInput = controls ? controls.querySelector('.shiny-input') : null;
    const mythicInput = controls ? controls.querySelector('.mythic-input') : null;
     const petList = table.querySelector(".pet-list");

    function parseOneInInput(str) {
      if (!str && str !== 0) return null;
      const s = String(str).trim().replace(/[,]/g, '');
      let m = s.match(/(?:1\s*\/\s*|1\s*in\s*)(\d+)/i);
      if (m && m[1]) return Math.max(1, Math.round(Number(m[1])));
      const n = Number(s);
      if (isFinite(n) && n > 0) return Math.max(1, Math.round(n));
      return null;
    }

    function parseRiftInput(str) {
      if (str === null || str === undefined) return null;
      const s = String(str).trim().toLowerCase().replace(/\s+/g, '');
      if (s === '') return null;
      const m = s.match(/^x?(\d+(\.\d+)?)x?$/i);
      if (m && m[1]) return parseFloat(m[1]);
      const n = Number(s.replace(/x/gi, ''));
      if (isFinite(n)) return n;
      return null;
    }

    const variantButtonStyles = {
      shiny: {
        selected: {
          background: '#c28e20',
          color: '#ffffff',
          boxShadow: '0 0 14px #ffe047, 0 6px 20px rgba(0,0,0,0.12)'
        },
        unselected: {
          background: 'var(--controls-bg)',
          color: 'var(--main-text)',
          boxShadow: 'none'
        }
      },
      mythic: {
        selected: {
          background: '#3602b0',
          color: '#ffffff',
          boxShadow: '0 0 16px rgba(123,78,255,0.95), 0 8px 24px rgba(54,2,176,0.35)'
        },
        unselected: {
          background: 'var(--controls-bg)',
          color: 'var(--main-text)',
          boxShadow: 'none'
        }
      }
    };

    function applyVariantButtonStyles() {
      if (shinyBtn) {
        const sel = shinyBtn.dataset.selected === 'true';
        if (sel) {
          Object.assign(shinyBtn.style, variantButtonStyles.shiny.selected);
        } else {
          Object.assign(shinyBtn.style, variantButtonStyles.shiny.unselected);
        }
      }
      if (mythicBtn) {
        const sel = mythicBtn.dataset.selected === 'true';
        if (sel) {
          Object.assign(mythicBtn.style, variantButtonStyles.mythic.selected);
        } else {
          Object.assign(mythicBtn.style, variantButtonStyles.mythic.unselected);
        }
      }
    }

    if (shinyBtn) {
      shinyBtn.type = 'button';
      shinyBtn.dataset.selected = 'false';
      shinyBtn.style.cursor = 'pointer';
      shinyBtn.addEventListener('click', (e) => {
        shinyBtn.dataset.selected = shinyBtn.dataset.selected === 'true' ? 'false' : 'true';
        applyVariantButtonStyles();
        updateChances();
      });
    }
    if (mythicBtn) {
      mythicBtn.type = 'button';
      mythicBtn.dataset.selected = 'false';
      mythicBtn.style.cursor = 'pointer';
      mythicBtn.addEventListener('click', (e) => {
        mythicBtn.dataset.selected = mythicBtn.dataset.selected === 'true' ? 'false' : 'true';
        applyVariantButtonStyles();
        updateChances();
      });
    }

    function applyOgRadianceStyle() {
      if (!ogRadianceBtn) return;
      const sel = ogRadianceBtn.dataset.selected === 'true';
      if (sel) {
        Object.assign(ogRadianceBtn.style, { background: '#ffff61', color: '#000000', boxShadow: '0 0 14px rgba(255,255,97,0.9)' });
      } else {
        Object.assign(ogRadianceBtn.style, { background: 'var(--controls-bg)', color: 'var(--main-text)', boxShadow: 'none' });
      }
    }
    if (ogRadianceBtn) {
      ogRadianceBtn.type = 'button';
      if (typeof ogRadianceBtn.dataset.selected === 'undefined') ogRadianceBtn.dataset.selected = 'false';
      ogRadianceBtn.style.cursor = 'pointer';
      ogRadianceBtn.addEventListener('click', () => {
        ogRadianceBtn.dataset.selected = ogRadianceBtn.dataset.selected === 'true' ? 'false' : 'true';
        applyOgRadianceStyle();
        updateChances();
      });
      applyOgRadianceStyle();
    }
    if (shinyInput) {
      shinyInput.addEventListener('input', () => { applyVariantButtonStyles(); updateChances(); });
      shinyInput.addEventListener('input', () => { shinyInput.dataset.userModified = 'true'; saveSettings(); });
      if (!shinyInput.value) { shinyInput.value = '1 in 40'; shinyInput.dataset.userModified = 'false'; }
    }
    if (mythicInput) {
      mythicInput.addEventListener('input', () => { applyVariantButtonStyles(); updateChances(); });
      mythicInput.addEventListener('input', () => { mythicInput.dataset.userModified = 'true'; saveSettings(); });
      if (!mythicInput.value) { mythicInput.value = '1 in 100'; mythicInput.dataset.userModified = 'false'; }
    }
     applyVariantButtonStyles();
    if (multiplierSelect) {
      const handleMultiplierChange = () => {
        if (multiplierSelect.value === 'other') {
          if (multiplierOtherWrap) multiplierOtherWrap.style.display = 'flex';
        } else {
          if (multiplierOtherWrap) multiplierOtherWrap.style.display = 'none';
        }
        updateChances();
      };
      multiplierSelect.addEventListener('change', handleMultiplierChange);
      try { handleMultiplierChange(); } catch (e) {}
    }
    if (multiplierOtherInput) {
      multiplierOtherInput.addEventListener('input', updateChances);
    }

    
     applyVariantButtonStyles();

     function normalizeName(n) {
       return (n || '').replace(/\(.*?\)/g, '').trim().toLowerCase();
     }

     function formatAdjustedPercent(adjustedChance) {
      if (!isFinite(adjustedChance) || adjustedChance <= 0) return "Unknown";
      const percent = adjustedChance * 100;
      if (percent >= 0.0001) {
        return percent.toLocaleString(undefined, { maximumFractionDigits: 6 });
      }
      const abs = Math.abs(percent);
      const digitsNeeded = Math.min(12, Math.max(4, Math.ceil(-Math.log10(abs)) + 3));
      const fixed = percent.toFixed(digitsNeeded);
      const trimmed = fixed.replace(/\.?0+$/, '');
      if (trimmed.length > 18) return percent.toExponential(3);
      return trimmed;
     }

     function applySelectionGlow() {
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
       let multiplierValue = 0;
       if (multiplierSelect) {
         if (multiplierSelect.value === 'other') {
           const parsed = parseRiftInput(multiplierOtherInput ? multiplierOtherInput.value : '');
           multiplierValue = (isFinite(parsed) && parsed !== null) ? Number(parsed) : 0;
         } else {
           multiplierValue = parseFloat(multiplierSelect.value) || 0;
         }
       }
       const riftBonusPercent = multiplierValue * 100;
      const luckPercent = luckInput ? (luckInput.value === "" ? 0 : parseFloat(luckInput.value)) : 0;

      
      const festiveSelectEl = (controls ? controls.querySelector('.festive-select') : null) || document.querySelector('.festive-select');
      const festiveInfinityBtnEl = (controls ? controls.querySelector('.festive-infinity-btn') : null) || document.querySelector('.festive-infinity-btn');
      const masteryInputEl = (controls ? controls.querySelector('.christmas-mastery') : null) || document.querySelector('.christmas-mastery');
      
      const masteryModeEl = null;
      const festiveSelected = festiveSelectEl ? (festiveSelectEl.value || 'none') : 'none';
      const festiveInfinity = festiveInfinityBtnEl ? (festiveInfinityBtnEl.dataset.selected === 'true') : false;
      const festiveIsSelected = (festiveSelected && FESTIVE_POTION_MAP[festiveSelected]);
      let totalLuckPercent = luckPercent;
      
      if (festiveIsSelected) {
        const fest = FESTIVE_POTION_MAP[festiveSelected];
        const mult = festiveInfinity ? 1.5 : 1;
        totalLuckPercent += Math.round(fest.luck * mult);
      }
      
      let masteryLevel = masteryInputEl ? (parseInt(masteryInputEl.value || '0') || 0) : 0;
      if (!masteryInputEl) {
        try {
          const saved = JSON.parse(localStorage.getItem('luck_settings') || '{}') || {};
          if (saved && saved.mastery && typeof saved.mastery.level !== 'undefined') masteryLevel = parseInt(saved.mastery.level || 0) || 0;
        } catch (e) {}
      }
      if (masteryLevel < 0) masteryLevel = 0; if (masteryLevel > 14) masteryLevel = 14;
      const masteryInfo = MASTERY_MAP[masteryLevel] || MASTERY_MAP[0];
      let masteryAdded = masteryInfo && masteryInfo.luck ? masteryInfo.luck : 0;
      let masterySecretPercent = masteryInfo && masteryInfo.secretLuck ? masteryInfo.secretLuck : 0;
      let masteryInfinityPercent = masteryInfo && masteryInfo.infinityLuck ? masteryInfo.infinityLuck : 0;
      
      const totalLuckBefore = totalLuckPercent;
      if (masteryAdded) {
        totalLuckPercent += masteryAdded;
        if (window && window._BGSI_DEBUG) console.debug('mastery applied: +'+ masteryAdded, ' totalLuck:', totalLuckBefore, '->', totalLuckPercent);
      }
      try {
      } catch (e) {}
      const secretTimes = secretInput ? (secretInput.value === "" ? 1 : Math.max(1, parseFloat(secretInput.value))) : 1;
      const extraSecretPercent = 0;
      const effectiveLuckPercent = totalLuckPercent + riftBonusPercent;
      if (window && window._BGSI_DEBUG) {
        try { console.debug('updateChances: controls element', controls); } catch (e) {}
        try {
          console.debug('updateChances:', { luckPercent, totalLuckPercent, riftBonusPercent, effectiveLuckPercent, masterLevel: masteryLevel, masteryAdded, masterySecretPercent, masteryInfinityPercent, festiveSelected, festiveIsSelected, festiveInfinity });
        } catch (e) { console.debug('updateChances: debug logging failed', e); }
      }
       petList.innerHTML = "";

       const petsToIterate = (egg.Pets || []).slice();
       if (ogRadianceBtn && ogRadianceBtn.dataset.selected === 'true') {
         petsToIterate.push({ name: 'OG Radiance (Secret)', icon: 'Images/Pets/OG_Radiance.webp', baseOdds: 50000000000 });
       }
       petsToIterate.forEach(pet => {
         const isInfinity = /Infinity/i.test(pet.name);
         const isSecretName = /Secret/i.test(pet.name);
         const isSecret = isSecretName || isInfinity;
         const baseChance = pet.baseOdds && pet.baseOdds > 0 ? 1 / pet.baseOdds : 0;

         let effectiveForPet = effectiveLuckPercent;
        let combinedMultiplier = 1 + effectiveForPet / 100;
        
        if (isSecret) {
          const secretMultiplierFromUpgrades = 1 + (extraSecretPercent / 100);
          const masterySecretMul = 1 + (masterySecretPercent / 100);
          combinedMultiplier = combinedMultiplier * secretMultiplierFromUpgrades * masterySecretMul * secretTimes;
        }
        if (isInfinity) {
          const masteryInfMul = 1 + (masteryInfinityPercent / 100);
          combinedMultiplier = combinedMultiplier * masteryInfMul;
        }
         let variantFactor = 1;
        let shinyOdds = parseOneInInput(shinyInput ? shinyInput.value : null) || 40;
        let mythicOdds = parseOneInInput(mythicInput ? mythicInput.value : null) || 100;
        if (festiveSelected && FESTIVE_POTION_MAP[festiveSelected]) {
        
          const elixirDivisor = festiveInfinity ? 2 : 1;
          if (elixirDivisor > 1) {
            shinyOdds = Math.max(1, Math.round(shinyOdds / elixirDivisor));
            mythicOdds = Math.max(1, Math.round(mythicOdds / elixirDivisor));
          }
          
          if (shinyInput && shinyInput.dataset.userModified !== 'true') { shinyInput.value = `1 in ${shinyOdds}`; if (shinyInput.dataset.userModified !== 'false') { shinyInput.dataset.userModified = 'false'; saveSettings(); } }
          if (mythicInput && mythicInput.dataset.userModified !== 'true') { mythicInput.value = `1 in ${mythicOdds}`; if (mythicInput.dataset.userModified !== 'false') { mythicInput.dataset.userModified = 'false'; saveSettings(); } }
        }
         const shinySelected = shinyBtn && shinyBtn.dataset.selected === 'true';
         const mythicSelected = mythicBtn && mythicBtn.dataset.selected === 'true';

         

         if (shinySelected) {
           variantFactor *= (1 / shinyOdds);

         }
         if (mythicSelected) {
           variantFactor *= (1 / mythicOdds);
         }

         const adjustedChance = baseChance * combinedMultiplier * variantFactor;
         let adjustedOneInNum;
         if (!isFinite(adjustedChance) || adjustedChance <= 0) adjustedOneInNum = Infinity;
         else if (adjustedChance >= 1) adjustedOneInNum = 1;
         else adjustedOneInNum = Math.max(1, Math.round(1 / adjustedChance));
         const adjustedOneIn = adjustedOneInNum === Infinity ? '∞' : adjustedOneInNum;
         const adjustedOneInDisplay = adjustedOneIn === '∞' ? '∞' : adjustedOneIn.toLocaleString();

         const adjustedPercentFormatted = formatAdjustedPercent(adjustedChance);
         const adjustedPercentCell = adjustedPercentFormatted === "Unknown" ? "Unknown" : `${adjustedPercentFormatted}%`;

         const petIconPath = pet.icon || getPetIconByName(pet.name) || "Images/Pets/Doggy.webp";

         const row = document.createElement("tr");
         row.dataset.petName = pet.name;

         const tdPet = document.createElement("td");
         tdPet.className = "pet-name";
         tdPet.style.position = 'relative';

         const img = document.createElement('img');
         img.src = petIconPath;
         const prefixParts = [];
         if (shinySelected) prefixParts.push('Shiny');
         if (mythicSelected) prefixParts.push('Mythic');
         let iconSrc = petIconPath;
         if (prefixParts.length) {
           const m = petIconPath.match(/^(.*[\/\\])?([^\/\\]+?)(\.(webp|png|jpg|jpeg))$/i);
           if (m) {
             const dir = m[1] || '';
             const base = m[2] || '';
             const ext = m[3] || '';
             const nameNoPrefix = base.replace(/^(Shiny_|Mythic_|Shiny_Mythic_|Mythic_Shiny_)/i, '');
             const newName = prefixParts.join('_') + '_' + nameNoPrefix;
             iconSrc = dir + newName + ext;
           }
         }
         img.src = iconSrc;
         img.onerror = () => { if (img.src !== petIconPath) img.src = petIconPath; img.onerror = null; };
         img.alt = pet.name;
         img.style.width = '34px';
         img.style.height = '34px';
         img.style.objectFit = 'contain';
         img.style.borderRadius = '6px';
         img.style.marginRight = '8px';
         img.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
         img.style.transition = 'box-shadow 200ms ease';

         const nameSpan = document.createElement('span');
         const cleanName = (pet.name || '').replace(/\s+/g, ' ').trim();
         nameSpan.textContent = cleanName;
         nameSpan.style.display = 'inline-block';
         nameSpan.style.verticalAlign = 'middle';

         tdPet.appendChild(img);
         tdPet.appendChild(nameSpan);

         function createExpandableCell(text, align = 'center') {
          const td = document.createElement('td');
          Object.assign(td.style, cellBaseStyle);
          td.style.textAlign = align;
          const s = (text === null || text === undefined) ? '' : String(text);
          if (s.length <= 20) {
            td.textContent = s;
            td.style.textAlign = 'center';
            return td;
          }
          const placeholder = document.createElement('div');
          placeholder.textContent = '';
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
            placeholder.textContent = s;
            placeholder.style.whiteSpace = 'normal';
            placeholder.style.overflow = 'visible';
            placeholder.style.height = 'auto';
            placeholder.style.wordBreak = 'break-word';
            placeholder.style.textAlign = 'center';
            try { btn.remove(); } catch (e) { btn.style.display = 'none'; }
          });

          td.appendChild(placeholder);
          td.appendChild(btn);
          return td;
        }

  const FIXED_SHINY_MULT = 40;
  const FIXED_MYTHIC_MULT = 100;
  const shinySelectedForBase = shinyBtn && shinyBtn.dataset.selected === 'true';
  const mythicSelectedForBase = mythicBtn && mythicBtn.dataset.selected === 'true';
  const variantMultiplierForBase = (shinySelectedForBase ? FIXED_SHINY_MULT : 1) * (mythicSelectedForBase ? FIXED_MYTHIC_MULT : 1);
  const scaledBaseOneInRaw = pet.baseOdds && isFinite(Number(pet.baseOdds)) && Number(pet.baseOdds) > 0 ? Number(pet.baseOdds) * variantMultiplierForBase : NaN;
  const scaledBaseOneInDisplay = isFinite(scaledBaseOneInRaw) && scaledBaseOneInRaw > 0 ? scaledBaseOneInRaw.toLocaleString() : 'Unknown';
  const tdBaseCell = createExpandableCell(pet.baseOdds ? `1 in ${scaledBaseOneInDisplay}` : 'Unknown', 'center');

  const oneInLabel = adjustedOneIn === '∞' ? '∞' : `1 in ${adjustedOneInDisplay}`;
  const tdOneIn = createExpandableCell(oneInLabel, 'center');
  const tdPercent = createExpandableCell(adjustedPercentCell, 'center');

  row.appendChild(tdPet);
  row.appendChild(tdBaseCell);
  row.appendChild(tdOneIn);
  row.appendChild(tdPercent);

  petList.appendChild(row);
});

       applySelectionGlow();

       setupPetStatsHover();

       requestAnimationFrame(() => {
         try {
           const tableW = table.scrollWidth || table.getBoundingClientRect().width;
           const tableH = table.scrollHeight || table.getBoundingClientRect().height;
           const cs = getComputedStyle(card);
           const padLeft = parseFloat(cs.paddingLeft) || 0;
           const padRight = parseFloat(cs.paddingRight) || 0;
           const padTop = parseFloat(cs.paddingTop) || 0;
           const padBottom = parseFloat(cs.paddingBottom) || 0;
           const targetMinHeight = Math.ceil(tableH + padTop + padBottom + 12);
           card.style.minWidth = '0';
           card.style.width = '100%';
           card.style.maxWidth = '100%';
           card.style.minHeight = targetMinHeight + 'px';
           card.style.overflow = 'visible';
           card.style.display = 'block';
         } catch (e) { }
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

    
    if (controls) {
      controls.addEventListener('luckSettingsChanged', updateChances);
    }
    
    document.addEventListener('luckSettingsChanged', updateChances);
    

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
  const raw = await response.json();

  const source = Array.isArray(raw) ? raw : [];

  const LEVEL25_BONUS = 0.35;

  const TOTAL_AT_LVL25 = {
    Normal: LEVEL25_BONUS,
    Shiny: 0.85,
    Mythic: 1.05,
    "Shiny Mythic": 1.60
  };

  function computeVariantBonusForLevel1(totalAtLvl25) {
    return (1 + totalAtLvl25) / (1 + LEVEL25_BONUS) - 1;
  }

  const VARIANT_LEVEL1_BONUS = {
    Normal: 0,
    Shiny: computeVariantBonusForLevel1(TOTAL_AT_LVL25.Shiny),
    Mythic: computeVariantBonusForLevel1(TOTAL_AT_LVL25.Mythic),
    "Shiny Mythic": computeVariantBonusForLevel1(TOTAL_AT_LVL25["Shiny Mythic"])
  };

  function mulStats(stats, mul) {
    const out = {};
    Object.keys(stats || {}).forEach(k => {
      const v = stats[k];
      out[k] = (typeof v === 'number' && isFinite(v)) ? (v * mul) : v;
    });
    return out;
  }

  petsData = source.map(item => {
    const petName = item.pet_name || item.petName || item.name || '';

    const rawBase = {};
    if (item.bubbles !== undefined) rawBase.bubbles = Number(item.bubbles) || 0;
    if (item.gems !== undefined) rawBase.gems = Number(item.gems) || 0;
    if (item.currency !== undefined) {
      const cv = (item.currencyVariant || '').toLowerCase();
      if (cv === 'tickets') rawBase.tickets = Number(item.currency) || 0;
      else if (cv === 'pearls') rawBase.pearls = Number(item.currency) || 0;
      else if (cv === 'festival_coins' || cv === 'festival') rawBase.festival_coins = Number(item.currency) || 0;
      else if (cv === 'snowflakes') rawBase.snowflakes = Number(item.currency) || 0;
      else rawBase.coins = Number(item.currency) || 0;
    }

    let img = null;
    if (Array.isArray(item.image) && item.image.length) img = item.image[0];
    else if (typeof item.image === 'string' && item.image) img = item.image;
    if (!img && petName) img = `Images/Pets/${formatNameToPath(petName)}.webp`;

    const variants = Object.keys(VARIANT_LEVEL1_BONUS).map(variantName => {
      const variantBonus = VARIANT_LEVEL1_BONUS[variantName];
      const base = mulStats(rawBase, 1 + variantBonus);
      const max = mulStats(base, 1 + LEVEL25_BONUS);
      const v = {
        name: variantName,
        stats: {
          base,
          max
        }
      };
      if (img) v.image = img;
      return v;
    });

    return {
      pet_name: petName,
      variants
    };
  }).filter(Boolean);

  return petsData;
}


if (typeof window !== 'undefined') (async function() {
  window.eggsJson = await fetchEggsData();
  await fetchPetsData();

  (function tryOpenEggFromLocation() {
    function slugToName(slug) {
      if (!slug) return '';
      try { slug = decodeURIComponent(slug); } catch (e) {}
      return slug.replace(/_/g, ' ').replace(/-/g, ' ').trim();
    }

    const params = new URLSearchParams(location.search || '');
    let eggSlug = null;
    if (params.has('egg')) eggSlug = params.get('egg');
    if (!eggSlug && location.search && location.search.length > 1) {
      const raw = location.search.substring(1);
      if (!raw.includes('=')) {
        eggSlug = raw.split('&')[0];
      }
    }
    if (!eggSlug && location.hash) eggSlug = location.hash.replace(/^#\/?/, '');
    if (!eggSlug) {
      const segs = (location.pathname || '').split('/').filter(Boolean);
      if (segs.length > 0) {
        const last = segs[segs.length - 1];
        if (last && !/index\.(html?)$/i.test(last)) eggSlug = last;
      }
    }

    if (eggSlug) {
      const candidate = slugToName(eggSlug);
      const found = (eggs || []).find(e => e && e.name && e.name.toLowerCase() === candidate.toLowerCase())
                 || (window.eggsJson || []).find(e => e && e.name && e.name.toLowerCase() === candidate.toLowerCase());
      if (found) {
        selectedEgg = found.name;
      }
    }
  })();

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
    pearls: 'Images/Icons/Pearls.webp',
    snowflakes: 'Images/Icons/Snowflakes.webp'
  };

  function getStatIcon(stat) {
    if (stat === 'bubbles') return statIcons.bubbles;
    if (stat === 'gems') return statIcons.gems;
    if (stat === 'coins') return statIcons.coins;
    if (stat === 'tickets') return statIcons.tickets;
    if (stat === 'festival_coins') return statIcons.festival_coins;
    if (stat === 'pearls') return statIcons.pearls;
    if (stat === 'snowflakes') return statIcons.snowflakes;
    return '';
  }

  function buildStatsRows(stats) {
    const statOrder = ['bubbles', 'gems', 'coins', 'tickets', 'festival_coins', 'pearls', 'snowflakes'];
    const formatStatValue = (v) => {
      if (v === undefined || v === null) return '';
      if (typeof v === 'number' && isFinite(v)) {
        return String(Math.round(v));
      }
      return String(v).replace(/,/g, '');
    };

    let html = '';
    for (const stat of statOrder) {
      const val = stats && stats[stat];
      if (val === undefined || val === null) continue;
      if (stat === 'gems' && Number(val) === 0) continue;
      html += `<div class="pet-stats-row">
        <img src="${getStatIcon(stat)}" alt="${stat}" class="pet-stats-icon">
        <span class="pet-stats-value">x${formatStatValue(val)}</span>
      </div>`;
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

    let variantName = 'Normal';
    const layoutEl = document.querySelector('.egg-details-layout');
    if (layoutEl) {
      const controls = layoutEl.querySelector('.controls');
      const shinyBtn = controls ? controls.querySelector('.shiny-btn') : null;
      const mythicBtn = controls ? controls.querySelector('.mythic-btn') : null;
      const shinySelected = shinyBtn && shinyBtn.dataset.selected === 'true';
      const mythicSelected = mythicBtn && mythicBtn.dataset.selected === 'true';
      if (shinySelected && mythicSelected) variantName = 'Shiny Mythic';
      else if (shinySelected) variantName = 'Shiny';
      else if (mythicSelected) variantName = 'Mythic';
    }

    let chosenVariant = petData.variants.find(v => v.name === variantName) || petData.variants.find(v => v.name === 'Normal') || petData.variants[0];
    if (!chosenVariant || !chosenVariant.stats) return;

    lastStats = chosenVariant.stats;
    showingMax = false;
    renderStatsCard(lastStats.base, `${chosenVariant.name} Base stats`);

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

async function fetchBounties() {
  const TIMEOUT_MS = 3000;
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), TIMEOUT_MS);
    const res = await fetch('https://bgsiapi.fytg.me/bounties', { signal: controller.signal });
    clearTimeout(id);
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (e) {
    if (e && e.name === 'AbortError') console.warn('fetchBounties: request aborted after timeout');
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
  const path = window.location.pathname.replace(/\/+$/, "");
  if (path.endsWith('/hatches') || path.endsWith('/hatches.html')) return null;
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
  const path = window.location.pathname.replace(/\/+$/, "");
  const isHatches = path.endsWith('/hatches') || path.endsWith('/hatches.html');
  if (!isHatches) {
    ensureBountyButton();
    updateBountyButtonIcon();
    setInterval(updateBountyButtonIcon, 5 * 60 * 1000);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
  setTheme(savedTheme);
  if (!localStorage.getItem('selectedTheme')) {
    setTheme('dark');
  }

  const savedFont = localStorage.getItem('selectedFont') || 'Arial';
  (function initFontSelect() {
    const el = document.getElementById('font-select');
    if (!el) {
      setFont(savedFont);
      return;
    }
    if (el.tagName === 'SELECT') {
      const select = el;
      const wrapper = document.createElement('div');
      wrapper.id = 'font-select';
      wrapper.className = 'custom-font-select';
      wrapper.setAttribute('tabindex', '0');
      wrapper.setAttribute('role', 'listbox');
      wrapper.style.display = 'inline-flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';
      wrapper.style.cursor = 'pointer';
      wrapper.style.fontFamily = 'inherit';
      wrapper.style.color = 'var(--main-text)';
      wrapper.innerHTML = `
        <span class="font-select-label" style="font-family:inherit;">${savedFont}</span>
        <span class="font-select-arrow" style="transition:transform 180ms ease;">▾</span>
        <ul class="font-select-options" style="display:none;position:absolute;z-index:9999;margin-top:6px;padding:6px;background:var(--controls-bg);border:1px solid var(--table-border);border-radius:8px;list-style:none;min-width:140px;">
        </ul>
      `;
      const ul = wrapper.querySelector('.font-select-options');
      Array.from(select.options).forEach(opt => {
        const li = document.createElement('li');
        li.textContent = opt.textContent;
        li.dataset.value = opt.value;
        li.style.padding = '6px 8px';
        li.style.cursor = 'pointer';
        li.style.fontFamily = 'inherit';
        li.style.color = 'var(--main-text)';
        li.addEventListener('mouseenter', () => li.style.background = 'rgba(255,255,255,0.03)');
        li.addEventListener('mouseleave', () => li.style.background = 'transparent');
        li.addEventListener('click', () => {
          const v = li.dataset.value || li.textContent;
          wrapper.querySelector('.font-select-label').textContent = v;
          setFont(v);
          localStorage.setItem('selectedFont', v);
          ul.style.display = 'none';
          wrapper.querySelector('.font-select-arrow').style.transform = 'rotate(0deg)';
        });
        ul.appendChild(li);
      });
      select.parentNode.replaceChild(wrapper, select);
      wrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = ul.style.display === 'block';
        ul.style.display = expanded ? 'none' : 'block';
        wrapper.querySelector('.font-select-arrow').style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
      });
      document.addEventListener('click', () => { ul.style.display = 'none'; wrapper.querySelector('.font-select-arrow').style.transform = 'rotate(0deg)'; });
      setFont(savedFont);
    } else {
      const wrapper = el;
      const label = wrapper.querySelector('.font-select-label');
      const ul = wrapper.querySelector('.font-select-options');
      if (label && ul) {
        label.textContent = savedFont;
        Array.from(ul.querySelectorAll('li')).forEach(li => {
          li.style.fontFamily = 'inherit';
          li.addEventListener('click', () => {
            const v = li.dataset.value || li.textContent;
            label.textContent = v;
            setFont(v);
            localStorage.setItem('selectedFont', v);
            ul.style.display = 'none';
            const arrow = wrapper.querySelector('.font-select-arrow');
            if (arrow) arrow.style.transform = 'rotate(0deg)';
          });
        });
        wrapper.addEventListener('click', (e) => {
          e.stopPropagation();
          const arrow = wrapper.querySelector('.font-select-arrow');
          const expanded = wrapper.getAttribute('data-expanded') === 'true';
          wrapper.setAttribute('data-expanded', expanded ? 'false' : 'true');
          ul.style.display = expanded ? 'none' : 'block';
          if (arrow) arrow.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
        });
        document.addEventListener('click', () => {
          if (ul) ul.style.display = 'none';
          if (wrapper.querySelector('.font-select-arrow')) wrapper.querySelector('.font-select-arrow').style.transform = 'rotate(0deg)';
        });
        setFont(savedFont);
      } else {
        setFont(savedFont);
      }
    }
  })();
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
  image: "Images/eggs/Infinity_Egg.webp",
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

function formatNameToPath(name) {
  if (!name) return '';
  let s = String(name).trim();
  s = s.replace(/\(.*?\)/g, '').trim();
  s = s.replace(/%2527/g, '__DOUBLE_ENC_P27__');
  s = s.replace(/%27/g, '__ENC_P27__');
  s = s.replace(/[\u2018\u2019']/g, '%27');
  s = s.replace(/\s+/g, '_');
  s = s.replace(/[\/\\"]/g, '');
  s = s.replace(/[^A-Za-z0-9_%\-\._()]/g, '');
  s = s.replace(/_+/g, '_');
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
  if (!eggOrName) return '';
  if (typeof eggOrName === 'string') {
    return `Images/eggs/${formatNameToPath(eggOrName)}.webp`;
  }
  if (eggOrName.image) return eggOrName.image;
  return `Images/eggs/${formatNameToPath(eggOrName.name)}.webp`;
}

let __lastBountiesJson = null;
let __bountyWatcherStarted = false;

function startBountyWatcher() {
  if (__bountyWatcherStarted) return;
  __bountyWatcherStarted = true;

  const POLL_MS = 20_000;

  async function check() {
    try {
      const bounties = await fetchBounties();
      const json = JSON.stringify(bounties || []);
      if (json !== __lastBountiesJson) {
        __lastBountiesJson = json;
        try {
          if (typeof selectedEgg !== 'undefined' && selectedEgg) {
            let eggObj = selectedEgg;
            if (typeof selectedEgg === 'string') {
              eggObj = (window.eggs || window.eggsJson || []).find(e => e.name === selectedEgg) || null;
            }
            if (eggObj) {
              const canRift = !!(eggObj.canSpawnAsRift || (eggObj.canSpawnAsRift === true));
              createEggDetailsView(eggObj, canRift).catch(() => { });
            }
          }
          const bountyLayout = document.querySelector('.egg-details-layout[data-world="bounty"]');
          if (bountyLayout) {
            if (typeof populateBountyView === 'function') {
              populateBountyView().catch(() => { });
            }
          }
        } catch (e) {
          console.warn('bounty-watcher: update failed', e);
        }
      }
    } catch (e) {
    }
  }

  check();
  setInterval(check, POLL_MS);
}

startBountyWatcher();


async function applyEggEmbedMetaFromParam() {
  if (typeof window === 'undefined' || !document || !window.location) return;

  let raw = null;
  const s = window.location.search || '';
  if (s) {
    const qs = s.replace(/^\?/, '');
    if (qs.includes('=')) {
      const params = new URLSearchParams(qs);
      raw = params.get('egg') || Array.from(params.keys())[0];
    } else {
      raw = qs;
    }
  }

  if (!raw) {
    try {
      const seg = window.location.pathname.split('/').filter(Boolean).pop();
      if (seg && !seg.includes('.') && seg.toLowerCase() !== 'index') raw = seg;
    } catch (e) { raw = null; }
  }
  if (!raw) return;

  try { raw = decodeURIComponent(raw).replace(/_/g, ' ').trim(); } catch (e) { raw = raw.replace(/_/g, ' ').trim(); }

  const rawLower = (raw || '').toString().trim().toLowerCase();
  if (rawLower === 'bounty') {
    try {

      if (typeof window !== 'undefined') window._openBountyOnLoad = true;
      if (typeof createBountyDetailsView === 'function') {
        Promise.resolve().then(() => { createBountyDetailsView().catch(()=>{}); });
      }
      setTimeout(() => { try { if (typeof window !== 'undefined') window._openBountyOnLoad = false; } catch (e) {} }, 1200);
    } catch (e) {}
    return;
  }

  let eggsJson = null;
  try {
    eggsJson = await fetchEggsData();
  } catch (e) { eggsJson = null; }
  if (!Array.isArray(eggsJson) || eggsJson.length === 0) return;

  const findEgg = eggsJson.find(e => e.name === raw) || eggsJson.find(e => e.name && e.name.toLowerCase() === raw.toLowerCase()) || eggsJson.find(e => e.name && e.name.toLowerCase().includes(raw.toLowerCase()));
  if (!findEgg) return;

  const petCount = Array.isArray(findEgg.Pets) ? findEgg.Pets.length : 0;
  const title = `${findEgg.name} - BGSI Calculator`;
  const desc = `${findEgg.name} has ${petCount} pets. This website will let you calculate the chances for the pets!`;

  try { document.title = title; } catch (e) {}

  function upsertMeta(attr, key, value) {
    try {
      const sel = `meta[${attr}="${key}"]`;
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }

      try { el.content = value; } catch (e) {}
      try { el.setAttribute('content', value); } catch (e) {}
    } catch (e) {}
  }

  upsertMeta('name', 'description', desc);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', desc);

  let img = '';
  try { img = getEggImagePath(findEgg) || ''; } catch (e) { img = ''; }
  if (img) {
    try {
      const abs = (img.startsWith('http://') || img.startsWith('https://')) ? img : (window.location.origin.replace(/\/$/, '') + '/' + img.replace(/^\/*/, ''));
      upsertMeta('property', 'og:image', abs);
      upsertMeta('name', 'twitter:image', abs);
    } catch (e) {
      upsertMeta('property', 'og:image', img);
      upsertMeta('name', 'twitter:image', img);
    }
  }
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', desc);
  upsertMeta('property', 'og:url', window.location.href);
  upsertMeta('name', 'twitter:card', 'summary_large_image');

  try {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    try { link.href = window.location.href; } catch (e) { link.href = window.location.origin + window.location.pathname + (window.location.search || ''); }
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', function () { applyEggEmbedMetaFromParam().catch(()=>{}); });

document.addEventListener('click', function (e) {
  const toggle = e.target.closest('.variants-toggle');
  if (toggle) {
    e.preventDefault();
    e.stopPropagation();
    const parent = toggle.parentNode;
    const panel = parent && parent.querySelector('.variants-panel');
    const arrow = toggle.querySelector('.variants-arrow');
    const expanded = toggle.getAttribute('aria-expanded') === 'true';

    if (panel) {
      if (!expanded) {
        panel.style.display = 'flex';
        panel.style.flexDirection = 'column';
        panel.style.opacity = '0';
        panel.style.overflow = 'hidden';
        panel.style.maxHeight = '0px';
        requestAnimationFrame(() => {
          const target = panel.scrollHeight + 20;
          panel.style.transition = 'max-height 260ms ease, opacity 220ms ease';
          panel.style.maxHeight = target + 'px';
          panel.style.opacity = '1';
        });
      } else {
        panel.style.overflow = 'hidden';
        panel.style.transition = 'max-height 240ms ease, opacity 200ms ease';
        panel.style.maxHeight = '0px';
        panel.style.opacity = '0';
        setTimeout(() => {
          if (panel) panel.style.display = 'none';
        }, 260);
      }
    }

    toggle.setAttribute('aria-expanded', String(!expanded));
    if (arrow) arrow.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
    return;
  }

  const vbtn = e.target.closest('.variant-btn');
  if (vbtn) {
    e.preventDefault();
    e.stopPropagation();
    const was = vbtn.dataset.selected === 'true';
    vbtn.dataset.selected = was ? 'false' : 'true';

    try {
      vbtn.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(0.96)' },
        { transform: 'scale(1)' }
      ], { duration: 200, easing: 'ease-out' });
    } catch (err) { }

    if (vbtn.classList.contains('shiny-btn')) {
      if (vbtn.dataset.selected === 'true') {
        vbtn.style.background = '#c28e20';
        vbtn.style.color = '#ffffff';
        vbtn.style.boxShadow = '0 0 14px #ffe047, 0 6px 20px rgba(0,0,0,0.12)';
      } else {
        vbtn.style.background = 'var(--controls-bg)';
        vbtn.style.color = 'var(--main-text)';
        vbtn.style.boxShadow = 'none';
      }
      const inp = vbtn.closest('.variant-row') && vbtn.closest('.variant-row').querySelector('.variant-input');
      if (inp) inp.style.color = 'var(--main-text)';
    } else if (vbtn.classList.contains('mythic-btn')) {
      if (vbtn.dataset.selected === 'true') {
        vbtn.style.background = '#3602b0';
        vbtn.style.color = '#ffffff';
        vbtn.style.boxShadow = '0 0 16px rgba(123,78,255,0.95), 0 8px 24px rgba(54,2,176,0.35)';
      } else {
        vbtn.style.background = 'var(--controls-bg)';
        vbtn.style.color = 'var(--main-text)';
        vbtn.style.boxShadow = 'none';
      }
      const inp = vbtn.closest('.variant-row') && vbtn.closest('.variant-row').querySelector('.variant-input');
      if (inp) inp.style.color = 'var(--main-text)';
    }

    const row = vbtn.closest('.variant-row');
    if (row) {
      const inp = row.querySelector('.variant-input');
      if (inp) {
        const parsed = (function parseOneInInputForDisplay(str) {
          if (!str && str !== 0) return null;
          const s = String(str).trim().replace(/[,]/g, '');
          const m = s.match(/(?:1\s*\/\s*|1\s*in\s*)(\d+)/i);
          if (m && m[1]) return `1 in ${Math.max(1, Math.round(Number(m[1])) )}`;
          const n = Number(s);
          if (isFinite(n) && n > 0) return `1 in ${Math.max(1, Math.round(n))}`;
          return null;
        })(inp.value);
        if (!parsed) {
          inp.value = inp.placeholder || inp.value;
        } else {
          inp.value = parsed;
        }
      }
    }

    if (row) {
      const inp = row.querySelector('.variant-input');
      if (inp) {
        const ev = new Event('input', { bubbles: true, cancelable: true });
        inp.dispatchEvent(ev);
      }
    }
    return;
  }

}, true);



