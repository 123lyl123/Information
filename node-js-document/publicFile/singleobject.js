function Hello(){
	var name;
	this.setName = function(thyName){
		name = thyName;
	}
	this.getname = function(){
		console.log('Hello ' + name);
	};
};

module.exports = Hello;