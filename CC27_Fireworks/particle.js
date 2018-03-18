class Particle {
    constructor(x, y, hu, core) {
        this.pos = createVector(x, y);
        this.core = core;
        this.acc = createVector(0, 0);
        this.lifespan = 255;
        this.hu = hu;

        if (this.core) {
            this.vel = createVector(0, random(-17, -8));
        } else {
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(2, 10));
        }
    }

    update() {
        if (!this.core) {
            this.vel.mult(0.9);
            this.lifespan -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    show() {
        colorMode(HSB);
        if (!this.core) {
            strokeWeight(2);
            stroke(this.hu, 255, 255, this.lifespan);
        } else {
            strokeWeight(4);
            stroke(this.hu, 255, 255);
        }
        point(this.pos.x, this.pos.y);
    }

    done() {
        return this.lifespan < 0;
    }
}