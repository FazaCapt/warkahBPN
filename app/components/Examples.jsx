var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples Locations</h1>
            <p>Here are few example locationsto try out</p>
            <ol>
                <li>
                    <Link to='/?location=jakarta'>Jakarta</Link>
                </li>
                <li>
                    <Link to='/?location=Tangerang Selatan'>Tangerang Selatan</Link>
                </li>
            </ol>
        </div>
        
    )
}

module.exports = Examples;