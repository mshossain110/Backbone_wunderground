define([
	'jquery',
	'underscore',
	'backbone',
	'app/template',
	'app/collection/placeCollection',
	'app/views/placeView',
	'app/views/PlaceModal'
	], function($, _, Backbone,  Templates, PlaceCollection, PlaceView, PlaceModal){
		'use static';

		var Dashbord= Backbone.View.extend({

			template : Templates['title'],

			Collection : new PlaceCollection([]),
			events :{
				'click #app-place' : 'AddPlaceModal'
			},

			initialize: function(options){
				
				this.listenTo(this.collection, 'change destroy', this.render);
				this.Collection.fetch();
					 this.options = _.defaults(options || {}, this.options);
					var pageTitle = this.options.pageTitle || '';
					this.$el.html(Templates['title']({pageTitle : pageTitle}));

					this.$placelist= this.$('.placelist');
					this.$placelist.after('<button type="button" class="btn btn-primary btn-lg" id="app-place">Add Place</button>');
					
			},

			render: function(){
				var $that = this
				if(this.Collection.length){
					this.Collection.each(function(element, index, list){

						var place = new PlaceView ({
							model : element,
							id : ['place-', element.get('countryCode'), '-', element.get('name')].join('')
						});
						$that.$placelist.append(place.render().el);

					});
				}else{
					$that.$placelist.html('<p>Sorry, there are no places to display, please add some.</p>')
				}
				return this;
			},

			AddPlaceModal: function(){
				var placeModal = new PlaceModal({
					id: 'place-modal',
					title: 'Add new place',
					collection: this.Collection
				});

				placeModal.show()
			}
		});

		return Dashbord;


	});