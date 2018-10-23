var GreeterMessage = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Some H1</h1>
                <p>Some Paragraph</p>
            </div>
        )
    }
})

var GreeterForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        var name = this.refs.name.value;

        if (name.length > 0){
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },
    render: function(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <button>Set Name 2</button>
                </form>
            </div>
        )
    }
})

var Greeter = React.createClass({
    getDefaultProps: function(){
        return{
            name: 'Faza',
            message: 'Pesan ini dari Default Props'

        };
    },
    getInitialState: function(){
        return{
            name: this.props.name
        };
    },
    handleNewName: function(name){
            this.setState({
                name: name
            });
    },

    render: function(){
        var name = this.state.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello {name}</h1>
                <p>Pesan: {message + '!!!'} </p>
                <GreeterMessage/>
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        )
    }
});

var project = 'Warkah BPN';
var pesan = 'Pesan dari props manual';

ReactDOM.render(
    <Greeter name={project} message={pesan} />,
    document.getElementById('app')
);
