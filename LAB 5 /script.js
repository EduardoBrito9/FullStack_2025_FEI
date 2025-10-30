let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

function quadrados(cor, tamanho, x, y){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, tamanho, tamanho)
    ctx.fill();
    ctx.closePath();
}

quadrados("blue", 50, 0, 0)
quadrados("red", 50, 250, 0)
quadrados("red", 35, 115, 150) 
quadrados(50,"#00ffffff",-25,125);
quadrados(30,"#00ffffff",275,135);


function linhas(moveToX, moveToY, lineToX, lineToY, cor, lineWidth){
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(lineToX, lineToY)
    ctx.stroke();
    ctx.closePath();
}

quadradosLivres(0, 125, 25, 50, "#00f2ffff") //ordem de precedencia para a linha verde cortar a caixa azul
quadradosLivres(275, 137, 25, 25, "#00f2ffff") //ordem de precedencia para a linha verde cortar a caixa azul

linhas(0, 0, 150, 150, "blue", 1)
linhas(300, 0, 150, 150, "red", 1)
linhas(0, 150, 300, 150, "green", 1)
linhas(150, 150, 150, 290, "gray", 1)

function linhasCurvadas(x, y, raio, cor, anguloInicial, anguloFinal, lineWidth){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = cor;
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);
    ctx.stroke();
    ctx.closePath();
}

linhasCurvadas(150, 150, 65, "green" , 1 * Math.PI, 0 * Math.PI, 1);
linhasCurvadas(150, 150, 87, "green" , 1 * Math.PI, 1.25 * Math.PI, 1);
linhasCurvadas(150, 150, 87, "green" , 1.75 * Math.PI, 0 * Math.PI, 1);
linhasCurvadas(150, 310, 85, "green" , 1 * Math.PI, 1.5 * Math.PI, 1);
linhasCurvadas(150, 320, 75, "green" , 1.5 * Math.PI, 0.5 * Math.PI, 1);


function arcos(x, y, raio, corPreenchimento, corBorda, anguloInicial, anguloFinal, lineWidth){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = corPreenchimento;
    ctx.strokeStyle = corBorda;
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

arcos(150, 110, 18, "#00ffffff", "blue", 0 * Math.PI, 3 * Math.PI, 1);
arcos(70, 225, 18, "#fffb00ff", "green", 0 * Math.PI, 3 * Math.PI, 1);
arcos(225, 225, 18, "#fffb00ff", "green", 0 * Math.PI, 3 * Math.PI, 1);
arcos(150, 310, 50, "#00f2ffff", "green", 0 * Math.PI, 3 * Math.PI, 1);


function quadradosLivres( x, y, largura, altura, corPreenchimento) {
  ctx.beginPath();
  ctx.fillStyle = corPreenchimento;
  ctx.fillRect(x, y, largura, altura);
  ctx.closePath();
}

quadradosLivres(0, 275, 25, 25, "yellow")
quadradosLivres(0, 250, 25, 25, "yellow")
quadradosLivres(25, 275, 25, 25, "yellow")
quadradosLivres(275, 275, 25, 25, "black")
quadradosLivres(250, 275, 25, 25, "black")
quadradosLivres(275, 250, 25, 25, "black")

function escreverTexto(texto, x, y, corTexto, alinhamento) {
  ctx.beginPath();
  ctx.fillStyle = corTexto;
  ctx.font = "20px Arial";
  ctx.textAlign = alinhamento; 
  ctx.fillText(texto, x, y);
  ctx.closePath();
}

escreverTexto("Canvas", 150, 45, "black", "center");


//Canvas casinha
let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

function chaoCasa(cor, x, y, largura, altura){
  ctx2.beginPath();
  ctx2.fillStyle = cor;
  ctx2.fillRect(x, y, largura, altura);
  ctx2.closePath();
}

chaoCasa("darkgray", 0, 220, 300, 300)

function arvores(cor, x, y, largura, altura){
  ctx2.beginPath();
  ctx2.fillStyle = cor;
  ctx2.fillRect(x, y, largura, altura);
  ctx2.closePath();
}

//arvore1
arvores("#6d3c03", 260, 220, 15, 45)
//arvore2
arvores("#6d3c03", 45, 175, 15, 45)

function elipses(x, y, raio, anguloInicial, anguloFinal, corPreenchimento, lineWidth){
// Uma aparentemente cachoeira
  ctx2.beginPath();
  ctx2.lineWidth = lineWidth;
  ctx2.fillStyle = corPreenchimento;
  ctx2.arc(x, y, raio, anguloInicial * Math.PI, anguloFinal * Math.PI);
  ctx2.fill();
  ctx2.closePath();
}

elipses(10, 215, 35, 0, 2, "#5b8cd6ff", 1);
elipses(118, 293.5, 35, 0, 2, "#5b8cd6ff", 1);
//sol
elipses(225, 65, 40, 0, 2, "#fbff13", 1);
//folha das arvores
elipses(267, 210, 22, 0, 2, "green", 1);
elipses(52, 165, 22, 0, 2, "green", 1); 

//parte da coluna da cachoeira
function colunaCachoeira(x, y, largura, altura, cor){
  ctx2.beginPath();
  ctx2.fillStyle = cor;
  ctx2.fillRect(x, y, largura, altura);
  ctx2.closePath();
}

colunaCachoeira(0, 215, 45, 300, "#5b8cd6ff");
colunaCachoeira(-26, 259, 150, 300, "#5b8cd6ff");

function casa(x, y, largura, altura, cor){
  ctx2.beginPath();
  ctx2.fillStyle = cor;
  ctx2.fillRect(x, y, largura, altura);
  ctx2.closePath();
}
//casa
casa(110, 130, 90, 90, "#884b06ff");
//porta
casa(145, 175, 20, 45, "#472701ff");
//janelas
casa(119.5, 150, 25, 25, "#25d3f1ff");
casa(165, 150, 25, 25, "#25d3f1ff");

function telhado(moveToX, moveToY, lineToX1, lineToY1, lineToX2, lineToY2, cor){
  ctx2.beginPath();
  ctx2.moveTo(moveToX, moveToY);
  ctx2.lineTo(lineToX1, lineToY1);
  ctx2.lineTo(lineToX2, lineToY2);
  ctx2.fillStyle = cor;
  ctx2.fill();
  ctx2.closePath();
}

telhado(155, 90, 110, 130, 200, 130, "#ec7e5cff");