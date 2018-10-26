var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            location: 'Bandung',
            temp: 23
        }
    },
    handleSearch: function(location){
        var that = this;
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp
            })
        }, function(errorMessage){
             alert(errorMessage);
        })
    },
    render: function(){
        var {temp, location} = this.state;

        return (
            <div>
                <h1>Weather Component</h1>
                <WeatherMessage temp={temp} location={location}/>
                <WeatherForm onSearch={this.handleSearch}/>
            </div>
         
        )
    }
});

module.exports = Weather;