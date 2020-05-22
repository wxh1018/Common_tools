class Failtip {
    constructor(obj, type) {
        console.log(obj);
        var body = document.querySelector('body')
        let wrap = document.createElement('div')
        wrap.id = 'fail_tip'
        body.appendChild(wrap)
        this.el = wrap
        this.msg = obj.msg || '请输入内容'
        this.top = 500 //距离顶部的位置
        this.opa = 0 //透明度
        this.st = this.el.style
        this.basestyle()
        this.down()
        this.type = type
        this.setType()
    }
    //1正确   2错误
    setType() {
        this.type == 1 ? this.suc_type() : this.error_type()
    }
    suc_type() {
        let st = this.el.style
        st.background = 'rgb(103, 194, 58,.7)'
        st.color = 'white'
        st.fontWeight = 900
    }
    error_type() {
        let st = this.el.style
        st.background = 'rgba(254,240,240)'
        st.color = 'red'
    }
    basestyle() {
        let el = this.el
        this.st.width = '300px'
        this.st.height = '50px'
        this.st.border = '1px solid #fde2e2'
        this.st.borderRadius = '5px'
        this.st.position = 'absolute'
        this.st.left = '50%'
        this.st.marginLeft = '-150px'
        this.st.textAlign = 'center'
        this.st.lineHeight = '50px'
        this.st.color = 'red'
        this.st.zIndex = '9999999999'
        el.innerHTML = this.msg
    }
    down() {
        this.el.style.top = '-100px'
        var distance = 20
        var timer = null
        timer = setInterval(() => {
            this.opa += .15
            this.el.style.opacity = this.opa
            let top = this.el.offsetTop
            distance -= .005
            this.el.style.top = top + distance + 'px'
            // if (this.el.offsetTop > 80) {
            //     clearInterval(timer)
            //     this.up()
            // }
            if (this.opa >= 1) {
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
        }, 3000)
    }
}

export { Failtip } 