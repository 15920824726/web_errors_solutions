var containerEl =  document.querySelector('.swiper-container');

let state = 0;  // 鼠标默认状态
let oldEvent;
let left = containerEl.offsetLeft;

containerEl.addEventListener('mousedown', (event) => {
    state = 1;  // 设置为1表示按下了鼠标
    console.log('鼠标按下了');
    oldEvent = event;
});
containerEl.addEventListener('mousemove', (event) => {
    console.log(left)
    if (state != 1) return; // 只有当state == 1时候才允许执行该事件
    if (event.pageX < oldEvent.pageX) {
        left -= oldEvent.pageX - event.pageX;
    }
    else {
        left += event.pageX - oldEvent.pageX;
    }
    // 完事之后记得把当前鼠标的位置赋值给oldEvent
    oldEvent = event;
    // 最后再把left赋值给容器
    containerEl.style.left = left + 'px';
    console.log('鼠标移动了');
});
containerEl.addEventListener('mouseup', (event) => {
    state = 0;  // 恢复默认状态
    console.log('鼠标抬起了');
});
