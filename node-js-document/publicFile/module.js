//创建模块
var name;
exports.setName = function(thyName){
	name = 	thyName;
}
exports.getName = function(){
	console.log("hello " + name);
}