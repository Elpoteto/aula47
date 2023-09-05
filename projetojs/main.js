var botao1;
var botao2;
var box1,box2
var mafia, mafiaimg

function preload(){
//mafiaimg = loadImage('imagens/mafioso.jpg')
}

function setup(){
 createCanvas(1280, 570)
//botao1 = createSprite(200,200,250,70)
//botao2 = createSprite(200,300,250,70)

box1 = createSprite(850,400,900,500)
box2 = createSprite(850,100,900,100)
//box1.addImage('imagem', mafiaimg)
//box1.scale = 0.1

}

function draw(){
background('black')

textSize(20)
text('misao', 250, 250)

drawSprites()
}

function mousePressed(){

}
