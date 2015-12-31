'use strict';

const
	express = require('express'),
	router =  express.Router(),
	posts = require('./controllers/posts');

router.get('/', function(req, res){
	res.status(200).send("Welcome to BasicAPI!");
});

router.get('/posts/:_id', posts.get);
router.get('/posts', posts.list);
router.put('/posts/:_id', posts.edit);
router.post('/posts', posts.add);
router.delete('/posts/:_id', posts.del);

module.exports = router;
