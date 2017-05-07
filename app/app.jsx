var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var page1 = require('page1');
var signup = require('signup');
var signin = require('signin');
var talentsignup = require('talentsignup');
var employer = require('employer');
var Candidates = require('Candidates');
var Main = require('Main');
// Load foundation
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		<Route path="/signin" component={signin}/>
		<Route path="/signup" component={signup}/>
		<Route path="/talentsignup" component={talentsignup}/>
		<Route path="/employer" component={employer}/>
		<IndexRoute component={page1}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
