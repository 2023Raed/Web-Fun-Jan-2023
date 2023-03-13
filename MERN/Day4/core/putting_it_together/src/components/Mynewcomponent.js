import React, {Component} from 'react';


class Mynewcomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age:this.props.age

        }
    }
    change_age= () =>{
        this.setState({age:this.state.age+1});
    }
    render(){
        
        return(
            <div className ='App'>
             <h1>{this.props.lastName},{this.props.firstName}</h1>
             <p>{this.state.age}</p>
             <p>{this.props.hairColor}</p>
             <button onClick={this.change_age} >Birthday Button for {this.props.firstName} {this.props.lastName} </button>
            </div>
        )
    }
}
export default Mynewcomponent;