class Graph {
    constructor() {
        this.nodes = [];
        this.graph = {};
        this.start = null;
        this.end = null;
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

    setStart(actor) {
        this.start = this.graph[actor];
        return this.start;
    }

    setEnd(actor) {
        this.end = this.graph[actor];
        return this.end;
    }

    reset() {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].searched = false;
            this.nodes[i].parent = null;
        }
    }
}