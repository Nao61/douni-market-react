import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Home, Info } from 'lucide-react'

function Header() {
  const location = useLocation()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-800">Douni Market</span>
          </div>
          
          <nav className="flex space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Accueil</span>
            </Link>

            <Link
              to="/products"
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/products'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Produits</span>
            </Link>

            <Link
              to="/about"
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/about'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              <Info className="w-5 h-5" />
              <span>À propos</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header