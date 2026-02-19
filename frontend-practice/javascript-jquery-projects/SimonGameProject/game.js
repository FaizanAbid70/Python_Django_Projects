let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let randomNumber = -1;
let bool = true;
let level = 0;
function restartGame() {
  $("h1").text("Game Over, Press Any Key to Restart");
  let audio = new Audio("./sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 100);
  bool = true;
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
  $(".btn").off("click");
}
$(document).on("keydown", () => {
  if (bool) {
    bool = false;
    $("h1").text(`Level ${level}`);
    function playSound(name) {
      let audio = new Audio(`./sounds/${name}.mp3`);
      audio.play();
    }
    function nextSequence() {
      let min = 0;
      let max = 3;
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      level += 1;
      $("h1").text(`Level ${level}`);
    }
    function playSequence() {
      nextSequence();
      let randomChosenColor = buttonColors[randomNumber];
      // console.log(randomChosenColor)
      gamePattern.push(randomChosenColor);
      $(`#${randomChosenColor}`).fadeOut();
      $(`#${randomChosenColor}`).fadeIn();
      playSound(randomChosenColor);
    }
    playSequence();
    function animatePress(currentColor) {
      $(`#${currentColor}`).addClass("pressed");
      setTimeout(() => {
        $(`#${currentColor}`).removeClass("pressed");
      }, 100);
    }

    function checkPattern(i) {
      if (userClickedPattern[i] != gamePattern[i]) {
        restartGame();
      }
    }
    let counter = 0;

    $(".btn").click(function () {
      let userChosenColour = $(this).attr("id");
      userClickedPattern.push(userChosenColour);
      playSound(userChosenColour);
      animatePress(userChosenColour);
      if (counter < gamePattern.length) {
        checkPattern(counter);
        counter++;
      }

      if (counter == gamePattern.length && level != 0) {
        counter = 0;
        userClickedPattern = [];
        setTimeout(() => {
          playSequence();
        }, 400);
      }
    });
  }
});
