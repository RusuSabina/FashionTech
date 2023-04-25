import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/products'
import { Products } from '../components/Products'
import { Categories } from '../components/Categories'

export function Home() {
  const { data: products, isLoading } = useQuery({
    queryFn: getProducts,
    queryKey: ['products'],
  })

  if (isLoading) {
    return 'Loading ...'
  }
  console.log(products)

  return (
    <>
      <section className="bg-image fashiontech"></section>

      <div className=" categories-of-products pt-2">
        <h1 className="text-center pt-3">CATEGORIES OF PRODUCTS</h1>
      </div>
      <Categories />
      <Products />
    </>
  )
}
