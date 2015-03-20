define([

	'backbone',
	'text!templates/exhibition.html'

], function(

	Backbone,
	template

) {

	'use strict';

	return Backbone.View.extend({

		tagName: 'a',

		className: 'exhibition',

		events: {
			//'mouseover': 'onMouseOver',
			//'mouseout': 'onMouseOut',

			'click': 'onClick'
		},

		initialize: function() {

			_.bindAll(this, 'render', 'onClick', 'onResize', 'onMouseOver', 'onMouseOut');

			//this.listenTo(MUR.headerModel, 'change', this.render);

			this.el.id = this.model.attributes.id;

			this.$el.attr({
				href: '#'
			});

			this.render();
			$(window).on('resize', this.onResize);
		},

		render: function() {

			this.$el.html( _.template(template)(this.model.toJSON()) );
			this.onResize();

			return this;
		},

		onClick: function(e){

			e.preventDefault();
			Backbone.history.navigate('exhibitions/'+this.model.get('id'), true);
		},

		onResize: function(){
/*

			$.each(this.$('.col'), function(i){


			});
*/
		},

		onMouseOver: function(){},

		onMouseOut: function(){}
	});
});