function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return root;
    }
    const stack: TreeNode[] = [root];
    while (stack.length !== 0) {
        const node = stack.pop()!;

        const left = node.left;
        node.left = node.right;
        node.right = left;

        if (node.left !== null) {
            stack.push(node.left);
        }

        if (node.right !== null) {
            stack.push(node.right);
        }
    }
    return root;
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return root;
    }
    const queue: TreeNode[] = [root];
    while (queue.length != 0) {
        const node = queue.shift()!;

        const left = node.left;
        node.left = node.right;
        node.right = left;

        if (node.left != null) {
            queue.push(node.left);
        }

        if (node.right != null) {
            queue.push(node.right);
        }
    }
    return root;
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }
    const left = root.left;
    root.left = root.right;
    root.right = left;
    invertTree(root.left);
    invertTree(root.right);
    return root;
}
