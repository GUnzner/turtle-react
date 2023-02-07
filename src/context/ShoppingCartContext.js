import { createContext, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"


const ShoppingCartContext = createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)

}

export function ShoppingCartProvider( {children}) {

    const [isOpen, setIsOpen] = useState(false)
    let [cartItems, setCartItems] = useLocalStorage("shopping-cart", [])

    if (!Array.isArray(cartItems)){
        cartItems=setCartItems(Array.from(cartItems))
    }

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id){
         setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
         })
    }

    function decreaseCartQuantity(id){
        setCartItems(currItems => {
           if(currItems.find(item => item.id === id)?.quantity === 1) {
               return currItems.filter(item => item.id !== id)
           } else {
               return currItems.map(item => {
                   if (item.id === id) {
                       return {...item, quantity: item.quantity - 1}
                   } else {
                       return item
                   }
               })
           }
        })
   }

   function removeFromCart(id){
    setCartItems(currItems => {
        return currItems.filter(item => item.id !== id)
    })
   }
   function clearAll(){
    alert("Thank you for your support");
    setCartItems(currItems => []);
   }

    return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, 
            clearAll, openCart, closeCart, cartItems, cartQuantity }}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
    )
}