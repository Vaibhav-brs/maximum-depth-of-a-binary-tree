class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function maxDepth() {
    const input = document.getElementById("tree").value.trim();
    const values = input.split(",").map(val => val.trim() === "null" ? null : parseInt(val.trim()));
  
    const root = buildTree(values);
    const depth = maxDepthOfBinaryTree(root);
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<strong>Maximum Depth:</strong> " + depth;
  }
  
  function buildTree(values) {
    if (!values.length) return null;
  
    const root = new TreeNode(values[0]);
    const queue = [root];
    let i = 1;
  
    while (queue.length && i < values.length) {
      const current = queue.shift();
  
      if (values[i] !== null) {
        current.left = new TreeNode(values[i]);
        queue.push(current.left);
      }
      i++;
  
      if (i < values.length && values[i] !== null) {
        current.right = new TreeNode(values[i]);
        queue.push(current.right);
      }
      i++;
    }
  
    return root;
  }
  
  function maxDepthOfBinaryTree(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepthOfBinaryTree(root.left), maxDepthOfBinaryTree(root.right));
  }
  