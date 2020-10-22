//Variabler som snappar upp .balloons. Once innebär att t.ex. forEach nedan bara aktiveras en gång.
let popped = 0;
const balloons = document.querySelectorAll(".balloons");
const once = {
  once: true,
};

//Vid 'mouseover' ändras bagrundsfärgen på 'ballongen' och texten "POP!" skapas.
balloons.forEach((element) => {
  element.addEventListener(
    "mouseover",
    (event) => {
      event.target.style.backgroundColor = "lightgrey";
      event.target.textContent = "POP!";
      popped++;
      checkAllPopped();
    },
    once
  );
});

//Denna funktion skapas när alla ballonger 'smällt'. Texten under whenPopped visas och 'galleriet' meed ballonger visas tomt.
function checkAllPopped() {
  if (popped === balloons.length) {
    const message = document.querySelector("#whenPopped");
    const gallery = document.querySelector("#balloons-gallery");
    gallery.innerHTML = "";
    message.style.display = "block";
  }
}
