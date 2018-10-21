var Greater = React.createClass({
    getDefaultProps: function(){
        return{
            name: 'React',
            message: 'Bikin applikasi ReactJS Default'

        };
    },
    onButtonClick: function(e){
        e.preventDefault();

        var name = this.refs.name.value;

        alert(name);
    },

    render: function(){
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello {name}</h1>
                <p>this is {message + '!!!'} </p>

                <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
                </form>
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
