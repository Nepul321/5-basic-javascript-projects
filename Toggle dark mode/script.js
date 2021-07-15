const mode = document.getElementById("toggle")

mode.addEventListener("change", (e) => {
document.body.classList.toggle("dark", e.target.checked)
})