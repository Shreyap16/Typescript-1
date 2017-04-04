var myfirsttypescript = (function () {
    function myfirsttypescript(message) {
        this.message = message;
    }
    myfirsttypescript.prototype.sayit = function () {
        return "<h1>" + this.message + "<h1>;;
    };
    return myfirsttypescript;
}());
;
var hw = new myfirsttypescript("hello, world");
document.body.innerHTML = hw.sayit();
