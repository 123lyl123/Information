var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页啊' , content:'开始'});
});

router.get('/helper', function(req, res) {
  res.render('helper', {
  	title: 'Helpers'
  })
});



router.get('/user', function(req, res, next) {
  res.render('index', { title: 'Express1' });
});

//路由控制权转移
router.all('/user/:username', function(req, res, next){
	console.log('控制台捕获了路由规则: all method captured');
	next();
})
//复杂路由规则的编写
router.get('/user/:username', function(req, res) {
  res.send('user: ' + req.params.username);
});


//片段视图
router.get('/list', function(req, res){
	res.render('list',{
		title: 'List',
		items: [1991, 'byvoid', 'express', 'Node.js']
	})
});


module.exports = router;
