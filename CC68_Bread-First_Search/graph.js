class Graph {
    constructor() {
        this.nodes = [];
        this.graph = {};
    }

    addNode(n) {
        this.nodes.push(n);
        let title = n.value;
        this.graph[title] = n;
    }

    getNode(actor) {
        let n = this.graph[actor];
        return n;
    }
}