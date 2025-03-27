function openDoor() {
  let sound = new Audio("./mp3/Doors Open.mp3"); // Suara pintu terbuka
  sound.play();

  document.getElementById("leftDoor").style.transform = "rotateY(-100deg)";
  document.getElementById("rightDoor").style.transform = "rotateY(100deg)";

  setTimeout(() => {
    window.location.href = "./user/ucapan.html";
  }, 1300);
}
