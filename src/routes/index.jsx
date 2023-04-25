import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'
import Cart from '../pages/Cart'
import { Home } from '../pages/Home'

import Login from '../pages/Login'
import { RegistrationForm } from '../pages/RegistrationForm'
import { Products } from '../components/Products'
import { Product } from '../components/Product'

export default function () {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrationForm" element={<RegistrationForm />} />
      </Route>
    </Routes>
  )
}
