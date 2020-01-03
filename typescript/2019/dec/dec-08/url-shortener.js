// * Daily Coding Problem Dec 8th 2019
// * [Easy] -- Microsoft
/**
 * * Create a url shortener that accepts a url as input and shortens
 * * it to a 6 char alpha numeric string. Given the shortened url it should
 * * restore the same original url each time
 */
var URLShortener = /** @class */ (function () {
    function URLShortener() {
        var _this = this;
        this.generateRandomAlphaNum = function (len) {
            var result = '';
            var options = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            for (var i = 0; i < len; i++) {
                var randIndex = Math.floor(Math.random() * Math.floor(options.length));
                result += options[randIndex];
            }
            return result;
        };
        this.shorten = function (url) {
            var result = _this.generateRandomAlphaNum(6);
            _this.storedURLs[result] = url;
            return result;
        };
        this.restore = function (shortURL) {
            var result = _this.storedURLs[shortURL]
                ? _this.storedURLs[shortURL]
                : null;
            return result;
        };
        this.storedURLs = {};
    }
    return URLShortener;
}());
var testURLShortener = function () {
    var shortener = new URLShortener();
    var input = 'https://github.com/lineville';
    var result = shortener.shorten(input);
    console.log(result);
    var restored = shortener.restore(result);
    console.log(input === restored ? 'Passed' : 'Failed');
    var micro = shortener.shorten('https://github.com/Microsoft');
    console.log(micro);
    console.log(shortener.restore(micro));
};
testURLShortener();
