const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let canvasWidth = (canvas.width = window.innerWidth);
let canvasHeight = (canvas.height = window.innerHeight);
let halfWidth = canvasWidth / 2;
let halfHeight = canvasHeight / 2;
let saveInterval = null;
let saveInterval2 = null;
let v40 = 40;
let gradient = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
gradient.addColorStop('0.25', 'orange');
gradient.addColorStop('0.5', 'cyan');
gradient.addColorStop('0.75', 'lime');

function resize() {
  canvasWidth = canvas.width = window.innerWidth;
  canvasHeight = canvas.height = window.innerHeight;
  halfWidth = canvasWidth / 2;
  halfHeight = canvasHeight / 2;
}

function drawCanvas() {
  saveInterval = setInterval(() => {
    if (v40 <= 1300) {
      drawOnda(halfWidth + v40, halfHeight, halfWidth, halfHeight, true, v40);
      drawOnda(
        halfWidth + v40,
        halfHeight,
        halfWidth - 20,
        halfHeight,
        false,
        v40 + 20
      );

      v40 += 40;
    } else {
      clearInterval(saveInterval);
    }
  }, 100);
}

function drawOnda(x1, y1, x2, y2, orario, radio) {
  ctx.beginPath();
  ctx.strokeStyle = gradient;
  ctx.lineWidth = '3';
  ctx.moveTo(x1, y1);
  ctx.arc(x2, y2, radio, 0, Math.PI * 1, orario);
  ctx.stroke();
  ctx.closePath();
}

drawOnda(halfWidth, halfHeight, halfWidth - 20, halfHeight, false, 20);

document.addEventListener('DOMContentLoaded', e => {
  drawCanvas();
});

window.addEventListener('resize', e => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  saveInterval = null;
  v40 = 40;
  resize();
  drawOnda(halfWidth, halfHeight, halfWidth - 20, halfHeight, false, 20);
  drawCanvas();
});
