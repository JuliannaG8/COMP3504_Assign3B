import {createRef} from "react";
import Item from "./Item";
import {Link} from "react-router-dom";

const ItemList = (props)=>{
    const search = createRef();
    const handleSearch = ()=>{
        if (typeof search === "undefined")
            alert("No search parameters given")
        else
            props.search(search.current.value);
    }
    return(
        <div>
            <label>Search items by name or id</label>
            <input type="text" name="search" ref={search}/>
            <button onClick={handleSearch}>Search</button>
            <button onClick={props.reset}>Reset</button>
            <Link to="/addItem"><button>Add new Item</button></Link>
            <ul>
                {props.items.map(item=><Item item={item} key={item.id}/>)}
            </ul>
        </div>
    )
}
export default ItemList;
