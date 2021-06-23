//código do ator e placar

//variáveis do placar
let meusPontos = 0;

//variáveis do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;

function desenhaAtor(){
image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if (podeSeMover("baixo")){
        yAtor += 3;
      }
    }
    if (keyIsDown(LEFT_ARROW)){
      if (podeSeMover("esquerda")){
        xAtor -= 3;
      }
    }
    if (keyIsDown(RIGHT_ARROW)){
      if (podeSeMover("direita")){
        xAtor += 3;
      }
    }
}

function verificaColisao(){
  for (let i = 0; i < xCarro.length; i++){
   colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 10)
    if (colisao){
      colidiu();
      somColisao.play();
    }
  }
}

function colidiu(){
  yAtor = 370;
  xAtor = 100;
  meusPontos = 0;
  velocidadeCarro = [2.5, 3.5, 6, 4, 5, 7];
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    xAtor = 100;
    yAtor = 380;
    somPontos.play()
    for (let i = 0; i < xCarro.length; i++){
      velocidadeCarro[i] +=0.2;
    }
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10 , 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
}

function podeSeMover(direcao){
  if (direcao == "direita"){
    if (xAtor < 480){
      return true;
    }
  }
  if (direcao == "esquerda"){
    if (xAtor > 10){
      return true;
    }
  }
  if (direcao == "baixo"){
    if (yAtor < 390){
      return true;
    }
  }
}