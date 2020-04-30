//错误提示
class Failtip {
    constructor(obj) {
        var body = document.querySelector('body')
        let wrap = document.createElement('div')
        wrap.id = 'fail_tip'
        body.appendChild(wrap)
        this.el = wrap
        this.msg = obj.msg
        this.top = 500 //距离顶部的位置
        this.opa = 0 //透明度
        this.basestyle()
        this.down()
    }
    basestyle() {
        let el = this.el
        el.style.width = '300px'
        el.style.height = '50px'
        el.style.border = '1px solid #fde2e2'
        el.style.background = 'rgba(254,240,240)'
        el.style.borderRadius = '5px'
        el.style.position = 'absolute'
        el.style.left = '50%'
        el.style.marginLeft = '-150px'
        el.style.textAlign = 'center'
        el.style.lineHeight = '50px'
        el.style.color = 'red'
        el.innerHTML = this.msg
    }
    down() {
        this.el.style.top = '-60px'
        var distance = 20
        var timer = null
        timer = setInterval(() => {
            this.opa += .1
            this.el.style.opacity = this.opa
            let top = this.el.offsetTop
            distance -= .5
            this.el.style.top = top + distance + 'px'
            if (this.el.offsetTop > 80) {
                clearInterval(timer)
                this.up()
            }
        }, 20);
    }
    up() {
        setTimeout(() => {
            let timer = setInterval(() => {
                this.opa -= .2
                this.el.style.opacity = this.opa
                if (this.opa <= 0) {
                    clearInterval(timer)
                    this.el.remove()
                }
                return 1
            }, 50)
        }, 1500)
    }
}

export {Failtip} 