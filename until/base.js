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
    noti(a, msg) {
        a.$notify({
            title: "系统提示",
            message: msg,
            type: "success",
            duration: 2000
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
        let day = `${year}-${month}-${date}`
        let mon = `${year}-${month}`
        let hour = `${year}-${month}-${date}-${h}`
        let min = `${year}年${month}月${date}号${h}点${m}分`
        function getMonth() {
            return mon
        }
        function getDate() {
            return day
        }
        function getHour() {
            return hour
        }
        function getMin() {
            return min
        }
        return {
            getMonth,
            getDate,
            getHour,
            getMin
        }
    },
    month() {
        let arr = [];
        for (let i = 1; i <= 12; i++) {
            arr.push(i + "月");
        }
        return arr;
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
    },
    //隐藏手机号  178****8796
    filter_phone(phone) {
        let center = phone.toString().substr(3, 4);
        var e = new RegExp(center, "g");
        phone = phone.toString().replace(e, '****')
        return phone
    },
    //obj arr 对象的克隆（区分于指针赋值）
    copyObj(obj) {
        var copyObj = function (obj) {
            if (obj.constructor == Array) {
                var a = [];
                for (var i in obj) {
                    a.push(obj[i]);
                }
                return a;
            } else {
                var o = {}
                for (var i in obj) {
                    o[i] = obj[i];
                }
                return o;
            }

        }
    },
    // 按某个属性值 去重数组对象
    replace(arr1, name) {
        let arr = arr1
        for (i = 0; i < arr.length; i++) {
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i][name] == arr[j][name]) {
                    arr.splice(j, 1)
                    j--
                }
            }
        }
        return arr
    },
    deepClone(obj, parent = null) {
        let result; // 最后的返回结果

        let _parent = parent; // 防止循环引用
        while (_parent) {
            if (_parent.originalParent === obj) {
                return _parent.currentParent;
            }
            _parent = _parent.parent;
        }

        if (obj && typeof obj === "object") { // 返回引用数据类型(null已被判断条件排除))
            if (obj instanceof RegExp) { // RegExp类型
                result = new RegExp(obj.source, obj.flags)
            } else if (obj instanceof Date) { // Date类型
                result = new Date(obj.getTime());
            } else {
                if (obj instanceof Array) { // Array类型
                    result = []
                } else { // Object类型，继承原型链
                    let proto = Object.getPrototypeOf(obj);
                    result = Object.create(proto);
                }
                for (let key in obj) { // Array类型 与 Object类型 的深拷贝
                    if (obj.hasOwnProperty(key)) {
                        if (obj[key] && typeof obj[key] === "object") {
                            result[key] = deepClone(obj[key], {
                                originalParent: obj,
                                currentParent: result,
                                parent: parent
                            });
                        } else {
                            result[key] = obj[key];
                        }
                    }
                }
            }
        } else { // 返回基本数据类型与Function类型,因为Function不需要深拷贝
            return obj
        }
        return result;
    }
}
export default base