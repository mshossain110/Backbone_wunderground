define([
	'backbone'
	], function(Backbone){
		'use static';

		var PlaceModel= Backbone.Model.extend({
			defaults: {
			'countryCode': '',
			'name': ''
			}
		});

		return PlaceModel;
});