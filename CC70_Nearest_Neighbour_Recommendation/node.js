class Node {
    constructor(val) {
        this.value = val;
        this.edges = [];
        this.searched = false;
        this.parent = null;
    }

    addEdge(neighbour) {
        this.edges.push(neighbour);
        neighbour.edges.push(this);
    }

}