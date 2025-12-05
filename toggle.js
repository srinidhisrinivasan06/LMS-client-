const body = document.body;

document.getElementById("lightbtn").onclick = function () {
    body.classList.remove("dark");
}

document.getElementById("darkbtn").onclick = function () {
    body.classList.add("dark");
}
