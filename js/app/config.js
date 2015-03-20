requirejs.config({

	baseUrl: './js',

	// cache buster
	//urlArgs: 'cb=' + Math.random(),

	paths: {

		jquery: 'libs/jquery-1.11.2.min',
		underscore: 'libs/lodash.min',
		backbone: 'libs/backbone-min',
		text: 'libs/text',
		handlebars: 'libs/handlebars-v3.0.0',

		models: 'app/models',
		collections: 'app/collections',
		views: 'app/views',
		routers: 'app/routers',
		templates: 'app/templates'
	}
});

var APP = {

	data: null,

	router: null,

	config: {

		unitPx: 16,

		root: '/',

		db_path: 'db/data.json'
	}
};
require(['app/init']);