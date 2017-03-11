/**
 * http://usejsdoc.org/
 */
var express = require("express");
var path = require("path");
var logger = require("morgan");
var koo = express();

// set evironment for deployment
koo.set('port',(process.env.PORT || 5000));
koo.set('view engine','ejs');                         // set view engine as ejs
koo.set('views',path.resolve(__dirname,'mockView')); // set view directory 

// apply express static middleware for the static files
koo.use(express.static(path.resolve(__dirname,'mockView')));
koo.use(express.static(path.resolve(__dirname,'assets')));

//set root router to render the home page.
koo.get('/',function(req,res){
	res.send('mock-main');
});

koo.listen(process.env.PORT || 5000);