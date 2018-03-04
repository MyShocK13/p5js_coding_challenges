let a;
let b;

let sponge = [];

function setup() {
    createCanvas(600, 600, WEBGL);
    b = new Box(0, 0, 0, 200);
    sponge.push(b);
}

function mousePressed() {
    let next = [];
    for (let i = 0; i < sponge.length; i++) {
        let newBoxes = sponge[i].generate();
        next = next.concat(newBoxes);      
    }
    sponge = next;
}

function draw() {
    background(51);
    stroke(255);
    noFill();
    a = 0.01;
    
//    translate(width / 2, height / 2);
    rotateX(frameCount * a);
    rotateY(frameCount * a * 0.4);
    rotateZ(frameCount * a * 0.1);
    for (var i = 0; i < sponge.length; i++) {
        sponge[i].show();
    }
}