define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/modal',
	'app/collection/Countries',
	'app/template'
	], function($, _, Backbone, ModalView, Countries, Tamplates){
			'use static';

		var PlaceModal = ModalView.extend({

			template: Tamplates['appPlace'],
			events :{
					'click #btn-add': 'AddPlaceName',
					'change #Contrycode': 'placeSelect'
			},


			initialize: function(){
				ModalView.prototype.initialize.apply(this, arguments);
				var $taht= this;
				var selectOption=[], countries= new Countries();
				window.countryg= countries;
					
				countries.fetch({
					url: 'country_list.json',
					success: function(collection, response, options){
						
						collection.each(function(element, index, list){
							
							selectOption.push('<option value="'+ element.toJSON().country +'|'+ element.toJSON().capital + '">'+ element.toJSON().country+'</option>');
						});

						$taht.$modalBody.html($taht.template())
						$('#Contrycode').append(selectOption.join(''));
					}
					});

				
				
			},

			AddPlaceName: function(){
				var place = {
					countryCode : this.$('#countryCodeInput').val(),
					name : this.$('#nameInput').val()
				}

				this.collection.create(place);
				this.$modal.modal('hide');
			},
			placeSelect: function(event){
				var val=this.$('#Contrycode').val().split("|");
				this.$('#countryCodeInput').val(val[0]);
				this.$('#nameInput').val(val[1]);
			}
		})

		return PlaceModal;

	});