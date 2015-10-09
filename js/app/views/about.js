define([
	'jquery',
	'underscore',
	'backbone',
	'app/template'
	], function($, _, Backbone,  Templates){
		'use static';

		var About= Backbone.View.extend({

			template : Templates['title'],

			initialize: function(options){
					 this.options = _.defaults(options || {}, this.options);
					var pageTitle = this.options.pageTitle || '';
					this.$el.html(Templates['title']({pageTitle : pageTitle}));
					
			},

			render: function(){

			}
		});

		return About;


	});