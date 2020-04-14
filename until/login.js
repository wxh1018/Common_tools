let tokenname = 'token'
let login = {
    //保存token
    Savetoken(token) {
        localStorage.setItem(tokenname, token)
    },
    //清除token
    ClearToken(){
        localStorage.clear(tokenname)
    },
    //判断token
    istoken(a) {
        if (localStorage.Longtoken) {
            a.$router.push('/')
        }
    },
    // 随机数
    random(v) {
        v = v || 6
        let n = "";
        for (let i = 0; i < v; i++) {
            n += parseInt(Math.random() * 10);
        }
        return n
    },
    //判断手机号
    isphone(th, v) {
        if (v == "") {
            th.$message({
                message: "请输入手机号",
                type: "error"
            });
            return;
        }
        var fg = /^(1[3|5|6|7|8|9])\d{9}$/.test(v);
        if (!fg) {
            th.$message({
                message: "手机号格式错误",
                type: "error"
            });
        }
        return fg;
    }
}
export default login