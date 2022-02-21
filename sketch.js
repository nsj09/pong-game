//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200
let diametro = 15;
let raio = diametro / 2;


//variaveis da velocidade da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

// variaveis da minha raquete
let xMinhaRaquete = 5;
let yMinhaRaquete = 150;

//comprimento e altura da bolinha
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis da raquete do oponete
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xMinhaRaquete, yMinhaRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoMinhaRaquete();
  movimentoRaqueteOpenete();
  colisaoRaqueteBiblioteca(xMinhaRaquete, yMinhaRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  
  incluirPlacar();
  verificaPontos();
}

function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
    xBolinha += velocidadeXbolinha;
    yBolinha += velocidadeYbolinha;
}

function verificaColisaoBorda(){
   if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXbolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYbolinha *= -1
  } 
}

function mostraRaquete(x , y){
   rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentoMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yMinhaRaquete -=10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yMinhaRaquete +=10;
  }
}

function movimentoRaqueteOpenete(){
 velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 100;
  yRaqueteOponente += velocidadeYOponente;
}

function colisaoRaqueteBiblioteca(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXbolinha *= -1;
    }
}

function incluirPlacar(){
  stroke(255)
  textSize(16);
  textAlign(CENTER);
  fill(color(255, 140, 0));
  rect(150, 10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10,40,20);
  fill(255);
  text(pontosDoOponente, 470, 26)
  }

function verificaPontos(){
  if(xBolinha > 590){
    meusPontos +=1;
  }
    if(xBolinha < 10){
    pontosDoOponente +=1;
  }
}







