var express = require("express");
var port = process.env.PORT || 3000;

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var certificates = [];

app.post("/saveCertificate", function(request, response) {
  var name = request.body.name;
  var course = request.body.course;

  certificates.push({
    name,
    course
  });
  response.send(certificates);
});

app.get("/getCertificate", function(request, response) {
  response.send(certificates[0]);
});

app.listen(port, function() {
  console.log("Started on PORT " + port);
});
