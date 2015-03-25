var express	= require('express'),
	router  = express.Router(),
	comments = require('../public/comments.json');
	
	
var comments_helper = {
	comments: comments,
	get: function() {
		return comments_helper.comments;
	},
	set: function(data) {
		comments.unshift(data);
	}
};	
	
router.get('/', function(req,res){
	res.send(comments_helper.get());
});	

router.post('/', function(req,res){
	comments_helper.set(req.body);
	res.send(comments_helper.get());
});	
	
	
module.exports = router;