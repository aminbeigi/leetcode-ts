function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let maxDepth = 0;

    const queue: [TreeNode, number][] =[[root, 0]];
    while (queue.length > 0) {
        let [node, depth] = queue.shift();

        depth++;
        maxDepth = Math.max(maxDepth, depth);
        if (node.left) {
            queue.push([node.left, depth]);
        }

        if (node.right) {
            queue.push([node.right, depth]);
        }
    }

    return maxDepth;
};


function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
}
