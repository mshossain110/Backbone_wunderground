define([
	'backbone',
	'app/model/country'
	],function(Backbone, Country){

		var Countries=Backbone.Collection.extend({
			model: Country

			})
		return Countries

});