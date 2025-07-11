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
      name: "Mining Egg",
      image: "Images/Eggs/Mining_Egg.webp",
      Pets: [
        { name: "Crystal Unicorn", baseOdds: 200, icon: "Images/Pets/Crystal_Unicorn.webp" },
        { name: "Stone Gargoyle", baseOdds: 20000, icon: "Images/Pets/Stone_Gargoyle.webp" }
      ],
      world: "2"
    },
    {
      name: "Cyber Egg",
      image: "Images/Eggs/Cyber_Egg.webp",
      Pets: [
        { name: "Cyborg Phoenix", baseOdds: 2500, icon: "Images/Pets/Cyborg_Phoenix.webp" },
        { name: "Space Invader", baseOdds: 50000, icon: "Images/Pets/Space_Invader.webp" },
        { name: "Bionic Shard", baseOdds: 666667, icon: "Images/Pets/Bionic_Shard.webp" },
        { name: "Mech Robot (Secret)", baseOdds: 66666667, icon: "Images/Pets/Mech_Robot.webp" }
      ],
      world: "2"
    },
    {
      name: "Neon Egg",
      image: "Images/Eggs/Neon_Egg.webp",
      Pets: [
        { name: "Neon Wyvern", baseOdds: 3334, icon: "Images/Pets/Neon_Wyvern.webp" },
        { name: "Neon Wire Eye", baseOdds: 66667, icon: "Images/Pets/Neon_Wire_Eye.webp" },
        { name: "Equalizer", baseOdds: 833334, icon: "Images/Pets/Equalizer.webp" },
        { name: "Hyperwave Kitty (Secret)", baseOdds: 125000000, icon: "Images/Pets/Hyperwave_Kitty.webp" }
      ],
      world: "2"
    },
    {
      name: "Chance Egg",
      image: "Images/Eggs/Chance_Egg.webp",
      Pets: [
        { name: "Ring Master", baseOdds: 100000, icon: "Images/Pets/Ring_Master.webp" },
        { name: "Royal Guardian", baseOdds: 200000000, icon: "Images/Pets/Royal_Guardian.webp" }
      ],
      world: "2"
    }
  ];
  
  const eggList = document.getElementById("egg-list");
  
  function createEggCard(egg) {
    const card = document.createElement("div");
    card.className = "egg-card";
    card.setAttribute("data-world", egg.world);
  
    const eggHeader = document.createElement("div");
    eggHeader.className = "egg-header";
    eggHeader.innerHTML = `<img src="${egg.image}" alt="${egg.name}" style="width: 40px; height: 40px;" />
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
  const fontSelect = document.getElementById("font-select");
  if (fontSelect) {
    const fontMap = {
      "Arial": "Arial, Helvetica, sans-serif",
      "Ferdoka One": "'Ferdoka One', cursive, Arial, Helvetica, sans-serif",
      "Lato": "'Lato', Arial, Helvetica, sans-serif",
      "Roboto": "'Roboto', Arial, Helvetica, sans-serif",
      "Comic Sans MS": "'Comic Sans MS', 'Comic Sans', cursive, Arial, Helvetica, sans-serif"
    };
    const helveticaOption = fontSelect.querySelector('option[value="Helvetica"]');
    if (helveticaOption) helveticaOption.remove();

    const savedFont = localStorage.getItem('selectedFont') || 'Arial';
    fontSelect.value = savedFont;
    document.body.classList.remove('ferdoka-font');
    document.documentElement.classList.remove('ferdoka-font');
    if (savedFont === 'Ferdoka One') {
      document.body.classList.add('ferdoka-font');
      document.documentElement.classList.add('ferdoka-font');
    } else {
      document.body.style.fontFamily = fontMap[savedFont] || fontMap['Arial'];
      document.documentElement.style.fontFamily = fontMap[savedFont] || fontMap['Arial'];
    }
    fontSelect.addEventListener('change', function() {
      const selectedFont = fontSelect.value;
      document.body.classList.remove('ferdoka-font');
      document.documentElement.classList.remove('ferdoka-font');
      if (selectedFont === 'Ferdoka One') {
        document.body.classList.add('ferdoka-font');
        document.documentElement.classList.add('ferdoka-font');
      } else {
        document.body.style.fontFamily = fontMap[selectedFont] || fontMap['Arial'];
        document.documentElement.style.fontFamily = fontMap[selectedFont] || fontMap['Arial'];
      }
      localStorage.setItem('selectedFont', selectedFont);
    });
  }
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
  
  function toggleSettingsPopup(event) {
    event.preventDefault();
    const settingsPopup = document.getElementById('settings-popup');
    settingsPopup.classList.toggle('show');
  }
