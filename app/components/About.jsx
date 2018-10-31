var React = require('react');

var About = (props) => {
    return (
        <div>
            <h2 className="text-center page-title">About Components</h2>
            <p>Aplikasi BPN untuk database warkah warga Surabaya</p>
            <p>Pembuatan ini menggunakan tools reactJS</p>
            <ul>
                <li>
                    <a href="https://foundation.zurb.com/sites/docs/grid.html">Menggunkan foundation</a>
                </li>
                <li>
                    <a href="https://reactjs.org/">Menggunakan reactJS</a>
                </li>
            </ul>
        </div>
        
    )
}
module.exports = About;