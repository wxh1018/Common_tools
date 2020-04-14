let base = {
    //错误提示
    warn(a, b) {
        a.$message({
            type: "error",
            message: b
        });
    },
    //成功提示
    suc(a, b) {
        a.$message({
            type: 'success',
            message: b
        })
    },
    Noti(a, msg) {
        a.$notify({
            title: "系统提示",
            message: msg,
            type: "success"
        });
    },
    // 设置标题
    SetTitle(v) {
        var title = document.querySelector('title')
        title.text = v
    },
    //添加样式
    AddStyle(obj) {
        console.log(obj);
        obj = obj.replace(/;/g, '!important;')
        let style = document.querySelector('style')
        let head = document.querySelector('head')
        if (style) {
            style.append(obj)
        } else {
            let style = '<style></style>'
            head.append(style)
            style.innerHtml = obj
        }
    },
    // 分页器  (每页条数，当前页)
    ChangePage(page_size, current_page, data) {
        page_size = page_size || 10
        let start = page_size * (current_page - 1)
        let end = page_size * (current_page - 1) + page_size
        return data.slice(start, end)
    },
    //获取时间
    GetTime() {
        var year = new Date().getFullYear()
        var month = new Date().getMonth() + 1
        var date = new Date().getDate()
        var h = new Date().getHours();
        month = month < 10 ? ('0' + month) : month
        date = date < 10 ? ('0' + date) : date
        h = h < 10 ? ("0" + h) : h;
        var m = new Date().getMinutes();
        m = m < 10 ? ("0" + m) : m;
        var s = new Date().getSeconds();
        s = s < 10 ? ("0" + s) : s;
        let time = `${year}-${month}-${date}`
        console.log(time, h, m, s);
        return time
    },
    //对象转数组
    Obj_arr(obj) {
        obj = obj || { age: 18, name: 'wang' }
        const arr = function () {
            let arr1 = []
            for (var n in obj) {
                arr1.push({ name: n, value: obj[n] })
            }
            return arr1
        }
        return arr()
    },
    //高德转百度
    baidu(bdLng, bdLat) {
        var X_PI = (Math.PI * 3000.0) / 180.0;
        var x = bdLng - 0.0065;
        var y = bdLat - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI);
        var gg_lng = z * Math.cos(theta);
        var gg_lat = z * Math.sin(theta);
        return [gg_lng, gg_lat]
    }
}
export default base