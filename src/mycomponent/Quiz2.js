import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'

import React from 'react'

export default class Quiz2 extends React.Component

{

 constructor()

 {

    super()

    this.state={

        changestyle:false

    }

 }



 render()

 {




const mystyle={

    backgroundColor:'aqua',

    height:'70px',

    width:'150px',

    color:'blue'



}



const notmystyle={

    backgroundColor:'orange',

    height:'70px',

    width:'150px',

    color:'blue'



}




       const mypara=<p  style={this.state.changestyle?mystyle:notmystyle} >Lorem Ipsum!Deq Noir ere!</p>

       

       return <div onClick={()=>{

        this.setState({changestyle:!this.state.changestyle})

       }}>

       

 {mypara}

 



       </div>

 }    

}