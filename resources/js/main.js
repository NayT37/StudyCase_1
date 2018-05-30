window.onload = function () {
    let widthTxt = document.getElementById("screen");
    widthTxt.innerHTML = "Screen size is : " + window.innerWidth;
}

window.onresize = UpdateWidthText;

function UpdateWidthText() {
    let widthTxt = document.getElementById("screen");
    widthTxt.innerHTML = "Screen size is : " + window.innerWidth;
}