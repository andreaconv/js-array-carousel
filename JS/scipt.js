//prendo gli elementi dal'HTML
const slider = document.querySelector(".image");

//prendo i bottoni
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");

//CONTATORE
let contatore = 0;
console.log("contatore", contatore);



// un array è un elenco, ogni elemento di questo elenco ha un indice con base 0 perciò: 
// l'img 01 avrà indice 0, 
// l'img 02 avrà indice 1 etc.
const images = [
  "assets-slider/img/01.webp",
  "assets-slider/img/02.webp",
  "assets-slider/img/03.webp",
  "assets-slider/img/04.webp",
  "assets-slider/img/05.webp",
];
// console.log(images);


// con il ciclo for andiamo a formare un elenco di numeri fino ad arrivare alla lunghezza dell'array images

for (let i = 0; i < images.length; i++) {
  // con la const image andiamo a dire che equivale all'indice dellarray images
  const image = images[i];
  slider.innerHTML += `
  <img class="img hide" src="${image}">
  `
}

//PRENDO TUTTE LE IMMAGINI DALL'HTML APPENA CREATE E INSERITE
//getElementsByClassName mi restituisce HTMLCollection che è un array con tutti gli elementi aventi la classe specificata
const immagini = document.getElementsByClassName("img");
console.log("array iniziale", immagini)
//prendo il primo elemento di questo array e gli tolgo la classe "hide"
immagini[contatore].classList.remove("hide");


//al pulsante indietro aggiungo la classe "hide" per non visualizzarlo
btnUp.classList.add("hide");




//azione bottoni
btnDown.addEventListener("click", function () {
  console.log("hai cliccato il tasto DOWN ");
  immagini[contatore].classList.add("hide");
  contatore++;
  console.log("contatore", contatore);
  immagini[contatore].classList.remove("hide");
  btnUp.classList.remove("hide");

  if(contatore === images.length - 1){
    btnDown.classList.add("hide")
  }



})


btnUp.addEventListener("click", function () {
  console.log("hai cliccato il tasto UP")
  immagini[contatore].classList.add("hide");
  contatore--;
  console.log("contatore", contatore);
  immagini[contatore].classList.remove("hide");

  if(contatore === 0){
    btnUp.classList.add("hide")
  }

  if(contatore < images.length - 1){
    btnDown.classList.remove("hide")
  }

})


