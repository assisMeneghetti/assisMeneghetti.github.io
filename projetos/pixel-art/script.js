const input = document.querySelector('#board-size');
let boardSize = 5;
const pixelBoard = document.getElementById('pixel-board');
const buttonVQV = document.getElementById('generate-board');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const color4 = document.querySelector('.color4');
const colorPalette = document.getElementsByClassName('color');
const previousColor = document.getElementsByClassName('selected');
const cleanButtom = document.getElementById('clear-board');

/** Sourse: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript */
function generateColor() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  if (r !== 255) {
    return `rgb(${r}, ${g}, ${b})`;
  }
}

generateColor();

color1.style.backgroundColor = 'rgb(0, 0, 0)';
color2.style.backgroundColor = generateColor();
color3.style.backgroundColor = generateColor();
color4.style.backgroundColor = generateColor();

function colorSelect() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', (event) => {
      previousColor[0].classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}

colorSelect();

function verifyInputs() {
  if (Number.isNaN(Number(boardSize))) {
    alert('Board inválido!');
    boardSize = 5;
  } else if (boardSize < 5) {
    boardSize = 5;
  } else if (boardSize > 50) {
    boardSize = 50;
  }
}
function createBoard() {
  for (let index = 0; index < boardSize; index += 1) {
    const rows = document.createElement('div');
    rows.className = 'rows';
    for (let index2 = 0; index2 < boardSize; index2 += 1) {
      const pixels = document.createElement('div');
      rows.appendChild(pixels);
      pixels.className = 'pixel';
      pixels.style.backgroundColor = 'rgb(255, 255, 255)';
    }
    pixelBoard.appendChild(rows);
  }
}

createBoard();

function deleteBoard() {
  pixelBoard.innerHTML = '';
}

buttonVQV.addEventListener('click', () => {
  boardSize = parseInt(input.value, 10);
  verifyInputs();
  deleteBoard();
  createBoard();
});

function paintPixels(event) {
  const evento = event.target;
  const colorSelected = document.getElementsByClassName('selected')[0];
  evento.style.backgroundColor = colorSelected.style.backgroundColor;
}

pixelBoard.addEventListener('click', paintPixels);

function cleanGrid() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

cleanButtom.addEventListener('click', cleanGrid);
