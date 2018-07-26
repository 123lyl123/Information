var express = require('express');
var router = express.Router();


var users = {
	'byvoid': {
		name: 'lyl',
		website: 'http://www.byvoid.com'
	}
};
//路由控制权转移
router.all('/:username', function(req, res, next){
	//检查用户是否存在
	if(users[req.params.username]){
		next();
	}else{
		next(new Error(req.params.username + ' does not exist.'));
	}
})
//复杂路由规则的编写
router.get('/:username', function(req, res) {
	//用户一定存在
  	res.send(users[req.params.username]);
});
router.put('/:username', function(req, res){
	//修改用户信息
	res.send('Done');
})
module.exports = router;
