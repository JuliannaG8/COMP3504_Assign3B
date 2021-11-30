import './App.css';
import {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import {cloneDeep} from "lodash";

function App() {
  const [items, updateItems] = useState([]);
  const [itemsCopy, updateItemsCopy] = useState([]);
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
        updateItemsCopy(data);
      })
    }
  })
    const reset = ()=>{updateItemsCopy(items)}
    const search = (params)=>{
      const copy = cloneDeep(items);
      const matches = copy.filter((i)=> i.name.toLowerCase().includes(params) || i.id === params);
      if (matches.length === 0)
        alert("No items with name or id " + params);
      else
          updateItemsCopy(matches);

    }
  return (
    <div className="App">
      <Route path="/" exact>
        <ItemList items={itemsCopy} reset={reset} search={search}/>
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
