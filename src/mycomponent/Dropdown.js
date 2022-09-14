import React, { Component } from 'react';
import {Dropdown,DropdownButton} from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
class Dropdownli extends Component {
  
  
  constructor()
  {
    super()
    this.state={

        itemarray:["coffe","tea","mcdc"]
    }
  }
  
    render() {

        const itemlist=this.state.itemarray.map((e)=>{
            return<div><DropdownItem eventKey={e}>{e}</DropdownItem><Dropdown.Divider/>  </div>
        })

        
        return (
            <div>
                <DropdownButton title="seleect item" onSelect={(e)=>{
                    console.log(e)
                }}>
                    {itemlist}
                    
                </DropdownButton>
            </div>
        );
    }
}

export default Dropdownli;