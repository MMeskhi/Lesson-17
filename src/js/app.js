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
