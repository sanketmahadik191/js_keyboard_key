let text = document.getElementById("Key");
let code = document.getElementById("KeyCode")

function display() {
    code.style.display = "none"
}
let audio = document.querySelector("audio");
document.addEventListener("keydown", (e) => {
    code.style.display = "block"
    text.innerText = "You Pressed: " + e.key;
    code.innerText = "KeyCode: " + e.keyCode;
    code.classList.add = "Key";
    audio.play();
})