import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div>
              <table>
  <tr>
    <th>ItemName</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Coffe</td>
    <td>200</td>
   
  </tr>
  <tr>
    <td>Tea</td>
    <td>560</td>
    
  </tr>
  <tr>
    <td>Burger</td>
    <td>200</td>
    
  </tr>
</table>  
            </div>
        );
    }
}

export default Table;