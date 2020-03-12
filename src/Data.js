import React from 'react';
 
class Data extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    } 
countIncrement=()=>{
    this.setState({count:this.state.count+9});
    
}
countDecrement=()=>{
    this.setState({count:this.state.count-3});
}
    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.countIncrement}>Click Me for Increment</button>

                <button onClick={this.countDecrement}>Click Me for Decrement</button>
            </div>
        )

    }
}
export default Data;