import React, { Component } from 'react';

class Calculator extends Component {
   
   
   constructor(){
    super()
this.state={
    "itmname":"coffee",
    "price":20
}
   }
   
    render() {
        return (
            <div>
               hello calciii  {this.props.username}
          <br/>{this.state.itmname  }  
        
        
        
        <button onClick={()=>{
this.setState({itmname:"helo"})
        }}>click</button>
</div>   );
    }
}

export default Calculator;