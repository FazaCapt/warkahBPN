var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); 
// Sama halnnya seperti dibawah 
var Route = require('react-router').Route;
// Penjelasan diatas seperti ini....
var objOne = {
    name: 'Faza'
}
var {name} = objOne;


ReactDOM.render(
    <h1>BoilerPlate WarkahBPN</h1>,
    document.getElementById('app')
);