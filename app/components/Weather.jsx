var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Weather Component</h1>
                <WeatherMessage/>
               <WeatherForm/>
            </div>
         
        )
    }
});

module.exports = Weather;