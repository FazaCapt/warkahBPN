var React = require('react');

var Main = (props) => {
    return (
        <div>
           
            <div className="row">
            <h1>main.jsx</h1>
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
        
    )
}

module.exports = Main;