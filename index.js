const kysButton = document.getElementById("kys-button");
const wiContainer = document.getElementById("wheein-container");
const seyoAudio = document.getElementById("seyo-audio");
const kysImage = document.getElementById("kys-img");

kysButton.addEventListener("click", () => {
  seyoAudio.play();
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
