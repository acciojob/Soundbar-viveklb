const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    stopSound();

    const soundName = this.getAttribute("data-sound");

    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });
});

stopButton.addEventListener("click", stopSound);

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}