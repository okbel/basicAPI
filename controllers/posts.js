'use strict';

const
	post = require('../models/post'),
	mongoose = require('mongoose');

const
	PostModel = mongoose.model('Post');

mongoose.Promise = global.Promise; // ES6 mongoose implementation


exports.list = function (req, res){
	let criteria = {showHidden: 0};
	criteria = req.query;

	PostModel.list(criteria).then(function(posts) {
		res.status(200).send(posts);
	})
	.catch(function(err) {
       	res.status(200).send({ error: 'No data', details: 'No posts Found ', message: err.message });
    });

};

exports.get = function (req, res){
	let objectId = req.params._id;

    PostModel.get(objectId)
    .then(function (posts) {
        res.send(posts);
    })
    .catch(function(err) {
       	res.status(404).send({ error: 'Bad Request', details: 'Post Not Found.', message: err.message });
    });
};

exports.add = function (req, res){
	let post = new PostModel(),
		attributes = JSON.parse(JSON.stringify(req.body));

	post.set(attributes);

	PostModel.add(post)
    .then(function(post) {
    	console.log('New Post Created:', post);
        res.status(201).send(post);
    })
    .catch(function(err) {
       	res.status(422).send({ error: 'Bad Request', details: 'Post cannot be added.', message: err.message });
    });	
};

exports.del = function (req, res){
	let objectId = req.params._id;

	PostModel.del(objectId)
    .then(function(id) {
		res.status(204).end();
    })
    .catch(function(err) {
       	res.status(400).send({ error: 'Bad Request', details: 'Post cannot be deleted, ' + err.message });
    });	
};

exports.edit = function (req, res){
	let objectId = req.params._id,
		attributes = JSON.parse(JSON.stringify(req.body));

	PostModel.edit(objectId, attributes)
    .then(function(post) {
	    PostModel.get(objectId)
	    .then(function(post) {
	        res.send(post);
	    })
	    .catch(function(err) {
	       	res.status(404).send({ error: 'Bad Request', details: 'Post Not Found.', message: err.message });
	    });
    })
    .catch(function(err) {
       	res.status(400).send({ error: 'Bad Request', details: 'Post cannot be edited, ' + err.message });
    });	
};
