/**
 * http://usejsdoc.org/
 */
var express = require("express");

var koo = express();

koo.get('/',function(req,res){
	res.send("hello world, Tashi Deleck! god bless us");
});

koo.listen(3000,function(){
	console.log("started on on port 3000");
});