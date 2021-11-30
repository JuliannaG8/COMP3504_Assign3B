import {Link} from "react-router-dom";

const Item = props=>{
    return(
        <li><Link to={`/item/${props.item.id}`}>{props.item.id} {props.item.name}</Link></li>
    )
}
export default Item;
