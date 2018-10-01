function date() {
  let date = document.getElementById("date");
  date.innerHTML = Date();
}

//Event for welcome!
let body = document.querySelector("body");
//This is a mouseenter event
//There is a defined boundary, if the mouse enters this boundary, an alert pops up
body.addEventListener("onloadstart", onloadstart); //Listens for mouse entrance

function onloadstart() {
  alert("Hello dear, you are welcome!"); //Pops the dialogue box

  //We don't want the dialogue box to be a nuisance to the user,
  //So we add a removeEventListener, except the page is reloaded, the alert cannot work again.
  body.removeEventListener("onloadstart", onloadstart);
}

let zero = document.querySelector(".zero");
//This is a mouseenter event
//There is a defined boundary, if the mouse enters this boundary, an alert pops up
zero.addEventListener("mouseenter", mouseEnterzero); //Listens for mouse entrance

function mouseEnterzero() {
  alert("About the things I said the other night..."); //Pops the dialogue box

  //We don't want the dialogue box to be a nuisance to the user,
  //So we add a removeEventListener, except the page is reloaded, the alert cannot work again.
  zero.removeEventListener("mouseenter", mouseEnterzero);
}

//Event for Teasing!
let fifty = document.querySelector(".fifty");
//This is a mouseenter event
//There is a defined boundary, if the mouse enters this boundary, an alert pops up
fifty.addEventListener("mouseenter", mouseEnterfifty); //Listens for mouse entrance

function mouseEnterfifty() {
  alert(
    "I should have told you a long time ago before any of the recent events"
  ); //Pops the dialogue box

  //We don't want the dialogue box to be a nuisance to the user,
  //So we add a removeEventListener, except the page is reloaded, the alert cannot work again.
  fifty.removeEventListener("mouseenter", mouseEnterfifty);
}

//Event for the question
let hundred = document.querySelector(".hundred");
//This is a mouseenter event
//There is a defined boundary, if the mouse enters this boundary, an alert pops up
hundred.addEventListener("mouseenter", mouseEnterhundred); //Listens for mouse entrance

function mouseEnterhundred() {
  alert(
    "Just so you know it is not post-breakup drama/trauma like you said, There is really no right time to do most things, The NIKE brand says JUST DO IT!... So, as much as you say - I will still be here, with you - I want to also be with you too, again, if you would allow it."
  ); //Pops the dialogue box

  //We don't want the dialogue box to be a nuisance to the user,
  //So we add a removeEventListener, except the page is reloaded, the alert cannot work again.
  hundred.removeEventListener("mouseenter", mouseEnterhundred);
}
