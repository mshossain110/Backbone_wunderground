define([
	'backbone',
	'app/model/day'
], function(Backbone,Day){
		'use static';

		var Days = Backbone.Collection.extend({
				
				model : Day,
				sync : function(method, model, options){
					options.timeOut= 8000;
					options.dataType= "jsonp";

					return Backbone.sync(method, model, options);
				},

				parse: function(response){
					return response.forecast.simpleforecast.forecastday;
				}

		});

		return Days;
});