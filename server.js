var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
app.use(bodyParser.json({extended: true}));

app.post('/verify', function(req,res){
  var place = req.body.state;
  console.log(place);
  if(place === 'AZ'){
    res.sendStatus(200);
  }else{
    res.sendStatus(400);
  }
})

app.post('/calculate', function(req,res){
  var op = req.body.operation;
  console.log(op);
  var first = req.body.NumOne;
  console.log(first);
  var second = req.body.NumTwo;
  console.log(second);
  if(op === "add"){
      var answer = first + second;}
    else if(op === "subtract")
  {
    var answer = first - second;
  } else if(op === "multiply"){
    var answer = first * second;
  } else if(op === "divide"){
    var answer = first / second;
  } else{
    var answer = "Not a valid operation"
  }

  res.json(answer);

});

app.post('/students', function(req,res){
var stdnts = req.body.students;
var arr = [];
for(i=0;i<stdnts.length;i++){
  if(stdnts[i].class === req.body.class){
    arr.push(stdnts[i]);
  }
}
var redone = {
  "teacher": req.body.teacher,
  "class": req.body.class,
  "students": arr
}
res.json(redone);
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
