import Mycomp from "./mycomponent/compo1";
import Table from "./mycomponent/table"
const img1=require("./images/dog.jpeg")
const myexp=<div>
  <ul><li>coffee</li>
  <li>Tea</li>
  <li>ice creame</li>
  <li>Burger</li>
  <li>cake</li></ul>
</div>
const book={
  "bookname":"Peter goes to school",
  "author":"Erric De Fang",
  "price":"200",
  "publisher":"selvi books"
}
function Menu()
{
  return myexp;
}

function App() {
  return (
    <div className="App">
     <img style={{height:130,width:140}} src= {img1}/>
   <h1> Name:{book.bookname}</h1><br/>
  <h1>  Author:{book.author}</h1><br/>
  <h1> Price: {book.price}</h1><br/>
  <h1>  Publisher:{book.publisher}</h1>
    </div>
  );
}

export default App;
