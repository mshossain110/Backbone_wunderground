define([
	'app/views/appView',
	'app/model/appModel',
	'app/router/router'
	],
function(AppView, AppModel, Router){
	'use strict';

	var initialize = function(){
		var appModel = new AppModel({id: 1});

		var appview = new AppView({model: appModel});

		var router = new Router(appview);
		Backbone.history.start();
			appModel.fetch();
	}

	return {
		initialize : initialize 
	}
});