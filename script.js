function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function changeCircle(index) {
    let circle = document.querySelector(`#div-${index}`);
    let circleHeight = getRandomInt(20, 200);

    circle.style.height = `${circleHeight}px`;
    circle.style.width = `${circleHeight}px`;

    circle.style.top = `${parseInt(Math.random() * 100)}vh`;
    circle.style.right = `${parseInt(Math.random() * 100)}vw`;
    circle.style["border-width"] = `${circleHeight / 50}px`;

    let red = parseInt(Math.random() * 256);
    let green = parseInt(Math.random() * 256);
    let blue = parseInt(Math.random() * 256);

    circle.style["border-color"] = `rgb(${red}, ${green}, ${blue})`;
    circle.innerHTML = circleHeight;
    circle.style.color = `rgb(${red}, ${green}, ${blue})`;
    circle.style["font-size"] = `${circleHeight / 3}px`;
}

function initialize() {
    let div = document.querySelector(".circle-container");
    for (let i = 0; i < 12; i++) {
        div.innerHTML += `<div id="div-${i}" class="circle"></div>`;

        setInterval(function () {
        changeCircle(i);    
    }, 1000);
    }
    
}