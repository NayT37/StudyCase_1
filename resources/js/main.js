const _DOMobj = {};

window.onload = function () {
    _DOMobj.widthTxt = document.getElementById("screen");
    _DOMobj.widthTxt.innerHTML = "Screen size is : " + window.innerWidth;
    document.getElementById('img1').style.backgroundImage = "url('./resources/img/section_img.png')";
}

window.onresize = UpdateWidthText;

function UpdateWidthText() {
    _DOMobj.widthTxt.innerHTML = "Screen size is : " + window.innerWidth;
}

function setFirstImages() {
}