let data;
let graph;

function preload() {
    data = loadJSON('kevin-bacon.json');
}

function setup() {
    graph = new Graph();
    noCanvas();

    let movies = data.movies;

    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i].title;
        let cast = movies[i].cast;
        let movieNode = new Node(movie);
        graph.addNode(movieNode);

        for (let j = 0; j < cast.length; j++) {
            let actor = cast[j];
            let actorNode = graph.getNode(actor);
            if (actorNode == undefined) {
                actorNode = new Node(actor);
            }
            graph.addNode(actorNode);
            movieNode.addEdge(actorNode);
        }
    }
    console.log(graph);
}