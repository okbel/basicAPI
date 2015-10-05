'use strict';

const
	express = require('express'),
	router =  express.Router(),
	posts = require('./controllers/posts');

router.get('/', function(req, res){
	res.status(200).send("Welcome to BasicAPI!");
});

/* 
Following Ember URL Conventions

Find	GET	/photos/123
Find All	GET	/photos
Update	PUT	/photos/123
Create	POST	/photos
Delete	DELETE	/photos/123
*/

router.get('/posts/:_id', posts.get);
router.get('/posts', posts.list);
router.put('/posts/:_id', posts.edit);
router.post('/posts', posts.add);
router.delete('/posts/:_id', posts.del);


module.exports = router;
