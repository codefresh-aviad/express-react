var express	= require('express'),
	router  = express.Router();
	
	
var comments = require('../public/comments.json');	
	
router.get('/', function(req,res){
	res.send(comments);
});	

router.post('/', function(req,res){
	console.log(req.body);
	res.send(comments);
});	
	
	
module.exports = router;