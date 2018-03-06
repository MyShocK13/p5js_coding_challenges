let sun;

function setup() {
    createCanvas(800, 800);
    sun = new Planet(0, 50, 0, random(TWO_PI));
    sun.spawnMoons(5, 1);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    sun.show();
    sun.orbit();
}