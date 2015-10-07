'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
Parse.initialize('V60Of0dGEjcSFrUw72C0cJkNW4KNlpajBnvgM7wi', 'dE5AXtsjDoJE2OVLihBLxnycD8z57zZHTRRFKbnp');


var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var DashboardComponent = require('./components/DashboardComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	dashboard: function() {
		if(!Parse.User.current()) {
			this.navigate('login', {trigger: true});
		}
		else {
			React.render(<DashboardComponent />, app);
		}
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);