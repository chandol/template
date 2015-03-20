define([

	'backbone',
	'views/Header',
	'views/Main',
	'views/Footer'

], function (

	Backbone,
	HeaderView,
	MainView,
	FooterView

) {

	'use strict';

	return Backbone.Router.extend({

		initialize: function(){

			this.views = {};

			this.views.header = new HeaderView();

			this.views.main = new MainView();

			this.views.footer = new FooterView();

			/**
			 * Set pushState:false to make deeplinks work without serverside url route setting.
			 */
			Backbone.history.start( {pushState:false, root: APP.config.root} );
		},

		routes: {

			'*path': 'dispatcher',

		},

		dispatcher: function(path) {

			if (this.views.header && !this.views.header.model.get('isLoaded')) {

				this.views.header.model.set({ isLoaded: true });
			}

			if (this.views.footer && !this.views.footer.model.get('isLoaded')) {

				this.views.footer.model.set({ isLoaded: true });
			}

			if (this.views.main) {

				//Print "Hello, World!"
				this.views.main.model.set({

					path: path,
					title: APP.data.demo
				});
			}

		}
	});
});