import React, { useState, useContext }  from "react";
import {Context} from "../Context"
import PropTypes from 'prop-types';

function Image({className , img }) {
    const [hoverImg , setHoverImg] = useState(false)
    const {toggleFavorite,addToCart , cartIteams , RemoveFromCart} = useContext(Context)
   
    
   

  const haretHover = hoverImg && <i onClick={() => toggleFavorite(img.id)} className={img.isFavorite ?  "fa-solid fa-heart color-icon" : "fa-regular fa-heart"} ></i>





  function cartIcon() {
    const alreadyInCart = cartIteams.some(item => item.id === img.id)
    if(alreadyInCart) {

        return <i onClick={() =>RemoveFromCart(img.id)} className="fa-solid fa-cart-shopping"></i>
    } else if(hoverImg) {
        return <i className="fa-solid fa-plus" onClick={() => addToCart(img)}></i>
    }
}

  

    return (
        <div className={`${className} image-container`}
        onMouseEnter={() =>setHoverImg(true)}
        onMouseLeave={() => setHoverImg(false)}
        >
      
        <img  src={img.url} className="image-grid photos "/>
         
        {haretHover}
        {cartIcon()}
        
    </div>
    )
}

Image.propTypes = {
    className:PropTypes.string,
    img: PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired

    })
}

export default Image