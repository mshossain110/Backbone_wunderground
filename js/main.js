requirejs.config({
	paths:{
		'jquery': 'libs/jquery-1.11.2.min',
		'underscore': 'libs/underscore-min',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap.min',
		'localStorage': 'libs/backbone.localStorage'
	},

	shim:{
		'underscore' :{
			exports: '_'
		},

		'backbone':{
			deps:[
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},

		'localStorage' :{
			deps :[
				'backbone'
			]
		},

		'bootstrap':{
			deps:['jquery']
		}
	}
});

require(['app/app'],
	function(App){
		'use static';

		App.initialize();
		
		
	});
