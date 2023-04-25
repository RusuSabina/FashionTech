import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.style.css'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart/CartContext'

export function Product() {
  const { addProduct } = useContext(CartContext)
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json())
      setLoading(false)
    }
    getProduct()
  }, [])

  const Loading = () => {
    return <>Loading...</>
  }

  const ShowProduct = () => {
    return (
      <>
        <div className=" col-md-6 col-lg-5">
          <img
            className="img-product ms-4"
            src={product.image}
            alt={product.title}
            height="350px"
            width="300px"
          />
        </div>
        <div className="col-md-6 mb-5 mt-5 ms-1">
          <h4 className="category-product category-product text-uppercase fw-bolder text-black-50">
            <u> {product.category} </u>
          </h4>
          <h1 className="title-product display-6">{product.title}</h1>
          <p className="rating ">
            Rating: {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">{product.price} €</h3>
          <p className="lead description-product text-5">
            {product.description}
          </p>

          <button
            onClick={() => {
              addProduct(product)
            }}
            type="submit"
            className="btn btn-addtocart ms-0 mt-4 "
          >
            Add to Cart
          </button>

          <button className="btn btn-gotocart ms-4">
            {' '}
            <a href="/cart">Go to Cart</a>
          </button>
        </div>
      </>
    )
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  )
}
