function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
Canvas = createCanvas(640,420);
Canvas.center();
}
function draw(){
image(img,0,0,640,420);

}