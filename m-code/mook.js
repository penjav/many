/**
 * http://usejsdoc.org/
 */
var express = require("express");

var koo = express();

// set evironment for deployment
koo.set('port',process.env.PORT || 3000);
koo.get('/',function(req,res){
	res.send("hello world, Tashi Deleck! god bless us");
});

koo.listen(koo.get('port'),function(){
	console.log("started on on port", koo.get('port'));
});