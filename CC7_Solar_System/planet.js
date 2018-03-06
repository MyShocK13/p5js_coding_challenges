function Planet(dist, radius, orbitSpeed, angle) {
    this.radius = radius;
    this.dist = dist;
    this.angle = angle;
    this.orbitSpeed = orbitSpeed;
    this.planets = [];

    this.spawnMoons = function(total, level) {
        for (let i = 0; i < total; i++) {
            let r = this.radius / (level * 2);
            let o = random(-0.1, 0.1);
            let d = random(100, 200);
            let a = random(TWO_PI);
            this.planets.push(new Planet(d, r / level, o, a));
            if (level < 3) {
                let num = Math.floor(random(0, 4));
                this.planets[i].spawnMoons(num, level + 1);
            }
        }
    }

    this.orbit = function() {
        this.angle += this.orbitSpeed;
        for (var i = 0; i < this.planets.length; i++) {
            this.planets[i].orbit();
        }
    }

    this.show = function() {
        push();
        rotate(this.angle);
        translate(this.dist, 0);
        fill(255);
        ellipse(0, 0, this.radius * 2);
        for (var i = 0; i < this.planets.length; i++) {
            this.planets[i].show();
        }
        pop();
    }
}