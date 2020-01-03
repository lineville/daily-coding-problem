var i = 0;
var procA = function () {
    while (i < 10) {
        console.log("A");
        i++;
        return procB();
    }
};
var procB = function () {
    console.log("B");
    i++;
    return procC();
};
var procC = function () {
    console.log("C");
    i++;
    return procA();
};
procA();
