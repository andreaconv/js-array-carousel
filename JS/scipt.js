// un array è un elenco, ogni elemento di questo elenco ha un indice con base 0 perciò: 
// l'img 01 avrà indice 0, 
// l'img 02 avrà indice 1 etc.
const images = [
  "assets-slider/img/01.webp",
  "assets-slider/img/02.webp",
  "assets-slider/img/03.webp",
  "assets-slider/img/04.webp",
  "assets-slider/img/05.webp",
]

// con il ciclo for andiamo a formare un elenco di numeri fino ad arrivare alla lunghezza dell'array images

for (let i=0; i < images.length; i++){
  // con la const image andiamo a dire che equivale all'indice dellarray images
  const image = images[i];
  console.log(image);
}