ScrollReveal().reveal('.cards');
ScrollReveal().reveal('.cards2', {delay : 500});
ScrollReveal().reveal('.social', {delay : 500});

const myImage1 = document.getElementById("0001");
myImage1.onclick = () => {
    const mySrc = myImage1.getAttribute("src");
    if (mySrc === "image/pata1.png") {
    myImage1.setAttribute("src", "image/pata11.png");
    } else {
    myImage1.setAttribute("src", "image/pata1.png");
    }
};
const myImage2 = document.getElementById("0002");
myImage2.onclick = () => {
    const mySrc = myImage2.getAttribute("src");
    if (mySrc === "image/pata2.png") {
    myImage2.setAttribute("src", "image/pata22.png");
    } else {
    myImage2.setAttribute("src", "image/pata2.png");
    }
};
const myImage3 = document.getElementById("0003");
myImage3.onclick = () => {
    const mySrc = myImage3.getAttribute("src");
    if (mySrc === "image/pata3.png") {
    myImage3.setAttribute("src", "image/pata33.png");
    } else {
    myImage3.setAttribute("src", "image/pata3.png");
    }
};
const myImage4 = document.getElementById("0004");
myImage4.onclick = () => {
    const mySrc = myImage4.getAttribute("src");
    if (mySrc === "image/pata4.png") {
    myImage4.setAttribute("src", "image/pata44.png");
    } else {
    myImage4.setAttribute("src", "image/pata4.png");
    }
};

