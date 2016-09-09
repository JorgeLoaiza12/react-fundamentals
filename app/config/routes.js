var React = require('react');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var IndexRoute = require('react-router').IndexRoute
var hashHistory = require('react-router').hashHistory
var Main = require('../components/Main');
var Home = require("../components/Home");
var About = require("../components/About");
var PromptContainer = require('../containers/PromptContainer.js');

var routes = (
  <Router history={hashHistory} >
    <Route path="/" component={Main}>
      <IndexRoute component={Home} /> 
      <Route path="playerOne" header="Player One" component={PromptContainer} />
      <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;