/**
 * Created by polyhimnia on 1/11/17.
 */
var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

app.use(express.logger());
app.use("/", express.static(__dirname));
app.listen(port, function() {
    console.log("Listening on " + port);
});