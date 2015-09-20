define([
	'jquery',
	'underscore',
	'backbone',
	'app/template',
	'app/collection/days'
	], function($, _, Backbone, Templates, Days){
			'use static';

			var PlaceView= Backbone.View.extend({

				template : Templates['place'],

				Collection: new Days([]),
				events : {
					'click #btn-expand' : 'expand',
					'click #btn-remove'	: 'distroyModal'
				},


				initialize: function(){
					var html = this.template(this.model.toJSON());
					this.$el.html(html);
					this.$panel= this.$('.panel-body');
				},

				render: function(){
					var $that= this;
					this.Collection.url= [
						'http://api.wunderground.com/api/1ba75df07a3d5b23/forecast/q/',
						this.model.get('countryCode'),
						'/',
						this.model.get('name'),
						'.json'
					].join('')

					this.Collection.fetch({
							success : function(collection, response, options){
								$that.renderDay();
								console.log(collection);
							},

							error: function(collection, response, options){
								console.log('There is an error');
							}
					});

					return this;

				},

				renderDay: function(){
					var dayhtml= dayhtml || [];

					this.Collection.each(function(element, index, list ){
						dayhtml.push(Templates['day'](element.toJSON()))
					});

					this.$panel.html(dayhtml.join(''));
				},

				distroyModal: function(){
					this.model.destroy();
				},

				expand : function(){
					this.$el.toggleClass('details');
				}


			});

			return PlaceView;
	});