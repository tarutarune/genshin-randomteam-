let selectedCharacters =
  characters.map(character => character.id);

function toggleCharacter(characterId) {

  if (selectedCharacters.includes(characterId)) {

    selectedCharacters =
      selectedCharacters.filter(id => id !== characterId);

  } else {

    selectedCharacters.push(characterId);

  }

  renderCharacters();
}

window.toggleCharacter = toggleCharacter;

function renderCharacters() {

  document.getElementById("character-list").innerHTML =
    characters.map(character => {

      const selected =
        selectedCharacters.includes(character.id)
          ? "selected"
          : "";

      return `
        <div
          class="
          character-card
          rarity-${character.rarity}
          ${selected}
          "
          onclick="toggleCharacter('${character.id}')"
        >

          <img
            src="${character.image}"
            alt="${character.name}"
            class="character-image"
          >

          <p>${character.name}</p>

        </div>
      `;
    }).join("");
}

function randomTeam() {

  if (selectedCharacters.length === 0) {

    document.getElementById("result").innerHTML =
      "キャラを選択してください";

    return;
  }

  const shuffled = [...selectedCharacters]
    .sort(() => 0.5 - Math.random());

  const team = shuffled.slice(0, 4);

  document.getElementById("result").innerHTML =
    team.map(characterId => {

      const character =
        characters.find(c => c.id === characterId);

      return `
        <div class="character-card">

          <img
            src="${character.image}"
            alt="${character.name}"
            class="character-image"
          >

          <p>${character.name}</p>

        </div>
      `;
    }).join("");
}

renderCharacters();

document
  .getElementById("random-button")
  .addEventListener("click", randomTeam);
