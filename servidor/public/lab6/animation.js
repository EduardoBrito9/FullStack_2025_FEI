const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = '../lab3/img&text/java.png'; 

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

img.onload = () => {
  desenhar();
};

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const imgWidth = 60;
  const imgHeight = 60;

  const x = Math.min(Math.max(mouseX, imgWidth / 2), canvas.width - imgWidth / 2);
  const y = Math.min(Math.max(mouseY, imgHeight / 2), canvas.height - imgHeight / 2);

  ctx.drawImage(img, x - imgWidth / 2, y - imgHeight / 2, imgWidth, imgHeight);
  requestAnimationFrame(desenhar);
}

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

canvas.addEventListener('mouseleave', () => {
  if (mouseX < 0) mouseX = 0;
  if (mouseY < 0) mouseY = 0;
  if (mouseX > canvas.width) mouseX = canvas.width;
  if (mouseY > canvas.height) mouseY = canvas.height;
});
