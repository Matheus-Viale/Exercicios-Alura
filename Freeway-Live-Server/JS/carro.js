//código do carro

let xCarro = [-100, -100, -100, 600, 600, 600];
let yCarro = [40, 96, 150, 210, 260, 315];
let velocidadeCarro = [2.5, 3.5, 6, 4, 5, 7];
let comprimentoCarro = 50;
let alturaCarro = 40;

function desenhaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < velocidadeCarro.length; i++){
    if (i < 3) {
       xCarro[i] += velocidadeCarro[i];
    } else if (i >= 3) {
        xCarro[i] -= velocidadeCarro[i];
    }
  }
}
function voltaPartidaCarro(){
  for (let i = 0; i < xCarro.length; i++){
    if (i < 3){
      if (xCarro[i] > 530){
        xCarro[i] = -100;
      }
    } else if (i >=3){
        if (xCarro[i] < -30){
        xCarro[i] = 600;
        }
      }
  }
}