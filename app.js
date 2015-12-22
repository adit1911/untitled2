var express = require('express');
var http = require('http');
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
  var longitude = req.param('longitude');
  var url = "http://atoppol-prod.apigee.net/getaniregion?apikey=NCtoAWznivHuWA0VBDirr6FsJh0qxEoG&number=16783159451";
  var options = {
    host: url,
    method: 'GET',
    port:'80'
  };
  http.request(options, function(res){
        console.log('STATUS: ' + res.StatusCode);
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  }).end();
})

var server = app.listen(3000,function(){
  var host = server.address().address;
  var port = server.address().port;
  app.use(express.static('public'));

  console.log('x`Example app listening at http://%s:%s',host,port);
})

