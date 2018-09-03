class FirstReact extends React.Component{
    render(){
        return(
            <div>
                <p>Simple React Component.</p>
                <ul>
                    <li>Hello {this.props.name}</li>
                    <li>This is my {this.props.numb} React Page</li>  
                </ul>
            </div>
        );
    }
}
ReactDOM.render(
    <FirstReact name="Mai Huynh" numb ="first"/>, 
    document.getElementById("app")
);
