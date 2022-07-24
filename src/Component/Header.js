import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"





function Header ()  {
    
    const {cartIteams} = useContext(Context)

    

    

function CartCheck() {
    if (cartIteams.length > 0) {
        
        return <Link to="/cart"><i className="fa-solid fa-cart-plus"></i></Link> 
    } else {

        
        return <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>

    }
}



        return (
            <header>
                <Link to="/"><h2>Pic Some</h2></Link>
                {CartCheck()}
            </header>
            
        )    
   
}

export default Header 