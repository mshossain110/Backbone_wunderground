define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/modal',
	'app/template'
	], function($, _, Backbone, ModalView, Tamplates){
			'use static';

		var PlaceModal = ModalView.extend({

			template: Tamplates['appPlace'],
			events :{
					'click #btn-add': 'AddPlaceName'
			},


			initialize: function(){
				ModalView.prototype.initialize.apply(this, arguments);
				
				this.$modalBody.html(this.template())
			},

			AddPlaceName: function(){
				var place = {
					countryCode : this.$('#countryCodeInput').val(),
					name : this.$('#nameInput').val()
				}

				this.collection.create(place);
				this.$modal.modal('hide');
			}
		})

		return PlaceModal;

	})