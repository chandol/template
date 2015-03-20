define([

	'backbone',
	'models/Header',
	'text!templates/header.html'


], function(

	Backbone,
	HeaderModel,
	template

) {

	'use strict';

	return Backbone.View.extend({

		el: 'header',

		events: {

			//'click .btn': 'onBtnClick'
		},

		initialize: function() {

			_.bindAll(this, 'render');

			this.model = new HeaderModel();

			this.listenTo(this.model, 'change', this.render);

			this.onResize = _.throttle(this.resizeWorker.bind(this), 50);
			$(window).on('resize', this.onResize);
		},

		render: function() {

			this.$el.html( _.template(template)(this.model.toJSON()) );
			this.onResize();

			return this;
		},

		resizeWorker: function() {}
	});
});