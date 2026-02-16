function makeSound(content) {
  let audio;
  if (content == "w") {
    audio = new Audio("./sounds/crash.mp3");
    audio.play();
  } else if (content == "a") {
    audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
  } else if (content == "s") {
    audio = new Audio("./sounds/snare.mp3");
    audio.play();
  } else if (content == "d") {
    audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
  } else if (content == "j") {
    audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
  } else if (content == "k") {
    audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
  } else if (content == "l") {
    audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
  }
}
let buttons = document.querySelectorAll("button");
//  console.log(buttons);
function funcClick() {
  makeSound(this.textContent);
  this.classList.add("pressed");
  setTimeout(() => {
    this.classList.remove("pressed");
  }, 100);
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", funcClick);
}
function funcKey(e) {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent == e.key) {
      makeSound(e.key);
      buttons[i].classList.add("pressed");
      setTimeout(() => {
        buttons[i].classList.remove("pressed");
      });
    }
  }
}
document.addEventListener("keydown", funcKey);
