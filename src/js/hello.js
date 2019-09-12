function Hello() {
  var name,mysqls;
  this.setName = function(thyName) {
    name = thyName;
  };
  this.sayHello = function() {
    console.log('Hello ' + name);
  };
  this.sayMysqls=function () {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : '127.0.0.1',
      user     : 'root',
      password : '@373379637@',
      database : 'acmp_copy',
      connectionLimit:0,
      waitForConnections:false
    });

    connection.connect(function(err){
      if(err){
        console.log(err);
        return;
      }else{
       console.log("成功");
      }
    });
var ss="enotfound"
    return connection;
  };
};
module.exports = Hello;
