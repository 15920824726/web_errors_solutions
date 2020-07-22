var Event = (function(){
    var list = {},
        listen,
        trigger,
        remove;
    listen = function(key,fn){
        if(!list[key]) {
            list[key] = [];
        }
        list[key].push(fn);
    };
    trigger = function(){
        var key = Array.prototype.shift.call(arguments),
            fns = list[key];
        if(!fns || fns.length === 0) {
            return false;
        }
        for(var i = 0, fn; fn = fns[i++];) {
            fn.apply(this,arguments);
        }
    };
    remove = function(key,fn){
        var fns = list[key];
        if(!fns) {
            return false;
        }
        if(!fn) {
            fns && (fns.length = 0);
        }else {
            for(var i = fns.length - 1; i >= 0; i--){
                var _fn = fns[i];
                if(_fn === fn) {
                    fns.splice(i,1);
                }
            }
        }
    };
    return {
        listen: listen,
        trigger: trigger,
        remove: remove
    }
})();


// by-self 订阅发布模式
var events = {};
events.list = {};

events.listen = function (key, fn) {
    if(!this.list[key]) {
        // 如果还没有订阅过此类消息，给该类消息创建一个缓存列表
        this.list[key] = [];
    }
    this.list[key].push(fn)
};

events.trigger = function (...args) {
    var key = args.shift();
    for(var i=0; i < this.list[key].length; i++) {
        // events.list[i](color, size);
        // 利用arguments
        // 利用rest参数
        this.list[key][i].apply(this, args)
    }
};
events.listen('red', function (size) {
    console.log('尺码是', size);
});
events.listen('black', function (size) {
    console.log('再次打印尺寸是', size);
});

events.trigger('red', 42);
events.trigger('black', 40);