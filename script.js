message = "253-Mathilde G.- Portfolio ";
function step() {
message = message.substr(1) + message.substr(0,1);
document.title = message.substr(0,15);
}


let mouseX = 0;
let mouseY = 0;

let flashlight = document.getElementById("flashlight");
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function getMousePosition(e) {
  mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);

const taschenlampe = document.getElementById("taschenlampe");
const flashlightDiv = document.getElementById("flashlight");

taschenlampe.addEventListener("click", function(){
  if (flashlightDiv.style.display === "block") {
    flashlightDiv.style.display = "none";
  } else {
    flashlightDiv.style.display = "block";
  }
});
