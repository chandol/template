define([

	'backbone'

], function(

	Backbone

) {

	'use strict';

	return Backbone.Collection.extend({

		initialize: function() {

			this.model = null;
		}
	});
});