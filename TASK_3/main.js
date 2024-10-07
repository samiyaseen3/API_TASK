"use strict";
let url = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=50";
let content = document.getElementById("name");
console.log(content);

fetch(url)
  .then((reponse) => {
    return reponse.json();
  })
  .then((data) => {
    let result = data.results;
    

    result.forEach((element) => {
      fetch(element.url)
        .then((res) => {
          return res.json();
        })
        .then((pokemonDetails) => {
            
            console.log(pokemonDetails.abilities);
            
          let newElement = document.createElement("h1");
          content.appendChild(newElement);
          newElement.innerHTML = element.name;
          let pokemoneImage = document.createElement("img");
          content.appendChild(pokemoneImage);
          pokemoneImage.src = pokemonDetails.sprites.front_default;
          let pokemonAbilities = document.createElement("p");
          content.appendChild(pokemonAbilities);
          pokemonAbilities.innerHTML = "Abilities: " + pokemonDetails.abilities.map(abilityInfo => abilityInfo.ability.name).join(", ");

          

        });
    });
  });
