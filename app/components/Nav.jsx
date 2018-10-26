var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function(){
        return (
            <div>
                <h2>Nav Components</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Get Weather</IndexLink>
                <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >About</Link>
                <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Examples</Link>

                <a href="#/About">Go To About</a>
            </div>
            
        )
    }
});

module.exports = Nav;