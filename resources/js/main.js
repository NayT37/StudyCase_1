//main.js

//#region Window Methods
//When the window is loaded
window.onload = function () {
    document.getElementById("screen").innerHTML = "Screen size is : " + window.innerWidth;
    document.getElementById("screen").style.color = "red";
    document.getElementById("screen").style.zIndex = "200";
    //Hide some elements
    document.getElementById("quote-name").style.display = "none";
    document.getElementById("quote-charge").style.display = "none";
}

//When the window is resized
window.onresize = function () {
    UpdateWidthText();
}
//#endregion

//#region Created methods
//Update text that shows the size of the screen
function UpdateWidthText() {
    document.getElementById("screen").innerHTML = "Screen size is : " + window.innerWidth;
}

//Show some elements and change the Quote from each person
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

//Scale the image from the quote section
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

    //A function inside a function to create the animation
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

const productObj = {
    one: false,
    two: false,
    three: false,
    colorOne: 0,
    colorTwo: 0,
    colorThree: 0,
    posOne: 27,
    posTwo: 27,
    posThree: 27,
    marginOne: -27,
    marginTwo: -27,
    marginThree: -27
};

function ShowServiceText(productNumber) {
    //Search for elements
    let productOneTxt = document.getElementById("product-one-txt");
    let productTwoTxt = document.getElementById("product-two-txt");
    let productThreeTxt = document.getElementById("product-three-txt");
    //Show intervals
    let showIntervalOne, showIntervalTwo, showIntervalThree;
    let marginIntervalOne, marginIntervalTwo, marginIntervalThree;
    //Hide intervals
    let hideMarginOne, hideMarginTwo, hideMarginThree;
    let hideColorOne, hideColorTwo, hideColorThree;
    let hideTextOne, hideTextTwo, hideTextThree;

    //Hide Logic
    if (window.innerWidth <= 576) {
        console.log("Product number is " + productNumber);
        //Show Logic
        switch (productNumber) {
            case 1:
                productObj.one = !productObj.one;
                productObj.two = false;
                productObj.three = false;

                if (productObj.one) {
                    marginIntervalOne = setInterval(AnimateMargin, 10);
                    showIntervalOne = setInterval(ShowText, 25);
                } else {
                    //Animation's interval
                    hideMarginOne = setInterval(HideMargin, 10);
                }
                /*                 if (productObj.two) {
                                    //Animation's interval
                                    hideMarginTwo = setInterval(HideMargin, 10);
                                }
                                if (productObj.three) {
                                    //Animation's interval
                                    hideMarginThree = setInterval(HideMargin, 10);
                                } */
                hideMarginTwo = setInterval(HideMargin, 10);
                hideMarginThree = setInterval(HideMargin, 10);
                break;
            case 2:
                productObj.two = !productObj.two;
                productObj.one = false;
                productObj.three = false;
                if (productObj.two) {
                    marginIntervalTwo = setInterval(AnimateMargin, 10);
                    showIntervalTwo = setInterval(ShowText, 25);
                } else {
                    //Animation's interval
                    hideMarginTwo = setInterval(HideMargin, 10);
                }

                hideMarginOne = setInterval(HideMargin, 10);
                hideMarginThree = setInterval(HideMargin, 10);
                break;
            case 3:
                productObj.three = !productObj.three;
                productObj.one = false;
                productObj.two = false;
                if (productObj.three) {
                    marginIntervalThree = setInterval(AnimateMargin, 10);
                    showIntervalThree = setInterval(ShowText, 25);
                } else {
                    //Animation's interval
                    hideMarginThree = setInterval(HideMargin, 10);
                }

                hideMarginTwo = setInterval(HideMargin, 10);
                hideMarginOne = setInterval(HideMargin, 10);
                break;
        }
    }

    //Show functions
    function ShowText() {
        if (productObj.one == true) {
            if (productObj.posOne < 37 && productObj.colorOne < 1) {
                productObj.colorOne += 0.1;
                productObj.posOne += 1;
                productOneTxt.style.color = "rgba(0, 0, 0," + productObj.colorOne + " )";
                productOneTxt.style.height = productObj.posOne + 'vw';
            } else {
                clearInterval(showIntervalOne);
            }
        } else if (productObj.two == true) {
            if (productObj.posTwo < 37 && productObj.colorTwo < 1) {
                productObj.colorTwo += 0.1;
                productObj.posTwo += 1;
                productTwoTxt.style.color = "rgba(0, 0, 0," + productObj.colorTwo + " )";
                productTwoTxt.style.height = productObj.posTwo + 'vw';
            } else {
                clearInterval(showIntervalTwo);
            }
        } else if (productObj.three == true) {
            if (productObj.posThree < 37 && productObj.colorThree < 1) {
                productObj.colorThree += 0.1;
                productObj.posThree += 1;
                productThreeTxt.style.color = "rgba(0, 0, 0," + productObj.colorThree + " )";
                productThreeTxt.style.height = productObj.posThree + 'vw';
            } else {
                clearInterval(showIntervalThree);
            }
        }
    }

    function AnimateMargin() {
        if (productObj.one == true) {
            if (productObj.marginOne < -0.1) {
                productObj.marginOne += 1;
                productOneTxt.style.marginTop = productObj.marginOne + 'vw';
            } else {
                clearInterval(marginIntervalOne);
            }
        } else if (productObj.two == true) {
            if (productObj.marginTwo < -0.1) {
                productObj.marginTwo += 1;
                productTwoTxt.style.marginTop = productObj.marginTwo + 'vw';
            } else {
                clearInterval(marginIntervalTwo);
            }
        } else if (productObj.three == true) {
            if (productObj.marginThree < -0.1) {
                productObj.marginThree += 1;
                productThreeTxt.style.marginTop = productObj.marginThree + 'vw';
            } else {
                clearInterval(marginIntervalThree);
            }
        }
    }

    //Hide functions
    function HideMargin() {
        if (productObj.one == false) {
            if (productObj.marginOne >= -27) {
                productObj.marginOne -= 1;
                productOneTxt.style.marginTop = productObj.marginOne + 'vw';
            } else {
                clearInterval(hideMarginOne);
            }
        }

        if (productObj.two == false) {
            if (productObj.marginTwo >= -27) {
                productObj.marginTwo -= 1;
                productTwoTxt.style.marginTop = productObj.marginTwo + 'vw';
                console.log(productObj.marginTwo);
            } else {
                clearInterval(hideMarginTwo);
            }
        }

        if (productObj.three == false) {
            if (productObj.marginThree >= -27) {
                productObj.marginThree -= 1;
                productThreeTxt.style.marginTop = productObj.marginThree + 'vw';
            } else {
                clearInterval(hideMarginThree);
            }
        }
    }

    function HideColor() {
        if (productObj.one == true) {
            console.log(productObj.colorOne);
            clearInterval();
        } else if (productObj.two == true) {
            console.log(productObj.colorTwo);
            clearInterval();
        } else if (productObj.three == true) {
            console.log(productObj.colorThree);
            clearInterval();
        }
    }

    function HideText() {
        if (productObj.one == true) {
            console.log(productObj.posOne);
            clearInterval();
        } else if (productObj.two == true) {
            console.log(productObj.posTwo);
            clearInterval();
        } else if (productObj.three == true) {
            console.log(productObj.posThree);
            clearInterval();
        }
    }

    console.log(productObj.two);
}
//#endregion
