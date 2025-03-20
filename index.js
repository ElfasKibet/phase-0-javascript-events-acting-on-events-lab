// Your code here
function addingEventListener() {
  const input = document.addEventListener("input");

  function clickAlert() {
    alert("I was clicked!");
  }
}
input.addEventListener("click", clickAlert);

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    // 400px (game field width) - 40px (dodger width) = 360px max left position
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listener for right arrow key
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
