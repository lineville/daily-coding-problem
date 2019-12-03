var Queue = /** @class */ (function () {
    function Queue(vals) {
        var _this = this;
        this.enqueue = function (val) {
            _this.queue.push(val);
        };
        this.dequeue = function () {
            if (_this.isEmpty()) {
                throw new Error("Empty queue");
            }
            return _this.queue[0];
        };
        this.peek = function () {
            if (_this.isEmpty()) {
                throw new Error("Stack is empty");
            }
            return _this.queue[0];
        };
        this.clear = function () {
            _this.queue = [];
        };
        this.isEmpty = function () {
            return _this.queue.length === 0;
        };
        this.max = function () {
            if (_this.isEmpty()) {
                throw new Error("Stack is empty");
            }
            var max = _this.queue[0];
            for (var i = 0; i < _this.queue.length; i++) {
                if (_this.queue[i] > max) {
                    max = _this.queue[i];
                }
            }
            return max;
        };
        this.print = function () {
            for (var i = 0; i < _this.queue.length; i++) {
                console.log(_this.queue[i]);
            }
        };
        this.queue = vals ? vals : [];
    }
    return Queue;
}());
