import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";


const ItemDetails=()=>{
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [fetching, setFetch] = useState(true);

    useEffect(()=>{
        const url = `https://comp3504api.herokuapp.com/api/items/${id}`;
        fetch(url).then(resp=>{
            if (resp.ok)
                return resp.json();
            else
                throw new Error("Fetch failed");
        }).then(data=>{
            setItem(data);
            setFetch(false);
            console.log(data);
        }).catch(e=>{
            console.error(e);
        });
    }, [item]);
    if (!fetching){
        return (
            <div>
                <h2>Detailed View</h2>
                <h3>{item[0].id}: {item[0].name}</h3>
                <p>Price: {item[0].price}</p>
                <p># in Stock: {item[0].qty}</p>
                <Link to="/">Go Back</Link>
            </div>
        )
    } else{
        return <p>Fetching data, PLease wait</p>
    }
}
export default ItemDetails;
