import { films } from '../data/films.js';
console.log(films);
const btnRed = document.querySelector("#redImage");
const btngreen = document.querySelector("#greenImage");
const pageBody = document.querySelector("body");

btnRed.addEventListener('click', () => (pageBody.className = "paintRed"));
btngreen.addEventListener('click', () => (pageBody.className = "paintGreen"));

document.addEventListener("DOMContentLoaded", function () {
    const myTarget = document.querySelector("#cards");
    if (myTarget) {
      films.forEach((film) => {
        let myFigure = document.createElement("figure");
        
        // Create and set the image element
        let myImage = document.createElement("img");
        myImage.src = `https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`;
        myImage.onerror = function() {
            console.error(`Image failed to load: ${myImage.src}`);
        };
        myImage.alt = film.title;
        myFigure.appendChild(myImage);
        // Create and set the title paragraph element
      let titleParagraph = document.createElement("p");
      titleParagraph.textContent = film.title;
      myFigure.appendChild(titleParagraph);
  
        // Create and set the figcaption element
        let myCaption = document.createElement("figcaption");
        myCaption.innerHTML = `Director: ${film.director}<br>Producer: ${film.producer}<br>Release Date: ${film.release_date}`;
        myFigure.appendChild(myCaption);
  
        myTarget.appendChild(myFigure);
      });
    } else {
      console.error("#cards element not found");
    }
  });