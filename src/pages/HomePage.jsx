import React from 'react'
import { ShoppingBag, Package, Info } from 'lucide-react'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Bienvenue sur Douni Market
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits de qualité au meilleur prix
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Large sélection</h3>
              <p className="text-gray-600">Des centaines de produits disponibles</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Livraison rapide</h3>
              <p className="text-gray-600">Recevez vos commandes rapidement</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Support 24/7</h3>
              <p className="text-gray-600">Notre équipe à votre service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage