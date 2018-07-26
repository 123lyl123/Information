//浏览器中调试node.js脚本
var a = 1;
var b = 'world';
var c = function(x){
	debugger;
	console.log('hello' + x + a);
}
c(b);