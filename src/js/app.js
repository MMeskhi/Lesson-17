//1
function remove(el) {
  const element = el;
  element.remove();
}

//2
const img = document.createElement("img");
img.src = "https://picsum.photos/id/1/200/300";
const src = document.getElementById("img");
src.appendChild(img);

//3,4,5
const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
  },
];

const charactersListMainDiv = document.querySelector("#characters-list");
function CharactersCards() {
  const charactersElements = characters.map((characters) => {
    return `<div class="card-cont">
    <div class="card-info">
    <div class="card-name">
    <span>${characters.first_name}</span>
    <span>${characters.last_name}</span>
    </div>
    <div class="card-house">House: ${characters.house}</div>
    </div>
    <div class="card-image">
    <img src="${characters.image}">
    </div>
    </div>`;
  });
  charactersListMainDiv.innerHTML = charactersElements.join("");
}
CharactersCards();
