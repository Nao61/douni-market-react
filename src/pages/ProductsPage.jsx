import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

function ProductsPage() {
  const [cart, setCart] = useState(0)
  
  const products = [
    { id: 1, name: 'Ordinateur Portable', price: '450 000' },
    { id: 2, name: 'Smartphone', price: '200 000' },
    { id: 3, name: 'Tablette', price: '150 000' },
    { id: 4, name: 'Écouteurs', price: '25 000' },
    { id: 5, name: 'Montre connectée', price: '80 000' },
    { id: 6, name: 'Clavier mécanique', price: '45 000' }
  ]

  const handleAddToCart = () => {
    setCart(cart + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Nos Produits</h1>
          <div className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            Panier: {cart} articles
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">💡Faites votre choix en cliquant sur "Ajouter au panier" </p>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage