"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        var _this = this;
        this.push = function (val) {
            _this.items.push(val);
        };
        this.pop = function () {
            return _this.items.pop();
        };
        this.isEmpty = function () {
            return _this.items.length === 0;
        };
        this.items = new Array();
    }
    return Stack;
}());
exports["default"] = Stack;
