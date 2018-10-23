var GreeterMessage = React.createClass({
    render: function(){
        var name = this.props.name;
        var message = this.props.message;

        return(
            <div>
                <h1>Hello {name}!</h1>
                <p>INI PESAN: {message}</p>
            </div>
        )
    }
})

var GreeterForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0){
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
        if (message.length > 0){
            this.refs.message = '';
            this.props.onNewMessage(message);
        }
    },
    render: function(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <br/>
                <textarea type="text" ref="message" cols="18" rows="5"></textarea>
                <button>Set Name</button>
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
                name: name,
                message: message
            });
    },
    handleNewMessage: function(message){
        this.setState({
            message: message
        });
},

    render: function(){
        var name = this.state.name;
        var message = this.props.message;
        return(
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
            </div>
        )
    }
});

var firstName = "Faza Fahamsyah"

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);
