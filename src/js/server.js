var http=require('http');
var mysql= require('./hello');
var fs=require('fs');

var sqlstr="SELECT * from mod_flow_rule";
var updatesqlstr="UPDATE mod_flow_rule SET co_id=999 WHERE co_id=88";
var deletesqlstr="DELETE from mod_flow_rule WHERE co_id='89'";
var insertsqlstr="INSERT INTO mod_flow_rule  (co_id,enable_flow)VALUES('88','99')";
var con=new mysql().sayMysqls();

//请求回调函数
var handRequest=function (req,res){




  console.log('当前的请求是:'+req.url);
//	response.write('hello');
//	response.write('world');
  //response.writeHead(响应状态码，响应头对象)
  var url=req.url;
  var egx=/.*(login)$/;
  var egx12=/.*(postu)$/;
  if (url!=="/favicon.ico") {
    if (egx.test(url)) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      fs.readFile('../bootstrot.html', 'utf8', function (err, data) {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    } else if (egx12.test(url)) {
      console.log('post请求');
      res.writeHead(200, {
        'Content-Type': 'application/json;charset=UTF-8'
      });
      //res.write(JSON.stringify({'NIHAO': 'KEYSST'}));
       res.end(JSON.stringify({"NIHAO":"KEYSST"}));
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      fs.readFile('../404.html', 'utf8', function (err, data) {
        if (err) {
          throw err;
        }
        //链接数据库
        /*con.query(sqlstr, function (err, strut) {
          console.log(strut);
          if (strut) {
            //res.write(JSON.stringify(strut));
            //con.release();
            console.log(JSON.stringify(strut));
          }
        });
        con.query(updatesqlstr, function (err, strut) {
          console.log(strut);
          if (strut) {
            //res.write(JSON.stringify(strut));
            //con.release();
            console.log(JSON.stringify(strut));
          }
        });
        con.query(deletesqlstr, function (err, strut) {
          console.log(strut);
          if (strut) {
            //res.write(JSON.stringify(strut));
            //con.release();
            console.log(JSON.stringify(strut));
          }
        });
        con.query(insertsqlstr, function (err, strut) {
          console.log(strut);
          if (strut) {
            //res.write(JSON.stringify(strut));
            //con.release();
            console.log(JSON.stringify(strut));
          }
        });*/
        res.end(data);
      });
    }
  }
  //发送完数据后结束响应
  //res.end('404 NotFound');
};
//任何请求都会触发该事件
/*server.on('request',handRequest);*/
http.createServer(handRequest).listen(9999);

