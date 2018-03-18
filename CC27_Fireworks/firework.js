class Firework {
    constructor() {
        this.core = new Particle(random(width), height, this.hu, true);
        this.exploded = false;
        this.particles = [];
        this.hu = random(255);
    }

    update() {
        if (!this.exploded) {
            this.core.applyForce(gravity);
            this.core.update();

            if (this.core.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();

            if (this.particles[i].done()) {
                this.particles.splice(i, 1);
            }

        }
    }

    show() {
        if (!this.exploded) {
            this.core.show();
        }
        for (const particle of this.particles) {
            particle.show();
        }
    }

    explode() {
        for (let i = 0; i < 100; i++) {
            let p = new Particle(this.core.pos.x, this.core.pos.y, this.hu, false);
            this.particles.push(p);
        }
    }

    done() {
        return this.exploded && this.particles.length === 0;

        // if (this.exploded && this.particles.length === 0) {
        //     return true;
        // } else {
        //     return false;
        // }
    }
}