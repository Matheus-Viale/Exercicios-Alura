//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do movimento da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//variáveis do oponente
let xOponente = 585;
let yOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

let colidiu = false;

//variáveis dos pontos
let meusPontos = 0;
let pontosOponente = 0;

//Sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("../sounds/trilha.mp3");
  ponto = loadSound("../sounds/ponto.mp3");
  raquetada = loadSound("../sounds/raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  desenhaRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  desenhaRaquete(xOponente, yOponente);
  movimentaOponente();
  colisaoRaqueteBiblioteca(xOponente, yOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;

}

function verificaColisaoBorda(){
    if (xBolinha + raio > width || 
      xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    
}
    if (yBolinha + raio > height || 
        yBolinha - raio < 0){
      velocidadeYBolinha *= -1;   
}

}

function desenhaRaquete(x,y){
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 8;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 8;
  }
}

function colisaoRaqueteBiblioteca(x, y){
 colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaOponente(){
  velocidadeYOponente = yBolinha - yOponente - larguraRaquete / 2 - 30;
  yOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
}

function calculaChanceDeErrar(){
  if (pontosOponente >= meusPontos){
    chanceDeErrar += 1;
    if (chanceDeErrar >=49){
      chanceDeErrar = 50
    }
  } else {
      chanceDeErrar -= 1;
      if (chanceDeErrar <= 25){
      chanceDeErrar = 25;
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
  fill(color(255, 140, 0));
  rect(450, 10 , 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1
    ponto.play();
  }
}  