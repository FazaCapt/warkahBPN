var Greater = React.createClass({
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

                <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
                </form>
            </div>
        )
    }
});

var project = 'Warkah BPN';
var pesan = 'Pesan dari props manual';

ReactDOM.render(
    <Greater name={project} message={pesan} />,
    document.getElementById('app')
);
