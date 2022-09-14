import Calculator from "./mycomponent/Calculator";
import MyCheckBox from "./mycomponent/Checkboxex";
import Dropdownli from "./mycomponent/Dropdown";
import Quiz from "./mycomponent/Quiz"
import Itemlist from "./mycomponent/Itemlist";
import Login from "./mycomponent/login";
function Mymsg(props)
{
    return <div>Itemname:{props.itemName}</div>
}
function App() {
  return (
    <div className="App">
      <Calculator username="peter"/>
{/* <Mymsg itemName="teaaa"/>

<Login/>
<Itemlist/> */}
{/* <MyCheckBox/>
<Dropdownli/> <Quiz/>*/}

   </div>
  );
}

export default App;
