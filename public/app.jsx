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
    render: function(){
        return(
            <div>
                <form>
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
    onButtonClick: function(e){
        e.preventDefault();

        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value = '';

        // algoritma supaya waktu diClik halaman tidak kosong
        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });
        }
    },

    render: function(){
        var name = this.state.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello {name}</h1>
                <p>Pesan: {message + '!!!'} </p>
                <GreeterMessage/>
            

                <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
                </form>
                <GreeterForm/>
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
