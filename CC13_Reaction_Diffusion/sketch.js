let grid = [];
let next = [];

function setup() {
    createCanvas(400, 400);
    pixelDensity(1);

    for (let x = 0; x < width; x++) {
        grid[x] = [];
        next[x] = [];
        for (let y = 0; y < height; y++) {
            grid[x][y] = {
                a: random(1),
                b: random(1)
            }
            next[x][y] = {
                a: 0,
                b: 0
            }
        }
    }
}

function draw() {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            next[x][y].a = grid[x][y].a * 0.2;
            next[x][y].b = grid[x][y].b * 1.2;
        }
    }

    loadPixels()
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let pix = (x + y * width) * 4;
            pixels[pix + 0] = floor(next[x][y].a * 255);
            pixels[pix + 1] = 0;
            pixels[pix + 2] = floor(next[x][y].b * 255);
            pixels[pix + 3] = 255;
        }
    }
    updatePixels()

    swap();
}

function swap() {
    let temp = grid;
    grid = next;
    next = temp;
}