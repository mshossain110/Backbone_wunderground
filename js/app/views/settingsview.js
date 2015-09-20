define([
	'jquery',
	'underscore',
	'backbone',	
	'app/template',
	'bootstrap'
	], function($, _, Backbone, Templates){
		
		var Settings= Backbone.View.extend({
				id:'page-title',

				

				template: Templates['title'],

				initialize: function(){
					
				},

				render: function(){
					this.$el.html(this.template());

					return this;
				},

				
		});

		return Settings;
	});