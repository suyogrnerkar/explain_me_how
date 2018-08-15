function bfs(root) {
  if (root == null) {
    return 0;
  }

  let queue = [];
  queue.push(root);

  while (queue.length != 0) {
    let len = queue.length;

    for (i = 0; i < len; i++) {

      let node = queue.shift();

      if (node.lChild != null) {
        queue.push(node.lChild);
      }

      if (node.rChild != null) {
        queue.push(node.rChild);
      }
      console.log(node.value);
    }
    console.log("--------------------")
  }
}


function Tree() {
  this.root = null;

  function Node(v, l, r) {
    if (((typeof v === 'number')) && ((l != null && l instanceof Tree.Node) || l === null) && ((r != null && r instanceof Tree.Node) || r === null)) {
      this.value = v;
      this.lChild = l;
      this.rChild = r;
    } else if (((typeof v === 'number')) && l === undefined && r === undefined) {
      this.value = v;
      this.lChild = null;
      this.rChild = null;
    } else
    throw new Error('invalid input arguments');
  }

  Tree.Node = Node;
}

Tree.prototype.InsertNode = function (value) {
  if (typeof value === 'number')
    this.root = this.InsertNodeUtil(value, this.root);
  else
    throw new Error('invalid input arguments');
};

Tree.prototype.InsertNodeUtil = function (value, node) {
  if (node === null) {
    node = new Tree.Node(value, null, null);
  } else {
    if (node.value > value) {
      node.lChild = this.InsertNodeUtil(value, node.lChild);
    } else {
      node.rChild = this.InsertNodeUtil(value, node.rChild);
    }
  }
  return node;
};


let tree = new Tree();
tree.InsertNode(4);
tree.InsertNode(2);
tree.InsertNode(3);
tree.InsertNode(1);
tree.InsertNode(6);
tree.InsertNode(5);
tree.InsertNode(7);

bfs(tree.root);
