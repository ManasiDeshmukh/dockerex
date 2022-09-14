import React, { Component } from 'react';

class Booklist extends Component {
    
    
    constructor()
    {
        super()
        this.state={
            bookarray:["Peter goes to school","One fine monday morning","Edgers home","simond says"],
            address:"",
            book:""
        }
    }
    render() {

    const bookexp=this.state.bookarray.map((e)=>{
return <option key={e} >{e}</option>

    })
        return (
            <div>
                
<label>Enter address</label>
    <input type="text"  
     onChange={(e)=>{
     console.log(e.target.value);
     this.setState({address:e.target.value})
    }}/>
               <br/> <select onChange={(e)=>{
           console.log(e.target.value);
           this.setState({book:e.target.value})

       
                }}>{bookexp}</select>


<button onClick={()=>{
    
    alert("book is "+this.state.book +"address is"+this.state.address)
}}>login</button>

            </div>
        );
    }
}

export default Booklist;