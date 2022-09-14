import React, { Component } from 'react';

class Login extends Component {
    constructor()
    {
        super()
        this.state={
            "username":"",
"password":""        }
    }
    render() {
        return (
            <div>
           
<form>
    <label>Enter username </label><br/>
    <input type="text"
    onChange={(e)=>{
      //  console.log(e.target.value)
        this.setState({username:e.target.value})
    }}/><br/>
    <label>Enter email</label><br/>
    <input type="email"/><br/>
    <label>Enter password</label><br/>
    <input type="password"   onChange={(e)=>{
        //console.log(e.target.value)
        this.setState({password:e.target.value})
    }}/><br/>
<button onClick={()=>{
    if(this.state.username==="admin" &&this.state.password==="admin123")
    alert("valid")
}}>login</button>
</form>
                    
            
            </div>
        );
    }
}

export default Login;