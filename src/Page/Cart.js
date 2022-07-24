import React,{useContext , useState} from "react"

import CartIteams from "../Component/CartIteams"
import {Context} from "../Context"





function Cart() {
   

  

    const {cartIteams , totalCost , Order , orderCheck } = useContext(Context)
    
    
    const cartItemElements = cartIteams.map(item => (
        <CartIteams key={item.id} item={item} />
    ))

      

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:{totalCost()}</p>
            <div className="order-button">
                <button onClick={Order}>{orderCheck ? "Ordering..." : "Place Order"}</button>
            </div>
        </main>
    )
}



export default Cart