console.log('a', a);
console.log('event', Event);
var b = (function(){
    var div = document.getElementById("showcount");
    Event.listen('add',function(count){
        div.innerHTML = count;
    });
})();