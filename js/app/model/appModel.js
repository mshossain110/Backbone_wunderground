define([
	'backbone',
	'localStorage'
	], function(Backbone, localStorage){
		'use static';

		var AppModel = Backbone.Model.extend({
				localStorage: new Backbone.LocalStorage("AppSettings"),
				defaults: {
					'backgroundColor': '#999999',
					'celsius': true,
					'welcomeMessage': 'Welcome to Weather Watcher'
				}

		});

		return AppModel; 
	})