class FirstReact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [
            {name: "Mai Huynh", age: 24}
            ],
            title: "Mai's page"
        }
    }

    render(){
        return(
            <div>
                <p>Simple React Component.</p>
                <p>{this.state.title}</p>
                <ul>
                    <li>Curent user: {this.state.users[0].name} and her age is {this.state.users[0].age} </li>
                    <li>Hello {this.props.name}</li>
                    <li>This is my {this.props.numb} React Page</li>  
                </ul>
            </div>
        );
    }
}
ReactDOM.render(
    <FirstReact name="Mai Huynh" numb="first"/>, 
    document.getElementById("app")
);