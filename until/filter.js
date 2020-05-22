import Vue from 'vue'

Vue.filter('filter_time', function (v) {
    if (!v) {
        return ''
    }
    let arr = v.split('-')
    return `${arr[0]}年${arr[1]}月`
})

Vue.filter('filter_time_H', function (v) {
    if (!v) return ''
    let arr = v.split('-')
    if (!v) {
        return ''
    }
    if (arr.length <= 4) {
        return `${arr[0]}/${arr[1]}/${arr[2]}`
    }
    return `${arr[0]}/${arr[1]}/${arr[2]}  ${arr[3]}:${arr[4]}`
})
Vue.filter('filter_time_Day', function (v) {
    if (!v) return ''
    let arr = v.split('-')
    if (!v) {
        return ''
    }
    return `${arr[0]}年${arr[1]}月${arr[2]}日`
})
Vue.filter('filter_time1', function (v) {
    if (!v) return ''
    let arr = v.split('-')
    if (arr.length < 4) {
        return `${arr[0]}年${arr[1]}月`
    }
    return `${arr[0]}/${arr[1]}/${arr[2]} ${arr[3]}点${arr[4]}分`
})


Vue.filter('change_content', function (v) {
    if (v == 1) {
        return '审核'
    } else {
        return '详情'
    }
})

Vue.filter('shownone', function (v) {
    if (v == '' || !v) {
        return '暂无坐标'
    } else {
        return v
    }
})

//判断是不是小数  
Vue.filter('kill', function (v) {
    var y = String(v).indexOf(".") + 1;//获取小数点的位置
    if (y > 0) {
        let n = v.toString().split(".")[1].length
        if (n >= 3) {
            return v.toFixed(3)
        } else {
            return v
        }
    } else {
        return v
    }

})