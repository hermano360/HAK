var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var page1 = require('page1');
var page2 = require('page2');
var signup = require('signup');
var talentSignup = require('talentsignup');
var employerSignup = require('employersignup');
var Candidates = require('Candidates');
var Main = require('Main');
// Load foundation
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		<Route path="/page2" component={page2}/>
		<Route path="/signup" component={signup}/>
		<Route path="/talent_signup" component={talentsignup}/>
		<Route path="/employer_signup" component={employersignup}/>
		<Route path="/Candidates" component={Candidates}/>
		<IndexRoute component={page1}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
