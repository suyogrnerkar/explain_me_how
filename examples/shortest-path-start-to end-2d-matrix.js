// Find the distance from start node to end
// node, given paths in a two dimensional array
// 1 : accessible path / valid path
// X : inaccessible path / invalid path
// E : end point / destination node


// This matrix denotes the paths accessible paths form
// a node to another node.
// Given.

let myArr = [
  ['1', '1', '1', '1', '1'],
  ['1', '1', 'X', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['X', '1', 'E', '1', '1'],
  ['1', '1', '1', '1', 'X']
];


// We need node as a data structure to be able to push data
// of current spot into the queue and track current spot in
// 2D array which we arrive at.

class Node {
  constructor(x, y, dist) {
    this.x = x;
    this.y = y;
    this.dist = dist;
  }
}

// BFS : Approach is BFS search on a graph
// Explore all nodes surrounding a node in all
// possible directions.

class BFS {

  findShortestPath(arr, startX, startY) {

    // If the first node is "End Node"/"E",
    // distance from start node : 0
    // so, return 0
    if (arr[startX][startY] == "E") { return 0; }

    let
      queue = [],
      movX = [0, 0, 1, -1],
      movY = [1, -1, 0, 0],
      rows = arr.length,
      cols = arr[0].length,

      // Create a 2D array to keep  marking visited nodes.
      visited = new Array(rows);
    for (let i = 0; i < rows; i++) {
      visited[i] = new Array(cols);
    }

    // Start witht the first node / start node
    // Push it in the queue
    queue.push(new Node(startX, startY, 0));

    //
    while (queue.length != 0) {

      let
        // pull out the node from queue
        // as we would do with the bfs.
        currentNode = queue.shift(),
        currX = currentNode.x,
        currY = currentNode.y,
        currDist = currentNode.dist;

      // Mark the current node as visited.
      visited[currX][currY] = true;

      // If the current node is the end node  "E"
      // return the distance stored in current node.
      // That is the smallest distance from start node
      // to the end node in the given graph.
      if (arr[currX][currY] == 'E') {
        return currDist;
      }

      // Moving to the adjacent nodes in the
      // graph from any given node.
      // Start with the number of possible
      // directions to move.
      for (let i = 0; i < movX.length; i++) {
        let newX = currX + movX[i];
        let newY = currY + movY[i];

        if (newX >= 0 && newX < cols &&
          newY >= 0 && newY < rows &&
          !visited[newX][newY] &&
          arr[newX][newY] != 'X') {
          queue.push(new Node(newX, newY, currDist + 1));
        }
      }
    }
    return -1;
  }
}

let bfs = new BFS();
console.log("Shortest Distance : " + bfs.findShortestPath(myArr, 0, 0));