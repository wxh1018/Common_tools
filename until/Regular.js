//正则验证
const Regular = {
    phone(th,v) {
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
export default Regular