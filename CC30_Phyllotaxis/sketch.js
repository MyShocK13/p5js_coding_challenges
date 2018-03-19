let n = 0;
let c = 4;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    colorMode(HSB);
    background(0);
}

function draw() {
    let a = n * 137.3;
    let r = c * sqrt(n);

    let x = r * cos(a) + width / 2;
    let y = r * sin(a) + height / 2;

    fill(a % 256, 255, 255);
    noStroke();
    ellipse(x, y, 4, 4);
    n++;
}