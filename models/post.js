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
	verifyPost: function() {
		// TODO
		return true;
	}
};

PostSchema.statics = {
	list: function (criteria) {
		let query;

		if (criteria.showHidden == 1){
			query = this.find().where({hidden: 1}).exec();
		} else {
			query = this.find().where({hidden: 0}).exec();
		}	

		return query;
	},
	get: function (objectId) {
		return this.findOne({ _id: objectId }).exec();
	},
	add: function (post) {
		return post.save();
	},
	del: function (objectId) {
		return this.findByIdAndRemove(objectId);	
	},
	edit: function (objectId, attributes) {
		return this.findOneAndUpdate({ _id: objectId }, attributes);
	}
};

mongoose.model('Post', PostSchema);