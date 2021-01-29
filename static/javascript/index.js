//fields -------------------------------------------------
const $btnStart = document.querySelector('#btnStart');
const $btnReset = document.querySelector('#btnReset');

const $points = document.querySelector('#currentPoint');

const $timerMinute = document.querySelector('#timeLeft_minute');
const $timerSecond = document.querySelector('#timeLeft_second');

const $gameArea = document.querySelector('#gameArea');
const $results = document.querySelector('#resultsList');
const $resultPreloader = document.querySelector('#resultPreloader');

const $saveForm = new bootstrap.Modal(document.querySelector('#saveProgressForm'), { keyboard: false });
const $resultForm = document.querySelector('#resultForm');
const $resultFormPoint = $resultForm.querySelector('#staticPoint');
const $resultFormName = $resultForm.querySelector('#inputName');
const $resultFormSaveBtn = document.querySelector('#resultFormSaveBtn');

// data --------------------------------------------------
let minutes = 1;
let seconds = 0;
let counter;

let isGameStarted = false;
let isNewGame = true;

let cellQuantity;
let cubeList;
let cubeInArea = 0;

let points = 0;

// function ----------------------------------------------
function startStopGame() {
    if (isGameStarted) {
        clearInterval(counter);
        $btnStart.innerText = 'RESUME';

        $gameArea.removeEventListener('click', removeCube);
    } else {
        if (isNewGame) {
            generateGameArea();
            isNewGame = false;
        }

        counter = setInterval(nextTime, 1000);
        $btnStart.innerText = 'PAUSE';

        $gameArea.addEventListener('click', removeCube);
    }
    isGameStarted = !isGameStarted;
    $btnReset.classList.toggle('disabled');
}

function endGame() {
    clearInterval(counter);
    $btnStart.classList.add('disabled');
    $btnReset.classList.remove('disabled');
    $gameArea.removeEventListener('click', removeCube);

    $resultFormPoint.value = points;
    $saveForm.show();
}

function nextTime() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(counter);
            endGame();
        } else {
            $timerMinute.innerText = --minutes;
            $timerSecond.innerText = (seconds = 59);
        }
    } else {
        $timerSecond.innerText = (--seconds).toString().padStart(2, '0');
    }
}

function resetGame() {
    minutes = 1;
    seconds = 0
    $timerMinute.innerText = '1';
    $timerSecond.innerText = '00';

    $points.innerText = '0';
    points = 0;

    $btnStart.innerText = 'START';
    $gameArea.innerHTML = '';
    isGameStarted = false;
    isNewGame = true;
    $btnStart.classList.remove('disabled');
}


function renderCube() {
    const cubeObj = new Cube();
    let position = Math.floor(Math.random() * cellQuantity);

    while (cubeList[position]) {
        position++;

        if (position >= cellQuantity - 1) {
            position = position - cellQuantity;
        }
    }

    cubeList[position] = cubeObj;
    $gameArea.querySelector(`div[data-number='${position}']`).appendChild(cubeObj.getCube(position));
    cubeInArea++;
};

function removeCube(event) {
    const target = event.target;

    if (!target.classList.contains('cube')) return;

    const number = target.dataset.number;
    const point = cubeList[number].point;
    target.remove();
    cubeList[number] = null;
    cubeInArea--;

    if (cubeInArea === 0) {
        generateCubes(1, 2);
    } else {
        generateCubes(0, 2);
    }

    $points.innerText = (points += point);
}

function generateCubes(min, max) {
    const cubeQuantity = Math.floor(Math.random() * (max - min + 1)) + min;

    for (let i = 0; i < cubeQuantity; i++) {
        renderCube();
    }
}


function generateGameArea() {
    let cellWidth = 50;
    let cellHeight = 50;

    const gameFieldWidth = $gameArea.clientWidth;
    const gameFieldHeight = $gameArea.clientHeight;

    const columnQuantity = Math.round(gameFieldWidth / cellWidth);
    const rowQuantity = Math.round(gameFieldHeight / cellHeight);
    cellQuantity = columnQuantity * rowQuantity;

    cubeList = new Array(cellQuantity);

    cellWidth = gameFieldWidth / columnQuantity;
    cellHeight = gameFieldHeight / rowQuantity;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < cellQuantity; i++) {
        const cell = document.createElement('div');
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        cell.classList.add('position-relative');
        cell.setAttribute('data-number', i);

        fragment.appendChild(cell);
    }

    $gameArea.appendChild(fragment);

    generateCubes(1, 5);
}


function renderResult(resultList) {
    $results.innerHTML = resultList.reduce((acc, value) => acc += value === null ? '' : `<li class="list-group-item"><p class="mb-0">${value.name} - ${value.point}</p></li>`, '');
}

function saveResult(event) {
    event.preventDefault();

    const data = {
        username: $resultFormName.value,
        gameResult: $resultFormPoint.value
    };

    fetch('http://localhost:9090/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(res => {
            renderResult(res);
            $resultForm.reset();
            $saveForm.hide();
        });
}

// event --------------------------------------------------------
$btnStart.addEventListener('click', startStopGame);

$btnReset.addEventListener('click', resetGame);


// results -----------------------------------------------------
fetch('http://localhost:9090/results')
    .then(res => res.json())
    .then(res => {
        $resultPreloader.hidden = true;
        $results.hidden = false;
        renderResult(res);
    });

$resultFormSaveBtn.addEventListener('click', saveResult);

// classes -------------------------------------------------------
class Cube {
    constructor() {
        const cubeType = Math.floor(Math.random() * 4) + 1;
        this.point = cubeType * cubeType;
        this.cell = document.createElement('div');
        this.cell.classList.add('cube', `cube-${cubeType}`);
    }

    getCube(number) {
        this.cell.setAttribute('data-number', number);

        return this.cell;
    }
}