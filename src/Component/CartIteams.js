import React, {useContext, useState} from "react";
import {Context} from "../Context"



function CartIteams({item}) {

const {RemoveFromCart} = useContext(Context)
const [hover,setHover] = useState(false)

function HoverTrash() {


}

// const TrashIcon = hover ?  "fa-solid fa-octagon-minus" : "fa-solid fa-trash icon-dele"

    return (
        <div className="cart-item">
            <i  onClick={() =>RemoveFromCart(item.id)} className="fa-solid fa-trash icon-dele"
            onMouseEnter={() =>setHover(true)}
            onMouseLeave={() =>setHover(false)}
            
            
            
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )

}

export default CartIteams