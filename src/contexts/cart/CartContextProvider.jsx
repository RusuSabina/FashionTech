import { useState } from 'react'
import { CartContext } from './CartContext'

export function CartContextProvider({ children }) {
  //cart
  const [cart, setCart] = useState([])

  //way of interacting with my state
  function addProduct(prod) {
    console.log('Adding product ...')

    //the product already exists in the cart
    const dealExists = cart.find((product) => product.id === prod.id)
    if (dealExists) {
      const newCart = cart.map((product) => {
        const productInCart = product.id === prod.id
        if (productInCart) {
          //returns the transformed object
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        } else {
          return product
        }
      })
      setCart(newCart)
      //increment the counter
    } else {
      //otherwise we add the product with counter 1
      const newCart = [
        ...cart,
        {
          ...prod,
          quantity: 1,
        },
      ]
      setCart(newCart)
    }
  }

  function removeProduct(product) {
    console.log('Removing product ...', product)
    const newCart = cart.filter((prod) => product.id !== prod.id)
    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
