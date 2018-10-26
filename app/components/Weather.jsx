var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            location: 'Bandung',
            temp: 23
        }
    },
    handleSearch: function(location){
        // alert(location);
        this.setState({
            location: location,
            temp: 32
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