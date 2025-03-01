
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById("rainbow-btn")
.addEventListener("click", function (event) {
    event.preventDefault();
    const color = document.getElementById("rainbow-btn")
    color.body.style.backgroundColor = getRandomColor();
})