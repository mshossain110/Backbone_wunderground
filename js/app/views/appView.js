define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/settings',
	'app/template',
	'app/views/dash',
	'app/views/about'
	], function($, _, Backbone, Settings,  Templates, Dashbord, About){

		'use static';

		var AppView = Backbone.View.extend({
			el: '#app',

			template : Templates['app'],

			events: {
				'click #addSettings': 'addSettings'
				
			},

			initialize: function(){
				this.listenTo(this.model, "change", this.render);
				this.$el.html(this.template());
				this.$content= this.$('#content');

				
			},

			render: function(){
				$('body').css('background-color', this.model.get('backgroundColor'));
				$('.wellCome').html('<p>'+this.model.get('welcomeMessage')+'</p>');
				$('body').toggleClass('celsius', this.model.get('celsius'))

				return this;
			},

			addSettings: function(){
				var modal = new Settings({
					id: 'modal-settings',
					title: 'Add your settings',
					model: this.model
				});

				modal.show();
			},

			setpage : function(page){

				this.$content.find('.page').remove();
				switch(page){
					case 'dash':
						this.dashBordPage();
						break;
					case 'about':
						this.AboutPage();
						break;
				}
				
			},

			dashBordPage: function(){

				var dashBord = new Dashbord({
					className: 'page',
					id: 'dash-bord',
					pageTitle: 'Dashbord page'
				});

				this.$content.append(dashBord.render().el);

			},

			AboutPage: function(){

				var aboutpage = new About({
					className: 'page',
					id: 'about-page',
					pageTitle: 'About page'
				});

				this.$content.append(aboutpage.el);
			}

		});

		return AppView;

});