let ship;
let flowers = [];
let drops = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    for (var i = 0; i < 6; i++) {
        flowers[i] = new Flower(i * 80 + 80, 60);
    }
}

function draw() {
    background(51);
    ship.show();
    ship.move();

    for (var i = drops.length - 1; i >= 0 ; i--) {
        drops[i].show();
        drops[i].move();

        for (var j = 0; j < flowers.length; j++) {
            if (drops[i].hits(flowers[j])) {
                flowers[j].grow();
                drops[i].evaporate();
            }
        }

        if (drops[i].toDelete) {
            drops.splice(i, 1);
        }
    }

    let edge = false;

    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].move();
        if (flowers[i].x > width || flowers[i].x < 0) {
            edge = true;
        }
    }

    if (edge) {
        for (var i = 0; i < flowers.length; i++) {
            flowers[i].shiftDown();
        }
    }
}

function keyPressed() {
    if (key === ' ') {
        let drop = new Drop(ship.x, height);
        drops.push(drop);
    }

    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}

function keyReleased() {
    if (key != ' ') {
        ship.setDir(0);
    }
}
