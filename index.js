const kysButton = document.getElementById("kys-button");
const wiContainer = document.getElementById("wheein-container");
const seyoAudio = document.getElementById("seyo-audio");
const kysImage = document.getElementById("kys-img");
const muteToggleButton = document.getElementById("mute-toggle-button");
const muteToggleImage = document.getElementById("mute-toggle-image");

kysButton.addEventListener("click", () => {
  seyoAudio.play();
});

muteToggleButton.addEventListener("click", () => {
  const mutedStatus = !!document.getElementById("seyo-audio").muted;
  seyoAudio.muted = !mutedStatus;

  if (mutedStatus) {
    muteToggleImage.src = "./assets/speaker.png";
  } else {
    muteToggleImage.src = "./assets/mute.png";
  }
});

seyoAudio.addEventListener("play", () => {
  wiContainer.classList.remove("hide");
  kysButton.classList.add("paused-button");
  kysImage.src = "./assets/seyo_kys_2.jpg";
});

seyoAudio.addEventListener("ended", () => {
  kysButton.classList.remove("paused-button");
  wiContainer.classList.add("hide");
  kysImage.src = "./assets/seyo_kys_1.jpg";
});
