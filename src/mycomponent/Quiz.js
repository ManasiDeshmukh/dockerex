import React, { Component } from 'react';
import "../App.css"
class Quiz extends Component {


    constructor()
    {
      super()
     this.state={
      istyle:true
     }
     
    }
    



 
    render() {
        const mystyle1=()=>{

        
        
         if(this.istyle===false) 
         this.istyle=true
        
        
        
        }
        return (

            
            <div>
    <label>ReactJS is free and open sourc frontend....library</label><br/>
<button className="button1" style={this.state.changestyle?mystyle:mystyle} onClick={(e)=>
{mystyle1();
    
   // alert("coreect ans") 
} }>
        
        
        1. Javascript</button><br/>
<button className="button" onClick={(e)=>
{
    alert("wrong ans") 

}}>2. Bootstrap</button><br/>
<button className="button" onClick={(e)=>
{
  
}}>3. CSS</button><br/><button  className="button" onClick={(e)=>
    {
       
    }}>4. None of the above</button>


    </div>
    )}
}

export default Quiz;