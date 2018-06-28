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
            ShowQuoteFeedback("guy1");
            break;
        case "guy2":
            document.getElementById("quote-text").innerHTML = "Hi I'm Rebecca";
            ShowQuoteFeedback("guy2");
            break;
        case "guy3":
            document.getElementById("quote-text").innerHTML = "Hi I'm Kathe";
            ShowQuoteFeedback("guy3");
            break;
        case "guy4":
            document.getElementById("quote-text").innerHTML = "Hi I'm Paul";
            ShowQuoteFeedback("guy4");
            break;
        case "guy5":
            document.getElementById("quote-text").innerHTML = "Hi I'm Robert";
            ShowQuoteFeedback("guy5");
            break;
        default:
            document.getElementById("quote-text").innerHTML = "No quote";
    }
}

function ShowQuoteFeedback(guyNumber) {
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
            document.getElementById(temp).style = "width: 85%;padding-bottom: 85%;";
        }
    }

    //Use the set interval / clear interval to animate the width and padding bottom properties
}