import { Box, Button, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart/CartContext'

export default function CartPage() {
  const { cart, removeProduct } = useContext(CartContext)

  console.log(cart)

  return (
    <Box>
      <section className="bg-cart "></section>

      <Typography className="your-cart fw-bold text-center">
        Your Cart{' '}
      </Typography>
      <hr />
      <Box sx={{ width: '100%' }}>
        {cart.length !== 0 ? (
          cart.map((product) => {
            const totalPrice = product.quantity * +product.price
            return (
              <Box mb={2}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={4}
                >
                  <img
                    className="img-cart"
                    src={product.image}
                    alt={product.title}
                  />

                  <Typography className="tp-cart">{product.title} </Typography>
                  <Typography className="price-cart">
                    {' '}
                    {product.quantity} X {product.price}€ ={' '}
                    <b>
                      <u>{totalPrice}</u>
                    </b>
                    €
                  </Typography>
                </Stack>
                <Button
                  className="remove-cart"
                  onClick={() => {
                    removeProduct(product)
                  }}
                  color="error"
                  variant="contained"
                >
                  Remove
                </Button>
              </Box>
            )
          })
        ) : (
          <Typography variant="body1" textAlign="center">
            No products in cart
          </Typography>
        )}
      </Box>
      <hr />
    </Box>
  )
}
