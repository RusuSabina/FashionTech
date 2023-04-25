import { useNavigate } from 'react-router-dom'
import './Categories.style.css'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

export function Categories() {
  const navigate = useNavigate()
  const navigateToProducts = () => {
    navigate('/products')
  }

  return (
    <div className="container components-categories d-lg-flex text-center gap-3 d-md-block justify-content-center col-10 col-md-4  ">
      <div className="componenta-clothes shadow">
        <img
          className="componenta1"
          alt="photo_componenta1"
          src="https://ae01.alicdn.com/kf/S3ccb719ff3154438a37795b2e248b5d4Q/2022-Autumn-Winter-Plaid-Office-Work-Wear-Dresmen-s-Oxford-100-Cotton-Regular-Fit-l-Button.jpg_Q90.jpg_.webp"
        />
        <h3>
          <span className="title_categories h4 pt-4 fst-italic">Clothes</span>
        </h3>
        <div className="button_categories">
          <Button className="btn-primary" onClick={navigateToProducts}>
            View More
          </Button>
        </div>
      </div>
      <div className="componenta-jewelery shadow">
        <img
          className="componenta2"
          alt="photo_componenta2"
          src="https://cdn.shopify.com/s/files/1/1732/8449/files/HOMEPAGE_M_03_2048x.jpg?v=1679071485"
        />
        <h3>
          <span className="title_categories h4 pt-4 fst-italic">Jewelery</span>
        </h3>

        <div className="button_categories">
          <Button className="btn-primary" onClick={navigateToProducts}>
            View More
          </Button>
        </div>
      </div>
      <div className="componenta-electronics shadow">
        <img
          className="componenta3"
          alt="photo_componenta3"
          src="https://www.lg.com/ro/images/plp-b2c/uk-smarttvs-hero-1_2-m.jpg"
        />
        <h3>
          {' '}
          <span className="title_categories h4 pt-4 fst-italic">
            Electronics
          </span>
        </h3>
        <div className="button_categories">
          <Button className="btn-primary" onClick={navigateToProducts}>
            View More
          </Button>
        </div>
      </div>
    </div>
  )
}
