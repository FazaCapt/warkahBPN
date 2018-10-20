var Greater = React.createClass({
    getDefaultProps: function(){
        return{
            name: 'React',
            message: 'Bikin applikasi ReactJS Default'

        };
    },
    render: function(){
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello {name}</h1>
                <p>this is {message + '!!!'} </p>
            </div>
        )
    }
});

var project = 'Warkah BPN';
var pesan = 'Harus jadi applikasi keren nih';



ReactDOM.render(
    <Greater name={project} message={pesan} />,
    document.getElementById('app')
);
