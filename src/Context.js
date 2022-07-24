import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartIteams , setCartIteams] = useState([])
    const [orderCheck,setOrderCheck] = useState(false)

    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
            
        })
        setAllPhotos(updatedArr)
    }
    function addToCart(iteams) {
        setCartIteams(prevet => [...prevet , iteams])
    }
    function RemoveFromCart(id) {
        setCartIteams(prevet => prevet.filter(iteam => iteam.id !== id))
        
    }
    function totalCost() {
        let number = 5.99
        const totalNumber = cartIteams.length * number
        let fixNumber = totalNumber.toFixed(2).toLocaleString("en-US", {style: "currency", currency: "USD"})
        return fixNumber
    }

    function Order() {
        if (cartIteams.length > 0) {
            setOrderCheck(true)
        setTimeout(() => {
            console.log("Order placed")
            setCartIteams([])
            setOrderCheck(false)
        },3000)
        }
        

    }

    
    return (
        <Context.Provider value={{allPhotos, toggleFavorite,addToCart , cartIteams , RemoveFromCart , totalCost , setCartIteams, Order, orderCheck }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}