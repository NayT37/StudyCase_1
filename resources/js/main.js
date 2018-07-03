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

function UpdateQuoteText(personClicked) {
    switch (personClicked) {
        case "guy1":
            document.getElementById("quote-text").innerHTML = "Hi I'm Jhon";
            break;
        case "guy2":
            document.getElementById("quote-text").innerHTML = "Hi I'm Rebecca";
            break;
        case "guy3":
            document.getElementById("quote-text").innerHTML = "Hi I'm Kathe";
            break;
        case "guy4":
            document.getElementById("quote-text").innerHTML = "Hi I'm Paul";
            break;
        case "guy5":
            document.getElementById("quote-text").innerHTML = "Hi I'm Robert";
            break;
        default:
            document.getElementById("quote-text").innerHTML = "No quote";
    }
    ShowQuoteFeedback(personClicked);
}

function ShowQuoteFeedback(guyNumber) {
    let width = 75;
    let padding = 75;
    let elementToGrow = document.getElementById(guyNumber);
    let growthInterval;
    let shrinkInterval;
    let temp;

    for (let i = 0; i < 5; i++) {
        //Let's evaluate all the id's named guy+number
        temp = "guy" + (i + 1);
        //If the evaluated is different from the parameter
        if (temp != guyNumber) {
            //Normal size to every object
            document.getElementById(temp).style = "width: 75%;padding-bottom: 75%;";
        } else {
            //Increase size to specific object
            growthInterval = setInterval(animateGrowth, 15);
        }
    }

    //Use the set interval / clear interval to animate the width and padding bottom properties
    function animateGrowth() {
        if (width == 85) {
            clearInterval(growthInterval);
        } else {
            width++;
            padding++;
            elementToGrow.style.width = width + '%';
            elementToGrow.style.paddingBottom = padding + '%';
        }
    }
    /*     function animateShrink() {
            if (width == 75) {
                clearInterval(shrinkInterval);
            } else {
                width--;
                padding--;
                elementToAnimate.style.width = width + '%';
                elementToAnimate.style.paddingBottom = padding + '%';
            }
        } */
}