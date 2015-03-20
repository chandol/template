define([

	'backbone',
	'models/Footer',
	'text!templates/footer.html'


], function(

	Backbone,
	FooterModel,
	template

) {

	'use strict';

	return Backbone.View.extend({

		el: 'footer',

		events: {

			//'click .btn': 'onBtnClick'
		},

		initialize: function() {

			_.bindAll(this, 'render');

			this.model = new FooterModel();

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