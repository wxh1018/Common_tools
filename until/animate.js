// 水平方向 匀速  
// 垂直 匀加速       
// 抛物线
// let box = document.querySelector('#box')
// let dri = 'width'
// let target = 300;

// animate('height', 300, box, function () {
// 	animate('left', 300, box2)
// })
function animate(dri, target, box, fn) {
    box.timer = setInterval(() => {
        let speed = (target - parseFloat(getComputedStyle(box)[dri])) / 20
        if (speed > 0) {
            speed = Math.ceil(speed)
        } else {
            speed = Math.floor(speed)
        }
        box.style[dri] = parseFloat(getComputedStyle(box)[dri]) + speed + 'px'
        if (parseFloat(getComputedStyle(box)[dri]) == target) {
            clearInterval(box.timer)
            if (!fn) return
            fn()
        }
    }, 20)
}