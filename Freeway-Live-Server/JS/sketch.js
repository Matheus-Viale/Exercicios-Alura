function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  desenhaAtor();
  desenhaCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPartidaCarro();
  verificaColisao();
  marcaPonto();
  incluiPlacar();
}