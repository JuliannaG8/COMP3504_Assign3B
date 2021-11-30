import {createRef, useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

const AddItemForm = ()=>{
    const name = createRef();
    const id = createRef();
    const price = createRef();
    const quantity = createRef();
    const [saved, hasSaved] = useState(false);
    useEffect(()=>hasSaved(false));
    const handleSubmit = e=>{
        e.preventDefault();
        if (typeof name === 'undefined')
            alert("name field cannot be blank");
        else if(typeof id === "undefined")
            alert("id field cannot be blank");
        else if(typeof price === "undefined")
            alert("price field cannot be blank");
        else if(typeof quantity === 'undefined')
            alert("# in Stock field cannot be blank");
        else{
            const url = `https://comp3504api.herokuapp.com/api/items/${id.current.value}/${name.current.value}/${price.current.value}/${quantity.current.value}`;
            fetch(url, {method: "POST", mode: "no-cors"}).then(()=>{
                    hasSaved(true);
            }).catch(e=>console.error(e))
        }
    }

    if (!saved){
        return (
            <form onSubmit={handleSubmit}>
                <h2>Add new Item</h2>
                <div>
                    Item Name:
                    <input type="text" ref={name}/>
                </div>
                <div>
                    Item ID:
                    <input type="number" ref={id}/>
                </div>
                <div>
                    Item price:
                    <input type="text" ref={price}/>
                </div>
                <div>
                    # in Stock:
                    <input type="number" ref={quantity}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    } else return <Redirect to="/"/>
}
export default AddItemForm;
