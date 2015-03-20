define([

	'backbone',
	'text!templates/artwork.html'

], function(

	Backbone,
	template

) {

	'use strict';

	return Backbone.View.extend({

		className: 'artwork',

		events: {
			'mouseover': 'onMouseOver',
			'mouseout': 'onMouseOut'
		},

		initialize: function(){

			_.bindAll(this, 'render', 'onResize', 'onMouseOver', 'onMouseOut');

			this.render();
			$(window).on('resize', this.onResize);
		},

		render: function(){ console.log(this.model.toJSON());

			this.$el.html( _.template(template)(this.model.toJSON()) );
			this.onResize();

			return this;
		},

		onResize: function(){

		},

		onMouseOver: function(){},

		onMouseOut: function(){}
	});
});