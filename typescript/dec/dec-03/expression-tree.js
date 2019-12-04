// * Daily Coding Problem Dec 3rd 2019
var BinaryTree = /** @class */ (function () {
    // * Will only be constructed from the root down. This will only
    // * be called to create the root, then child nodes are appended.
    function BinaryTree(val) {
        var _this = this;
        this.addLeft = function (val) {
            var newChild = new BinaryTree(val);
            newChild.parent = _this;
            _this.leftChild = newChild;
        };
        this.addRight = function (val) {
            var newChild = new BinaryTree(val);
            newChild.parent = _this;
            _this.rightChild = newChild;
        };
        this.value = val;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
    }
    return BinaryTree;
}());
// * An expression must be at least one operator and two args
var constructExpression = function (tree) {
    // * start at root and build up an expression
    if (tree.leftChild.value.kind == "num") {
        return {
            operator: tree.value.value,
            arg1: tree.leftChild.value.value,
            arg2: tree.rightChild.value.value
        };
    }
    else {
        // * kind == "op" not a leaf node
        return {
            operator: tree.value.value,
            arg1: constructExpression(tree.leftChild),
            arg2: constructExpression(tree.rightChild)
        };
    }
};
var evaluateExpression = function (tree) {
    if (tree.leftChild.value.kind === "num") {
        // * Base
        switch (tree.value.value) {
            case "+":
                return (tree.leftChild.value.value +
                    tree.rightChild.value.value);
            case "-":
                return (tree.leftChild.value.value -
                    tree.rightChild.value.value);
            case "*":
                return (tree.leftChild.value.value *
                    tree.rightChild.value.value);
            case "*":
                return (tree.leftChild.value.value *
                    tree.rightChild.value.value);
            default:
                throw new Error("Bad operator");
        }
    }
    else {
        switch (tree.value.value) {
            case "+":
                return (evaluateExpression(tree.leftChild) +
                    evaluateExpression(tree.rightChild));
            case "-":
                return (evaluateExpression(tree.leftChild) -
                    evaluateExpression(tree.rightChild));
            case "*":
                return (evaluateExpression(tree.leftChild) *
                    evaluateExpression(tree.rightChild));
            case "*":
                return (evaluateExpression(tree.leftChild) *
                    evaluateExpression(tree.rightChild));
            default:
                throw new Error("Bad operator");
        }
    }
};
var testExpressionTree = function () {
    var expressionTree = new BinaryTree({ value: "*", kind: "op" });
    expressionTree.addLeft({ value: "+", kind: "op" });
    expressionTree.addRight({ value: "+", kind: "op" });
    expressionTree.leftChild.addLeft({ value: 3, kind: "num" });
    expressionTree.leftChild.addRight({ value: 2, kind: "num" });
    expressionTree.rightChild.addLeft({ value: 4, kind: "num" });
    expressionTree.rightChild.addRight({ value: 5, kind: "num" });
    var result = evaluateExpression(expressionTree);
    var expectedResult = 45;
    console.log(result === expectedResult ? "Passed" : "Failed");
};
testExpressionTree();
