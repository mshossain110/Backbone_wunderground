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
					this.$placelist= this.$('.placelist');
					this.render();
					
			},

			render: function(){
				var pageContent=[
				'<p>I am shahadat Hossain. New in front-end developer.</p>',
				'<p>I am learning Javascript and Javascript freamwork like Backbone, Angularjs, Nodejs etc.</p>',
				'<p>Also i am working in wordpress</p>',
				'<strong>Thanks<br/>Shahadat</strong>'
				].join('');

				this.$placelist.append(pageContent);

				return this;
			}
		});

		return About;


	});