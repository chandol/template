define([

	'backbone'

], function(

	Backbone

) {

	'use strict';

	return Backbone.Model.extend({

		defaults: {

			path: null,

			title: null
		}
	});
});