import Vue from 'vue'

Vue.directive('hid2', {
    bind: function (el, binding, vnode) {
        if (binding.value == 2) {
            el.style.display = 'none'
        }
    }
})

Vue.directive('r', {
    bind: function (el, binding, vnode) {
        el.style.color = 'red'
    }
})
Vue.directive('or', {
    bind: function (el, binding, vnode) {
        el.style.background = '#ff7700'
    }
})
Vue.directive('mar', {
    bind: function (el, binding, vnode) {
        el.style.margin = '30px auto'
    }
})
Vue.directive('lf', {
    bind: function (el, binding, vnode) {
        el.style.textAlign = 'left'
    }
})