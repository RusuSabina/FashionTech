import { Button } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import './Products.style.css'
import { CartContext } from '../contexts/cart/CartContext'

export function Products() {
  const { addProduct } = useContext(CartContext)

  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)
  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products')
      if (componentMounted) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
        console.log(filter)
      }

      return () => {
        componentMounted = false
      }
    }
    getProducts()
  }, [])

  const Loading = () => {
    return (
      <>
        <div className=" col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    )
  }
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat)
    setFilter(updatedList)
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-grid gap-2 d-md-flex d-lg-flex justify-content-center mb-5 ">
          <button
            className="btn btn-lg btn-outlined-dark me-3"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-lg btn-outlined-dark me-3"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-lg btn-outlined-dark me-3"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-lg btn-outlined-dark me-3"
            onClick={() => filterProduct('jewelery')}
          >
            Jewelery
          </button>
          <button
            className="btn btn-lg btn-outlined-dark me-3"
            onClick={() => filterProduct('electronics')}
          >
            Electronics
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              key={product.id}
              className="products col-12 col-md-6 col-lg-3 mb-4"
            >
              <div className="card  product-item h-100 text-center p-4">
                <a href={`/products/${product.id}`} className="card-title mb-0">
                  <img
                    component="image"
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="300px"
                    width="100%"
                  />{' '}
                </a>
                <div className="card-body">
                  <a
                    href={`/products/${product.id}`}
                    className="card-title mb-0"
                  >
                    {' '}
                    {product.title.substring(0, 12)}...
                  </a>

                  <p className="card-text fw-bold">{product.price}€</p>
                  <Button
                    onClick={() => {
                      addProduct(product)
                    }}
                    className="btn buy-products-btn color-btn-outline-light text-light"
                  >
                    buy now
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="latest-products col-12 mb-5">
            <h1 className="text-latestproducts display-6 fw-bolder text-center">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
}
