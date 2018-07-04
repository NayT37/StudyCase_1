//main.js
window.onload = function () {
    document.getElementById("screen").innerHTML = "Screen size is : " + window.innerWidth;
    document.getElementById("screen").style.color = "red";
    document.getElementById("screen").style.zIndex = "200";
    //Hide some elements
    document.getElementById("quote-name").style.display = "none";
    document.getElementById("quote-charge").style.display = "none";
}

window.onresize = UpdateWidthText;

function UpdateWidthText() {
    document.getElementById("screen").innerHTML = "Screen size is : " + window.innerWidth;
}

function UpdateQuoteText(personClicked) {
    let quoteText = document.getElementById("quote-text");
    let quoteName = document.getElementById("quote-name");
    let quoteCharge = document.getElementById("quote-charge");
    quoteName.style.display = "block";
    quoteCharge.style.display = "block";
    switch (personClicked) {
        case "guy1":
            quoteText.innerHTML = "Hi I'm Jhon";
            quoteName.innerHTML = "Jhon";
            quoteCharge.innerHTML = "Boss";
            break;
        case "guy2":
            quoteText.innerHTML = "Hi I'm Rebecca";
            quoteName.innerHTML = "Rebecca";
            quoteCharge.innerHTML = "Developer";
            break;
        case "guy3":
            quoteText.innerHTML = "Hi I'm Kathe";
            quoteName.innerHTML = "Kathe";
            quoteCharge.innerHTML = "Designer";
            break;
        case "guy4":
            quoteText.innerHTML = "Hi I'm Paul";
            quoteName.innerHTML = "Paul";
            quoteCharge.innerHTML = "Designer";
            break;
        case "guy5":
            quoteText.innerHTML = "Hi I'm Robert";
            quoteName.innerHTML = "Robert";
            quoteCharge.innerHTML = "Developer";
            break;
        default:
            quoteText.innerHTML = "No quote";
            quoteName.innerHTML = "No name";
            quoteCharge.innerHTML = "";
    }
    ShowQuoteFeedback(personClicked);
}

function ShowQuoteFeedback(guyNumber) {
    let width = 75;
    let padding = 75;
    let elementToGrow = document.getElementById(guyNumber);
    let growthInterval;
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
}