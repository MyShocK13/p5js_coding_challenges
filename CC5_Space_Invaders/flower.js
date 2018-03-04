function Flower(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;

    this.xDir = 1;

    this.show = function () {
        noStroke();
        fill(255, 0, 200, 150);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.grow = function () {
        this.r += 2;
    }

    this.move = function () {
        this.x += this.xDir;
    }

    this.shiftDown = function () {
        this.xDir *= -1;
        this.y += this.r;
    }
}
