let e1, e2;
let img;
let selection;

function preload() {
  e1 = loadImage("emojis/Unknown.jpeg");
  e2 = loadImage("emojis/Unknown-1.jpeg");
  img = loadImage("images/monalisa.jpeg");
}

function setup() {
  createCanvas(400, 400);
  selection = createSelect();
  selection.position(0, 0);
  selection.option('emoji I');
  selection.option('emoji II');
  selection.option('suprise');

}
function draw() {
  background(255);
  let x = selection.selected();
  if (x === 'emoji I'){
    image(e1, 45, 100);
  } else if (x === 'emoji II'){
    image(e2, 67, 80);
  } else if (x === 'suprise'){
    image(img, 86, 50);
  }
  

 
  
  
}
