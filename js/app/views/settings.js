define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/modal',
	'app/template'
	], function($, _, Backbone, ModalView, Tamplates){
		var settings = ModalView.extend({

			template: Tamplates['settings'],
			events :{
					'click #saveSettings': 'saveSettings'
			},


			initialize: function(){
				ModalView.prototype.initialize.apply(this, arguments);
				
				this.$modalBody.html(this.template(this.model.toJSON()))
			},

			saveSettings: function(){
				var data = {
					welcomeMessage: this.$('#welcomeMessageInput').val(),
					backgroundColor: this.$('#backgroundColorInput').val(),
					celsius: this.$('#tempType').val() == 'cel' ? true : false
				};

				this.model.save(data);
				this.$modal.modal('hide');
			}
		})

		return settings;

	})