//创建http服务器
// var http = require('http');
// http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.write('<h1 style="background-color: #000;">Node-js</h1>');
// 	res.end('<p>Hello World</p>');
// }).listen(3000);
// console.log("HTTP server is listening at port 3000.");


//异步读取文件的内容
// var fs = require('fs');
// fs.readFile("publicFile/file.txt", "utf-8", function(err, data){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(data);
// 	}
// });
// console.log("end");


// 同步读取文件的内容
// var fs = require('fs');
// var data = fs.readFileSync('publicFile/file.txt', 'utf-8');
// console.log(data);
// console.log('end');


// 时间监听管理
// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();

// event.on('some_event', function(){
// 	console.log('some_event occured');
// })

// setTimeout(function(){
// 	event.emit('some_event');
// }, 1000);


// 调用模块
// var myModule = require('./publicFile/module.js');
// myModule.setName('BYvoid');
// myModule.getName();


//覆盖exports对象
// var Hello = require('./publicFile/singleobject.js');

// hello = new Hello();
// hello.setName('BTvoid');
// hello.getname();


//解析表单请求头的内容
// var http = require('http');
// var url = require('url');
// var util = require('util');

// http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);