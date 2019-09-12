var http=require('http');
var fs=require('fs');
//请求回调函数
var handRequest=function (req,res){

  console.log('当前的请求是:'+req.url);

  var url=req.url;
  var egx=/.*(login)$/;

  if (url!=="/favicon.ico") {
    if (egx.test(url)) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      fs.readFile('../404.html', 'utf8', function (err, data) {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    }else {
      let body = '';  // 一定要初始化为"" 不然是undefined
      req.on('data', function(data) {
        body += data; // 所接受的Json数据
        console.log("body:"+body);
      });
      req.on('end', function() {
        res.writeHead(200, {  // 响应状态
          "Content-Type": "text/plain",  // 响应数据类型
          'Access-Control-Allow-Origin': '*'  // 允许任何一个域名访问
        });

          res.write('other');

        res.end();
      });

    }
    }

  //发送完数据后结束响应
  //res.end('404 NotFound');
};
//任何请求都会触发该事件
/*server.on('request',handRequest);*/
http.createServer(handRequest).listen(9999);

