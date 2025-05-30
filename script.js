const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");

// Example placeholder images
const posters = [
  "https://image.tmdb.org/t/p/w300/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
  "https://image.tmdb.org/t/p/w300/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  "https://image.tmdb.org/t/p/w300/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
  "https://image.tmdb.org/t/p/w300/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
  "https://image.tmdb.org/t/p/w300/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  "https://image.tmdb.org/t/p/w300/6ELCZlTA5lGUops70hKdB83WJxH.jpg"
];

function loadPosters(container, images) {
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    container.appendChild(img);
  });
}

loadPosters(row1, posters);
loadPosters(row2, posters.reverse());
