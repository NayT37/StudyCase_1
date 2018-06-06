//main.js
window.onload = function () {
    document.getElementById("screen").innerHTML = "Screen size is : " + window.innerWidth;
    //setFirstImages();
}

window.onresize = UpdateWidthText;

function UpdateWidthText() {
    _DOMobj.widthTxt.innerHTML = "Screen size is : " + window.innerWidth;
}

function setFirstImages() {

    const urlDir = "./resources/img/spriteSheet.png";
    document.getElementById('img1').style.background = "url(" + urlDir + ") no-repeat -21px -135px";
    document.getElementById('img2').style.background = "url(" + urlDir + ") no-repeat -516px -135px";
    document.getElementById('img3').style.background = "url(" + urlDir + ") no-repeat -21px -627px";
    document.getElementById('img4').style.background = "url(" + urlDir + ") no-repeat -516px -627px";
}