const eggs = [
    {
      name: "Common Egg",
      image: "Images/Eggs/Common_Egg.webp",
      Pets: [
        { name: "King Doggy (Secret)", baseOdds: 100000000, icon: "Images/Pets/King_Doggy.webp" }
      ],
      world: "1"
    },
    {
      name: "Spikey Egg",
      image: "Images/Eggs/Spikey_Egg.webp",
      Pets: [
        { name: "Emerald Golem", baseOdds: 200, icon: "Images/Pets/Emerald_Golem.webp" }
      ],
      world: "1"
    },
    {
      name: "Magma Egg",
      image: "Images/Eggs/Magma_Egg.webp",
      Pets: [
        { name: "Inferno Dragon", baseOdds: 400, icon: "Images/Pets/Inferno_Dragon.webp" }
      ],
      world: "1"
    },
    {
      name: "Crystal Egg",
      image: "Images/Eggs/Crystal_Egg.webp",
      Pets: [
        { name: "Unicorn", baseOdds: 400, icon: "Images/Pets/Unicorn.webp" },
        { name: "Flying Pig", baseOdds: 1000, icon: "Images/Pets/Flying_Pig.webp" }
      ],
      world: "1"
    },
    {
      name: "Lunar Egg",
      image: "Images/Eggs/Lunar_Egg.webp",
      Pets: [
        { name: "Lunar_Serpent", baseOdds: 400, icon: "Images/Pets/Lunar_Serpent.webp" },
        { name: "Electra", baseOdds: 1000, icon: "Images/Pets/Electra.webp" }
      ],
      world: "1"
    },
    {
      name: "Void Egg",
      image: "Images/Eggs/Void_Egg.webp",
      Pets: [
        { name: "Dark Phoenix", baseOdds: 2000, icon: "Images/Pets/Dark_Phoenix.webp" },
        { name: "Neon Elemntal", baseOdds: 5000, icon: "Images/Pets/Neon_Elemental.webp" },
        { name: "NULLVoid", baseOdds: 1000000, icon: "Images/Pets/NULLVoid.webp" }
      ],
      world: "1"
    },
    {
      name: "Hell Egg",
      image: "Images/Eggs/Hell_Egg.webp",
      Pets: [
        { name: "Inferno Cube", baseOdds: 4000, icon: "Images/Pets/Inferno_Cube.webp" },
        { name: "Virus", baseOdds: 50000, icon: "Images/Pets/Virus.webp" }
      ],
      world: "1"
    },
    {
      name: "Nightmare Egg",
      image: "Images/Eggs/Nightmare_Egg.webp",
      Pets: [
        { name: "Green Hydra", baseOdds: 25000, icon: "Images/Pets/Green_Hydra.webp" },
        { name: "Demonic Hydra", baseOdds: 100000, icon: "Images/Pets/Demonic_Hydra.webp" },
        { name: "The Overlord (Secret)", baseOdds: 1000000, icon: "Images/Pets/The_Overlord.webp" }
      ],
      world: "1"
    },
    {
      name: "Rainbow Egg",
      image: "Images/Eggs/Rainbow_Egg.webp",
      Pets: [
        { name: "Hexarium", baseOdds: 100000, icon: "Images/Pets/Hexarium.webp" },
        { name: "Rainbow Shock", baseOdds: 200000, icon: "Images/Pets/Rainbow_Shock.webp" }
      ],
      world: "1"
    },
    {
      name: "100M Egg",
      image: "Images/Eggs/100M_Egg.webp",
      Pets: [
        { name: "Diamond Serpent", baseOdds: 2500, icon: "Images/Pets/Diamond_Serpent.webp" },
        { name: "Diamond Hexarium", baseOdds: 50000, icon: "Images/Pets/Diamond_Hexarium.webp" },
        { name: "King Pufferfish", baseOdds: 800000, icon: "Images/Pets/King_Pufferfish.webp" },
        { name: "Royal Trophy (Secret)", baseOdds: 50000000, icon: "Images/Pets/Royal_Trophy.webp" }
      ],
      world: "bubble_festival"
    },
    {
      name: "Silly Egg",
      image: "Images/Eggs/Silly_Egg.webp",
      Pets: [
        { name: "DOOF", baseOdds: 10000, icon: "Images/Pets/DOOF.webp" },
        { name: "ROUND", baseOdds: 250000, icon: "Images/Pets/ROUND.webp" },
        { name: "Silly Doggy (Secret)", baseOdds: 1000000, icon: "Images/Pets/Silly_Doggy.webp" }
      ],
      world: "bubble_festival"
    }
  ];
  
  const eggList = document.getElementById("egg-list");
  
  function createEggCard(egg) {
    const card = document.createElement("div");
    card.className = "egg-card";
    card.setAttribute("data-world", egg.world);
  
    const eggHeader = document.createElement("div");
    eggHeader.className = "egg-header";
    eggHeader.innerHTML = `<img src="${egg.image}" alt="${egg.name}" />
                           <h2>${egg.name}</h2>`;
  
    const controls = document.createElement("div");
    controls.className = "controls";
    controls.innerHTML = `
      <label>Rift:</label>
      <select class="multiplier">
        <option value="0">No</option>
        <option value="5">5x</option>
        <option value="10">10x</option>
        <option value="25">25x</option>
      </select>
      <label>Luck Multiplier (%):</label>
      <input type="number" class="luck" value="0" />
    `;
  
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
      const multiplierValue = parseFloat(multiplierSelect.value);
      const riftBonusPercent = multiplierValue * 100; // Convert Rift multiplier to percentage (e.g., 5x = 500%)
      const luckPercent = parseFloat(luckInput.value);
      const effectiveLuckPercent = luckPercent + riftBonusPercent; // Add Rift bonus to Luck multiplier in the background
      const combinedMultiplier = 1 + effectiveLuckPercent / 100; // Convert total percentage to multiplier
  
      petList.innerHTML = "";
  
      egg.Pets.forEach(pet => {
        const baseChance = 1 / pet.baseOdds;
        const adjustedChance = baseChance * combinedMultiplier; // Apply combined multiplier
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
    multiplierSelect.addEventListener("change", updateChances);
    luckInput.addEventListener("input", () => {
      if (luckInput.value === "" || parseFloat(luckInput.value) < 0) {
        luckInput.value = 0;
      }
      updateChances();
    });
  }
  
  eggs.forEach(createEggCard);
  
  document.addEventListener("DOMContentLoaded", () => {
    const settingsButton = document.querySelector(".settings-button");
    const settingsPopup = document.querySelector(".settings-popup");
    const fontSelect = document.getElementById("font-select");
  
    settingsButton.addEventListener("click", () => {
      settingsPopup.classList.toggle("show");
    });
  
    const savedFont = document.cookie.split(";").find(cookie => cookie.trim().startsWith("font="));
    if (savedFont) {
      const font = savedFont.split("=")[1];
      document.body.style.fontFamily = font;
      fontSelect.value = font;
    }
  
    fontSelect.addEventListener("change", () => {
      const selectedFont = fontSelect.value;
      document.body.style.fontFamily = selectedFont;
      document.cookie = `font=${selectedFont}; path=/; max-age=31536000`;
    });
  });
  
  function filterEggsByWorld(world) {
    const eggList = document.getElementById('egg-list');
    const eggs = eggList.querySelectorAll('.egg-card');
  
    eggs.forEach(egg => {
      const eggWorld = egg.getAttribute('data-world');
      if (eggWorld === world) {
        egg.style.display = 'block';
      } else {
        egg.style.display = 'none';
      }
    });
  }
