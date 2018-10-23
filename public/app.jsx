var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./components/GreeterMessage');

var GreeterForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        var updates = {};

        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0){
            this.refs.name.value = '';
            updates.name = name;
        }
        if (message.length > 0){
            this.refs.message.value = '';
            updates.message = message;
        }
        this.props.onNewData(updates);
    },
    render: function(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter Name"/>
                </div>
                <div>
                    <textarea type="text" ref="message" placeholder="Enter Text"></textarea>
                </div>
                <div>
                    <button>Set Name</button>
                </div>
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
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewData: function(updates){
            this.setState(updates);
    }, 
    render: function(){
        var name = this.state.name;
        var message = this.state.message;
        return(
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        )
    }
});

var firstName = "Faza Fahamsyah"

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);
