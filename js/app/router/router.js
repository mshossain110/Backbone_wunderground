define([
	'backbone'
	], function(Backbone){
		'use static';

		var Router= Backbone.Router.extend({
			routes :{
				'': 'goToDashbord',
				'dash': 'goToDashbord',
				'about': 'goToAbout'
			},

			initialize: function(view){
				this.appveiw = view;

			},

			goToDashbord: function(){
				this.appveiw.setpage('dash');
			},

			goToAbout: function(){
				this.appveiw.setpage('about');
			}


		});


		return Router
	})