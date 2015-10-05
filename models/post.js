'use strict';

const
	mongoose = require('mongoose'),
	Q = require('q');

const
	Schema = mongoose.Schema,
	PostSchema = new Schema({
		title:  {type : String, default : '', trim : true},
		author: {type : String},
		body:   {type : String, default : '', trim : true},
		comments: [{ body: String, date: Date }],
		createdAt: { type: Date, default: Date.now },
		hidden: {type : Boolean, default : 0},
	});

PostSchema.path('title').required(true, 'Post title cannot be blank');
PostSchema.path('author').required(true, 'Post Author cannot be blank');
PostSchema.path('body').required(true, 'Post Body should not be blank');

PostSchema.methods = {
	postExists: function() {
		// TODO
		return true;
	}
};

PostSchema.statics = {
	list: function (criteria) {
		let deferred = Q.defer(),
			query = '';

		if (criteria.showHidden == 1){
			query = this.find().where({hidden: 1}).exec();
		} else {
			query = this.find().where({hidden: 0}).exec();
		}	

		deferred.resolve(query);
		return deferred.promise;
	},
	get: function (objectId) {
		let deferred = Q.defer(),
			query = '';

		query = this.findOne({ _id: objectId }).exec();

		deferred.resolve(query);
		return deferred.promise;
	},
	add: function (post) {
		let deferred = Q.defer();

		post.save(function (err) {
			// Validation error
			if (err) {
				deferred.reject(err);
			}

		}).then(function(post){
			deferred.resolve(post);
		});

		return deferred.promise;
	},
	del: function (objectId) {

		let deferred = Q.defer(),
			query = '';

		query = this.findByIdAndRemove(objectId, function (err) {
			if (err) {
				deferred.reject(err);
			}
		});

		deferred.resolve(objectId);
		return deferred.promise;
		
	},
	edit: function (objectId, attributes) {
		let deferred = Q.defer(),
			query = '';

		query = this.where().findOneAndUpdate({ _id: objectId }, attributes, function (err) {
			if (err) {
				deferred.reject(err);
			}
		});

		deferred.resolve(attributes);
		return deferred.promise;
	}
};

mongoose.model('Post', PostSchema);