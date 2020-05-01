// function setCookie(name, value, time) {
//     var date = new Date()
//     date.setDate(date.getDate() + time)
//     document.cookie = `${name}=${value};expires=${date}`
// }
// function removeCokie(name){
//     setCookie(name,'',-10)
// }
// function getCookie(key) {
//     let arr = document.cookie.replace(/\s/g, '').split(';')
//     for (let i = 0; i < arr.length; i++) {
//         var newarr = arr[i].split('=')
//         if (key == newarr[0]) {
//             return newarr[1]
//         }
//     }
// }
var parseCookies = function(query) {
	var reg = /([^=; \s]+)[=\s]*([^; \s]*)/g;
	var obj = {};
	while (reg.exec(query)) {
		obj[RegExp.$1] = RegExp.$2;
	}
	console.log(obj)
	return obj;
}
//CRUD 
function setCookie(k,v,d){
	let date = new Date()
	date.setDate(date.getDate()+d)
	let cookie = `${k}=${v};expires=${date};path=/`
	document.cookie = cookie;
}
function getCookie(k){
	//k=bbb
	let obj = parseCookies(document.cookie)
	console.log(obj)
	return obj[k];
}
function removeCookie(k){
	setCookie(k,'',-10)
}
