import React from 'react'

export default class MyCheckBox extends React.Component

{

    constructor()

    {

        super()

        this.state={

            display:false

        }

    }

    render()

    {

         

          const mycheckbox=<div><input type='checkbox'

          onChange={(e)=>{

           this.setState({display:!this.state.display})

          }}/></div>

        return <div>



   {mycheckbox}





   {

   this.state.display ?

   <p>Check box Selected</p>

   :<p>Check box not selected</p>

   }



        </div>

    }

}