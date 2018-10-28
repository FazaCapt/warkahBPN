var React = require('react');


// var WeatherMessage = React.createClass({
//     render: function(){
//         var {temp, location} = this.props;
//         return (
//             <div>
//                 <h3>It's it {temp} in {location}</h3>
//             </div>
//         )
//     }
// });

// Contoh 1
// var WeatherMessage = (props) => {
//     var {temp, location} = props;
//         return (
//             <div>
//                 <h3>It's it {temp} in {location}</h3>
//             </div>
//         )
// }

// Contoh 2
var WeatherMessage = ({temp, location}) => {
        return (
            <div>
                <h3>It's it {temp} in {location}</h3>
            </div>
        )
}

module.exports = WeatherMessage;