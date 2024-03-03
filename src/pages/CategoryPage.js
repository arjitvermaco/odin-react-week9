import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
    const {id} = useParams();
    const url = `https://fakestoreapi.com/products/category/${id}`


    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    async function fetchProducts() {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
      setLoading(false)
    }

    useEffect(()=>{
      fetchProducts()
    },[id])

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-wrap gap-8 justify-between'>
    {loading? "Loading....":products.map(product => {
      return (
       <ProductCard key={product.id} product={product} />
      )
    })}
  </div>
  )
}
