let cols, rows;
let scl = 20;
let w = 2000;
let h = 1000;
let flying = 0;
let terrain = [];

function setup() {
    createCanvas(1200, 800, WEBGL);
    cols = w / scl;
    rows = h / scl;

    for (let x = 0; x < cols; x++) {
        terrain[x] = [];
        for (let y = 0; y < rows; y++) {
            terrain[x][y] = 0;
        }
    }
}

function draw() {
    flying -= 0.01;

    let yoff = flying;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
            xoff += 0.1;
        }
        yoff += 0.1;
    }

    background(51);
    stroke(255);
    noFill();

    rotateX(PI / 3);
    translate(-w / 2, -h / 2);

    for (let y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
        endShape();
    }
}