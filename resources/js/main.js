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
    //This method includes a reset system called this way
    //So when window resizes styles are reseted
    ShowServiceText(0);
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
    let showTextOne, showTextTwo, showTextThree;
    let showMarginOne, showMarginTwo, showMarginThree;
    let showColorOne, showColorTwo, showColorThree;
    //Hide intervals
    let hideMarginOne, hideMarginTwo, hideMarginThree;
    let hideColorOne, hideColorTwo, hideColorThree;
    let hideTextOne, hideTextTwo, hideTextThree;

    if (window.innerWidth <= 576) {
        //Style is not reseted (when window is resized: reset!)
        productObj.isStyleReseted = false;
        //Show/Hide Logic
        switch (productNumber) {
            case 1:
                productObj.one = !productObj.one;
                productObj.two = false;
                productObj.three = false;
                if (productObj.one) {
                    ShowElementOne();
                } else {
                    HideElementOne();
                }
                //Hide other elements
                HideElementTwo();
                HideElementThree();
                break;
            case 2:
                productObj.two = !productObj.two;
                productObj.one = false;
                productObj.three = false;
                if (productObj.two) {
                    ShowElementTwo();
                } else {
                    HideElementTwo();
                }
                //Hide other elements
                HideElementOne();
                HideElementThree();
                break;
            case 3:
                productObj.three = !productObj.three;
                productObj.one = false;
                productObj.two = false;
                if (productObj.three) {
                    ShowElementThree();
                } else {
                    HideElementThree();
                }
                //Hide other elements
                HideElementOne();
                HideElementTwo();
                break;
            default:
                ResetStyle();
                break;
        }
    } else {
        ResetStyle();
    }

    //Show functions
    function ShowElementOne() {
        showMarginOne = setInterval(ShowMargin, 10);
        showTextOne = setInterval(ShowText, 25);
        showColorOne = setInterval(ShowColor, 30);
    }
    function ShowElementTwo() {
        showMarginTwo = setInterval(ShowMargin, 10);
        showTextTwo = setInterval(ShowText, 25);
        showColorTwo = setInterval(ShowColor, 30);
    }
    function ShowElementThree() {
        showMarginThree = setInterval(ShowMargin, 10);
        showTextThree = setInterval(ShowText, 25);
        showColorThree = setInterval(ShowColor, 30);
    }

    function ShowText() {
        if (productObj.one == true) {
            if (productObj.posOne < 37) {
                productObj.posOne += 1;
                productOneTxt.style.height = productObj.posOne + 'vw';
            } else {
                clearInterval(showTextOne);
            }
        } else if (productObj.two == true) {
            if (productObj.posTwo < 37) {
                productObj.posTwo += 1;
                productTwoTxt.style.height = productObj.posTwo + 'vw';
            } else {
                clearInterval(showTextTwo);
            }
        } else if (productObj.three == true) {
            if (productObj.posThree < 37) {
                productObj.posThree += 1;
                productThreeTxt.style.height = productObj.posThree + 'vw';
            } else {
                clearInterval(showTextThree);
            }
        }
    }

    function ShowColor() {
        if (productObj.one == true) {
            if (productObj.colorOne < 1) {
                productObj.colorOne += 0.1;
                productOneTxt.style.color = "rgba(0, 0, 0," + productObj.colorOne + " )";
            } else {
                clearInterval(showColorOne);
            }
        } else if (productObj.two == true) {
            if (productObj.colorTwo < 1) {
                productObj.colorTwo += 0.1;
                productTwoTxt.style.color = "rgba(0, 0, 0," + productObj.colorTwo + " )";
            } else {
                clearInterval(showColorTwo);
            }
        } else if (productObj.three == true) {
            if (productObj.colorThree < 1) {
                productObj.colorThree += 0.1;
                productThreeTxt.style.color = "rgba(0, 0, 0," + productObj.colorThree + " )";
            } else {
                clearInterval(showColorThree);
            }
        }
    }

    function ShowMargin() {
        if (productObj.one == true) {
            if (productObj.marginOne < -0.1) {
                productObj.marginOne += 1;
                productOneTxt.style.marginTop = productObj.marginOne + 'vw';
            } else {
                clearInterval(showMarginOne);
            }
        } else if (productObj.two == true) {
            if (productObj.marginTwo < -0.1) {
                productObj.marginTwo += 1;
                productTwoTxt.style.marginTop = productObj.marginTwo + 'vw';
            } else {
                clearInterval(showMarginTwo);
            }
        } else if (productObj.three == true) {
            if (productObj.marginThree < -0.1) {
                productObj.marginThree += 1;
                productThreeTxt.style.marginTop = productObj.marginThree + 'vw';
            } else {
                clearInterval(showMarginThree);
            }
        }
    }

    //Hide functions
    function HideElementOne() {
        hideMarginOne = setInterval(HideMargin, 10);
        hideColorOne = setInterval(HideColor, 15);
        hideTextOne = setInterval(HideText, 10);
    }
    function HideElementTwo() {
        hideMarginTwo = setInterval(HideMargin, 10);
        hideColorTwo = setInterval(HideColor, 15);
        hideTextTwo = setInterval(HideText, 10);
    }
    function HideElementThree() {
        hideMarginThree = setInterval(HideMargin, 10);
        hideColorThree = setInterval(HideColor, 15);
        hideTextTwo = setInterval(HideText, 10);
    }

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
        if (productObj.one == false) {
            if (productObj.colorOne > 0) {
                productObj.colorOne -= 0.1;
                productOneTxt.style.color = "rgba(0, 0, 0," + productObj.colorOne + " )";
            } else {
                clearInterval(hideColorOne);
            }
        }
        if (productObj.two == false) {
            if (productObj.colorTwo > 0) {
                productObj.colorTwo -= 0.1;
                productTwoTxt.style.color = "rgba(0, 0, 0," + productObj.colorTwo + " )";
            } else {
                clearInterval(hideColorTwo);
            }
        }
        if (productObj.three == false) {
            if (productObj.colorThree > 0) {
                productObj.colorThree -= 0.1;
                productThreeTxt.style.color = "rgba(0, 0, 0," + productObj.colorThree + " )";
            } else {
                clearInterval(hideColorThree);
            }
        }
    }

    function HideText() {
        if (productObj.one == false) {
            if (productObj.posOne > 27) {
                productObj.posOne -= 1;
                productOneTxt.style.height = productObj.posOne + 'vw';
            } else {
                clearInterval(hideTextOne);
            }
        }
        if (productObj.two == false) {
            if (productObj.posTwo > 27) {
                productObj.posTwo -= 1;
                productTwoTxt.style.height = productObj.posTwo + 'vw';
            } else {
                clearInterval(hideTextTwo);
            }
        }
        if (productObj.three == false) {
            if (productObj.posThree > 27) {
                productObj.posThree -= 1;
                productThreeTxt.style.height = productObj.posThree + 'vw';
            } else {
                clearInterval(hideTextThree);
            }
        }
    }

    function ResetStyle() {
        productObj.one = false;
        productObj.two = false;
        productObj.three = false;
        productObj.colorOne = 0;
        productObj.colorTwo = 0;
        productObj.colorThree = 0;
        productObj.posOne = 27;
        productObj.posTwo = 27;
        productObj.posThree = 27;
        productObj.marginOne = -27;
        productObj.marginTwo = -27;
        productObj.marginThree = -27;

        productOneTxt.style.height = null;
        productOneTxt.style.color = null;
        productOneTxt.style.marginTop = null;

        productTwoTxt.style.height = null;
        productTwoTxt.style.color = null;
        productTwoTxt.style.marginTop = null;

        productThreeTxt.style.height = null;
        productThreeTxt.style.color = null;
        productThreeTxt.style.marginTop = null;
    }
}
//#endregion
