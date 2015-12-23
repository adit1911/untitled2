var express = require('express');
var request = require('request');
var app = express();



app.get('/',function(req,res){
  res.send(req.param('test'));
  
});

app.post('/',function(req,res){
  res.send('hello post');
});

app.get('/newMethod', function(req,res){
  res.send('welcome to the jungle, doron!!');
});

app.get('/getAddress', function(req,res){
    var latitude = req.param('latitude');
    var longtitude = req.param('longtitude');
    var url = 'http://atoppol-prod.apigee.net/getaddress?apikey=NCtoAWznivHuWA0VBDirr6FsJh0qxEoG&latitude=' + latitude + '&longitude=' + longtitude +':80'
    console.log(url);
    console.log('This is fun!')
    request(url,function(error,response,body){
        if(!error && response.statusCode==200){
            res.send(body);
        }
    })
});

var server = app.listen(3000,function(){
  var host = server.address().address;
  var port = server.address().port;
  app.use(express.static('public'));

  console.log('x`Example app listening at http://%s:%s',host,port);
})

