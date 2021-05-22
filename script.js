const game = document.getElementById("game");
const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
const score = document.getElementById("score");
let jumping = 0;
score.innerHTML = 0;
let through = true;

hole.addEventListener('animationiteration', function() {
  let random = -((Math.random() * 300) + 150);
  hole.style.top = random + "px";
  if (!through) {
    score.innerHTML = 0;
  } else {
    score.innerHTML++;
  }
});

setInterval(function() {
  const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  if (jumping == 0) {
    character.style.top = (characterTop + 3) + "px";
  }
  const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  let cTop = -(510 - characterTop);
  if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 120)))) {
    alert("Game over. Score: " + (score.innerHTML) + "\nClick OK to play again!");
    character.style.top = 100 + "px";
    block.style.left = 400 + "px";
    score.innerHTML = 0;
    through = false;
  } else {
    through = true;
  }
}, 12);

function jump() {
  jumping = 1;
  let jumpCount = 0;
  const jumpInterval = setInterval(function() {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if ((characterTop > 6) && (jumpCount < 15)) {
      character.style.top = (characterTop - 5) + "px";
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 12);
}