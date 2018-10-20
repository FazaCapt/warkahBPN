var Greater = React.createClass({
    getDefaultProps: function(){
        return{
            name: 'React'
        };
    },
    render: function(){
        var name = this.props.name;
        return(
            <div>
                <h1>Hello {name}</h1>
                <p>This is form a component</p>
            </div>
        )
    }
});

var project = 'Warkah BPN'


ReactDOM.render(
    <Greater name={project}/>,
    document.getElementById('app')
);
