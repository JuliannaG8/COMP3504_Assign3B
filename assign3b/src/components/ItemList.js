import {createRef} from "react";

const ItemList = (props)=>{
    const search = createRef();
    const handleSearch = ()=>{
        if (typeof search === "undefined")
            alert("No search parameters given")
    }
    return(
        <div>
            <label>Search items by name or id</label>
            <input type="text" name="search"/>
            <button onClick={handleSearch}/>
        </div>
    )
}
export default ItemList;
