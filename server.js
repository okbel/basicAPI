'use strict';

const
	express = require('express'),
	app =  express(),
	bodyParser = require('body-parser');

const
	config = require('./config'),
	router = require('./routes'),
	middleware = require('./middleware'),
	db = require('./db.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);

app.listen(config.site.port, function() {
	console.log('Basic API listening on port', config.site.port);
});