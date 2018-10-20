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




ReactDOM.render(
    <Greater/>,
    document.getElementById('app')
);
