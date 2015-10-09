define([
'underscore'
], function(_){
	'use static';

	var Templates = Templates || {};

	Templates['app'] = [
			'<div class="row">',
        		'<div class="content" id="content"></div>',
    		'</div>'
	].join('');

	Templates['title'] = [
			'<div class="page-title">',
			'<div class="page-header">',
  				'<h1><%= pageTitle %></h1>',
			'</div>',
			'<button type="button" class="btn btn-primary btn-lg" id="addSettings">Settings</button>',
			'</div>',
			'<div class="pageContent">',
				'<div class="placelist"></div>',
			'</div>'
	].join('');

	Templates['modal'] = [
		'<div class="modal fade">',
  			'<div class="modal-dialog">',
    			'<div class="modal-content">',
      			'<div class="modal-header">',
        		'<button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button>',
        		'<h4 class="modal-title"><%= title %></h4>',
      			'</div>',
      			'<div class="modal-body">Test modal</div>',
      	'</div></div></div>'
	].join('');

	Templates['settings'] = [
		'<form role="form">',
			'<div class="form-group">',
				'<label for="welcomeMessageInput">Welcome Message</label>',
				'<input type="text" class="form-control" id="welcomeMessageInput" placeholder="Enter Welcome Message" value="<%= welcomeMessage %>">',
			'</div>',
			'<div class="form-group">',
				'<label for="backgroundColorInput">Background Color</label>',
				'<input type="text" class="form-control" id="backgroundColorInput" placeholder="#000000" value="<%= backgroundColor %>">',
			'</div>',
			'<div class="form-group">',
				'<select id="tempType" class="form-control">',
					'<option value="fahr" <% if(!celsius)print(\"selected\") %>>Fahrenheit</option>',
					'<option value="cel" <% if(celsius)print(\"selected\") %>>Celsius</option>',
				'</select>',
			'</div>',
			'<div id="saveSettings" class="btn btn-default">Save</div>',
		'</form>'
	].join('');



	Templates['appPlace'] =[
		'<form role="form">',
			'<div class="form-group">',
				'<label for="countryCodeInput">Select a country</label>',
				'<select id="Contrycode" class="form-control">',
					'<option value="San_Francisco|bA">Select a Country</option>',					
				'</select>',
			'</div>',
			'<div class="form-group">',
				'<label for="countryCodeInput">Country Name</label>',
				'<input type="text" class="form-control" id="countryCodeInput" placeholder="Enter country code">',
			'</div>',
			'<div class="form-group">',
				'<label for="nameInput">City Name</label>',
				'<input type="text" class="form-control" id="nameInput" placeholder="Enter the place name">',
			'</div>',
			'<div id="btn-add" class="btn btn-default">Submit</div>',
		'</form>'
	].join('');

	Templates['place'] = [
		'<div class="panel panel-info">',
			'<div class="panel-heading">',
				'<button id="btn-expand" type="button" class="close" aria-hidden="true">+</button>',
				'<button id="btn-remove" type="button" class="close" aria-hidden="true">&times;</button> ',
				'<h3 class="panel-title">',
					'<%= name %> - <%= countryCode %>',
				'</h3>',
			'</div>',
			'<div class="panel-body">',
				'Loading...',
			'</div>',
		'</div>'
	].join('');

	Templates['day'] = [
		'<div class="forecast-day">',
			'<h3><%= weekday %></h3>',
			'<img src="<%= icon_url %>" alt="" class="img-thumbnail">',
			'<p class="forecast-fahr"><%= lowFahrenheit %>°F - <%= highFahrenheit %>°F</p>',
			'<p class="forecast-cel"><%= lowCelsius %>°C - <%= highCelsius %>°C</p>',
			'<div class="forecast-conditions"><%= conditions %></div>',
		'</div>'
	].join('');

	for(temp in Templates){
		if(Templates.hasOwnProperty(temp)){
			Templates[temp]= _.template(Templates[temp]);
		}
	}

	/*return templates*/

	return Templates;
})