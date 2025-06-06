'use client'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

interface Product {
  _id: string
  name: string
  description: string
  image: string
}

const Services: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products/display')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="p-10 flex flex-wrap gap-6 justify-center">
      {products.map((product) => (
        <Card
          key={product._id}
          img={product.image}
          header={product.name}
          description={product.description}
          productId={product._id}
        />
      ))}
    </div>
  )
}

export default Services
