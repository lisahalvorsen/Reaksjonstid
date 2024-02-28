// Model
const lamps = 25;
let html = '';
let lampElements = null;
let startTime = 0;
let finishTime = 0;
let spentMilliseconds = 0;
let spentSeconds = 0;
let firstClick = true


// View 
updateView();

function updateView() {
    document.getElementById('app').innerHTML = /*Html*/`
    <div id="container">
    <div id="lamp"></div>
    </div>
    <div id="display-time">Du har brukt ${spentSeconds} sekunder</div>
    `;
    console.log("Du har brukt " + spentSeconds + " sekunder");
    drawLamps();
    litRandomLamp();
}

// Controller

function drawLamps() {
    html = '';
    for (let i = 0; i < lamps; i++) {
        html += `<div class="lamp"></div>`;
    }
    document.getElementById('lamp').innerHTML = html;
    lampElements = document.querySelectorAll('.lamp');
}

function litRandomLamp() {
    const selectedLampIndex = Math.floor(Math.random() * lamps);
    lampElements[selectedLampIndex].classList.add('light-on');
    lampElements[selectedLampIndex].onclick = function () { stopTime() }; // gjør at kun den gule lampa blir klikkbar
}

function stopTime() {
    if (firstClick) {
        startTime = new Date().getTime();
    }
    else {
        finishTime = new Date().getTime();
        spentMilliseconds = Math.floor(finishTime - startTime);
        spentSeconds = spentMilliseconds / 1000;
    }
    firstClick = !firstClick;
    updateView();
}