require([

	'backbone',
	'routers/Router'

], function(

	Backbone,
	Router

) {

	'use strict';

	$.getJSON(APP.config.db_path, function(d) {

		APP.data = d.list;

	}).done(function() {

		/*
		//Enable if #wrapper needs to be always fit to viewport.
		$(window).on('resize', function(){
			this.$('#wrapper').width($(window).innerWidth()).height($(window).innerHeight());
		});
		*/

		APP.router = new Router();

	}).fail(function() {}).always(function() {});
});