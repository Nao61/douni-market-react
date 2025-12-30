import React from 'react'

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          À propos de nous
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-3">
              Notre Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Douni Market est une plateforme dédiée à offrir les meilleurs produits 
              technologiques à des prix compétitifs. Nous croyons en la qualité et 
              la satisfaction client.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-3">
              Notre Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Devenir la référence en matière de commerce électronique en Afrique, 
              en proposant une expérience d'achat exceptionnelle et un service client 
              irréprochable.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Contact</h3>
            <p className="text-gray-700">📧 Email: contact@dounimarket.com</p>
            <p className="text-gray-700">📱 Téléphone: +229 XX XXX XX XX</p>
            <p className="text-gray-700">🌐 GitHub: nao61</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage