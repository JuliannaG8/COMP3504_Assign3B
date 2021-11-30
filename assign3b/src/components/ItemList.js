import {createRef} from "react";
import Item from "./Item";

const ItemList = (props)=>{
    const search = createRef();
    const handleSearch = ()=>{
        if (typeof search === "undefined")
            alert("No search parameters given")
        else
            props.search(search);
    }
    return(
        <div>
            <label>Search items by name or id</label>
            <input type="text" name="search"/>
            <button onClick={handleSearch}>Search</button>
            <button onClick={props.reset}>Reset</button>
            <ul>
                {props.items.map(item=><Item item={item} key={item.id}/>)}
            </ul>
        </div>
    )
}
export default ItemList;
