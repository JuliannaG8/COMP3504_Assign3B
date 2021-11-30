import './App.css';
import {useEffect, useState} from "react";
import {Route} from "react-router-dom";

function App() {
  const [items, updateItems] = useState([])
  useEffect(()=>{
    if (items.length === 0){
      const url = "https://comp3504api.herokuapp.com/api/items";
      fetch(url).then(resp=>{
        if(resp.ok)
          return resp.json();
        else
          throw new Error("Fetch Failed");
      }).then(data=>{
        updateItems(data);
      })
    }
  })
  return (
    <div className="App">
      <Route path="/" exact>
        <ItemList items={items}/>
      </Route>
      <Route path="/addItem" exact>
        <AddItemForm/>
      </Route>
      <Route path="/itemDetails">
        <ItemDetails/>
      </Route>
    </div>
  );
}

export default App;