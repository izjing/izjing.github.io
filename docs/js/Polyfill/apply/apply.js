Function.prototype.apply = function (context, args) {
    context = context ? Object(context) : window;
    context.fn = this;
    var r;
    if (!args) {
        r = context.fn();
    } esle {
        r = eval('context.fn(' + args + ')');
    }
    delete context.fn;
    return r;
};