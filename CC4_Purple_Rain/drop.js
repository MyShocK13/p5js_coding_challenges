function drop() {
    this.x = random(width);
    this.y = random(-500, -100);
    this.z = random(0, 20);
    this.ySpeed = map(this.z, 0, 20, 1, 5);
    this.length = map(this.z, 0, 20, 10, 20);

    this.fall = function () {
        this.y += this.ySpeed;
        this.ySpeed += 0.1;

        if (this.y > height) {
            this.y = random(-500, -100);
            this.ySpeed = map(this.z, 0, 20, 1, 5);
        }
    }

    this.show = function () {
        let thick = map(this.z, 0, 20, 1, 3);
        strokeWeight(thick);
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + this.length);
    }
}
