// const typeColor = {
//     bug: "#26de81",
//     dragon: "#ffeaa7",
//     electric: "#fed330",
//     fairy: "#FF0069",
//     fighting: "#30336b",
//     fire: "#f0932b",
//     flying: "#81ecec",
//     grass: "#00b894",
//     ground: "#EFB549",
//     ghost: "#a55eea",
//     ice: "#74b9ff",
//     normal: "#95afc0",
//     poison: "#6c5ce7",
//     psychic: "#a29bfe",
//     rock: "#2d3436",
//     water: "#0190FF",
//   };

const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
  //Gera um numero aleatório entre 1 e 150
  let id = Math.floor(Math.random() * 150) + 1;
  //   console.log(id);

  //combina a  url da pokeapi com o pokemon id
  const finalUrl = url + id;
  //   console.log(finalUrl);
  //busca url gerado

  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
    });
};

// ---------GERAR O CARD ---------------------

let generateCard = (data) => {
  //  Obtém os dados necessários e os atribui a variáveis
  console.log(data);
  const hp = data.stats[0].base_stat;
  // console.log(hp);
  const imgScr = data.sprites.other.dream_world.front_default;
  const pokeName = data.name;
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  card.innerHTML = `
                    <p class="hp">
                    <span>HP</span>
                    ${hp}
                  </p>
                  <img src="${imgScr}" alt="">
                  <h2 class="poke-name">${pokeName}</h2>
                  <div class="types">
                    <span>Type 1</span>
                    <span>Type 2</span>
                  </div>
                  <div class="stats">
                  <div>
                    <h3>${statAttack}</h3>
                    <p>Attack</p>
                  </div>
                  <div>
                    <h3>${statDefense}</h3>
                    <p>Defense</p>
                  </div>
                  <div>
                    <h3>${statSpeed}</h3>
                    <p>Speed</p>
                  </div>
                  </div>
                    
  `;
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
