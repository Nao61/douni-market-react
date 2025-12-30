import React from 'react'
import { Package } from 'lucide-react'

function ProductCard({ name, price, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
        <Package className="w-16 h-16 text-white" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
        <p className="text-purple-600 font-bold mt-2">{price} FCFA</p>
        <button 
          onClick={onAddToCart}
          className="mt-3 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}

export default ProductCard