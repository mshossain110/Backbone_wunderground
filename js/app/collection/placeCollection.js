define([
	'backbone',
	'localStorage',
	'app/model/place'
], function(Backbone, localStorage, PlaceModel){
		'use static';

		var PlaceCollection = Backbone.Collection.extend({
				localStorage: new Backbone.LocalStorage("Places"),
				model : PlaceModel,

		});

		return PlaceCollection;
});