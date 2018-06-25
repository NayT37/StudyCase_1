//main.js
window.onload = function () {
    document.getElementById("screen").innerHTML = "Screen size is : " + window.innerWidth;
    document.getElementById("screen").style.color = "red";
    document.getElementById("screen").style.zIndex = "200";
}

window.onresize = UpdateWidthText;

function UpdateWidthText() {
    document.getElementById("screen").innerHTML = "Screen size is : " + window.innerWidth;
}