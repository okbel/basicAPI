'use strict';

const
	express = require('express'),
	router =  express.Router(),
	posts = require('./controllers/posts');

router.get('/', function(req, res){
	res.status(200).send("Welcome to BasicAPI!");
});

router.get('/posts', posts.list);
router.get('/post/:_id', posts.get);
router.post('/post/add', posts.add);
router.put('/post/del', posts.del);
router.put('/post/edit', posts.edit);

module.exports = router;
