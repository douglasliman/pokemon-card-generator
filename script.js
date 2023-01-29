

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
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

//estiliza o card de acordo com o tipo de pokemon
const themeColor = typeColor[data.types[0].type.name]
console.log(themeColor);
  card.innerHTML = `
                    <p class="hp">
                    <span>HP</span>
                    ${hp}
                  </p>
                  <img src="${imgScr}" alt="">
                  <h2 class="poke-name">${pokeName}</h2>
                  <div class="types">
                  
                  </div>
                  <div class="stats">
                  <div>
                    <h3>${statAttack}</h3>
                    <p>Ataque</p>
                  </div>
                  <div>
                    <h3>${statDefense}</h3>
                    <p>Defesa</p>
                  </div>
                  <div>
                    <h3>${statSpeed}</h3>
                    <p>Velocidade</p>
                  </div>
                  </div>
                    
  `;
// Define o tipo de pokemon

  appendTypes(data.types);
styleCard(themeColor);

};
let appendTypes =(types) => {
 console.log(types);
 types.forEach((item) => {
  let span = document.createElement('SPAN');
   span.textContent = item.type.name;
   console.log(span)
   document.querySelector(".types").appendChild(span);
 });
};

//estiliza o card de acordo com o tipo de pokemon
const typeColor= {
  bug: "rgba(38, 222, 129, 0.5)",
  dragon: "rgba(255, 234, 167, 0.5)",
  electric: "rgba(254, 211, 48, 0.5)",
  fairy: "rgba(255, 0, 105, 0.5)",
  fighting: "rgba(48, 51, 107, 0.5)",
  fire: "rgba(240, 147, 43, 0.5)",
  flying: "rgba(129, 238, 204, 0.5)",
  grass: "rgba(0, 184, 148, 0.5)",
  ground: "rgba(239, 181, 73, 0.5)",
  ghost: "rgba(165, 94, 234, 0.5)",
  ice: "rgba(116, 185, 255, 0.5)",
  normal: "rgba(149, 175, 192, 0.5)",
  poison: "rgba(108, 92, 231, 0.5)",
  psychic: "rgba(162, 155, 254, 0.5)",
  rock: "rgba(45, 52, 54, 0.5)",
  water: "rgba(1, 144, 255, 0.5)",
};

let styleCard = (color) => {
    
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 46%, #ffffff 36%)`; 
    card.querySelectorAll(".types span").forEach((typeColor) => {
      typeColor.style.backgroundColor = color;
      

    });
}

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
