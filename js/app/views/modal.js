define([
	'jquery',
	'underscore',
	'backbone',
	'bootstrap',
	'app/template'
	], function($,_, Backbone, bootstrap, Templates){
		'use static';

		var ModalView = Backbone.View.extend({
				id: 'ModalView',

				template: Templates['modal'],

				initialize: function(options){
					 this.options = _.defaults(options || {}, this.options);
					var title = this.options.title || '';
					this.$el.html(Templates['modal']({title: title}));
					this.$modal= this.$('.modal');
					this.$modalBody= this.$('.modal-body');
						
					$('body').append(this.el);
				},

				render: function(){
					this.$modal.modal({
						show: false,
					});

					return this;
				},

				show: function(){
					var $that= this
					this.$modal.modal('show');

					this.$modal.on('hidden.bs.modal', function(){
						$that.onModalClose();
					})
				},

				onModalClose: function(){

					this.$modal.off('hidden.bs.modal');
					this.remove();

				}
			});

		return ModalView;
	});