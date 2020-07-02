import React, {Component} from 'react';

class App extends Component{
    //state - no need to call super(props) if this were a child component 
    state = {
        userInput: ""
    }

    //handlers -  with an arrow function you do not need to bind handler method to this
    userInputHandler = (e) =>{
        this.setState({userInput: e.target.value});
    }

    //render
    render(){
        return(
            <div style={{textAlign: "center"}}>
                <input vaule={this.state.userInput} onChange={(e) => this.userInputHandler(e)} />
                <p>{this.state.userInput}</p>
            </div>
        )
    }
}
export default App;