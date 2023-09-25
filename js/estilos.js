let d = document.querySelector("#night");
function fundo() {
    let form = document.getElementById("myForm");
    let h2 = document.querySelector("#titulo");
    let subText = document.querySelector("#um");
    let subText2 = document.querySelector("#dois");
    let subText3 = document.querySelector("#tres");
    form.style.backgroundColor = "#483541";
    h2.style.color = "white";
    subText.style.color = "white";
    subText2.style.color = "white";
    subText3.style.color = "white"

}

function claro() {
    let form = document.getElementById("myForm");
    let h2 = document.querySelector("#titulo");
    let subText = document.querySelector("#um");
    let subText2 = document.querySelector("#dois");
    let subText3 = document.querySelector("#tres");
    form.style.backgroundColor = "#ded6d4";
    h2.style.color = "#483541";
    subText.style.color = "#483541";
    subText2.style.color = "#483541";
    subText3.style.color = "#483541"
}
document.querySelector("#day").addEventListener("click", claro);
document.getElementById("night").addEventListener("click", fundo);