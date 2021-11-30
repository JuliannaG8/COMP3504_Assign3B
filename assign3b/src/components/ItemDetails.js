import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ItemDetails=()=>{
    const {id} = useParams();
    const [item, setItem] = useState({});
    useEffect(()=>{
        const url = `https://comp3504api.herokuapp.com/api/items/${id}`;
        fetch(url).then(resp=>{
            if (resp.ok)
                return resp.json();
            else
                throw new Error("Fetch failed");
        }).then(data=>{
            setItem(data);
        }).catch(e=>{
            console.error(e);
        });
    });
    return(
        <div>
            <h2>Detailed View</h2>
            <h3>{item.id}: {item.name}</h3>
            <p>Price: {item.price}</p>
            <p># in Stock: {item.qty}</p>
        </div>
    )
}
export default ItemDetails;
