Function.prototype.bind = function (context) {
    var that = this;
    var bindArgs = Array.prototype.slice.call(arguments, 1);
    function fBound () {
        var args = Array.prototype.slice.call(arguments);
        return that.apply(this instanceof fBound ? this : context, bindArgs.concat(args));
    }
    function fNOP () { }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}