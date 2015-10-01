'use strict';

const
	post = require('../models/post'),
	mongoose = require('mongoose'),
	Q = require('q');

const
	PostModel = mongoose.model('Post');

exports.list = function (req, res){
	let criteria = {showHidden: 0};
	criteria = req.query;

	PostModel.list(criteria).then(function(posts) {
		res.send(posts);
	});

};

exports.get = function (req, res){
	let objectId = req.params._id;

	PostModel.get(objectId).then(function(posts) {
		res.send(posts);
	}, function(err) {
		res.status(400);
        res.send({ error: 'Bad Request', details: 'Post Not Found' });
	});

};

exports.add = function (req, res){

	let post = new PostModel(),
		attributes = JSON.parse(JSON.stringify(req.body));

	post.set(attributes);

	PostModel.add(post).then(function(post) {
		console.log('New Post Created:', post);
		res.send(post);
	}, function(err) {
		res.status(400);
        res.send({ error: 'Bad Request', details: 'Post cannot be added, ' + err.message });
	});
	
};

exports.del = function (req, res){
	//TODO: Add validation
	let objectId = req.body._id;

	PostModel.del(objectId).then(function(id) {
		res.send({message:'Success deleting a post id:' + id});
	}, function(err) {
		res.status(400);
        res.send({ error: 'Bad Request', details: 'Post cannot be deleted, ' + err.message });
	});
};

exports.edit = function (req, res){
	//TODO: Add validation
	let objectId = req.body._id,
		attributes = JSON.parse(JSON.stringify(req.body));

	console.log('attr', attributes);

	PostModel.edit(objectId, attributes).then(function() {
		console.log('Post id:' + objectId + ' has been modified.');
		res.send({message:'Success updating post id:' + objectId});
	}, function(err) {
		res.status(400);
        res.send({ error: 'Bad Request', details: 'Post cannot be edited, ' + err.message });
	});
};
