let cols, rows;
let w = 20;
let grid = [];
let stack = [];
let current;

function setup() {
    createCanvas(800, 800);
    cols = floor(width / w);
    rows = floor(height / w);

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            grid.push(new Cell(i, j));
        }
    }

    current = grid[0];
}

function draw() {
    background(51);

    for (let i in grid) {
        grid[i].show();
    }

    // https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker
    current.visited = true;
    current.highlight();
    // STEP 1
    let next = current.checkNeighbours();

    if (next) {
        next.visited = true;
        // STEP 2
        stack.push(current);
        // STEP 3
        removeWalls(current, next);
        // STEP 4
        current = next;
    } else if (stack.length > 0) {
        current = stack.pop();
    }
}