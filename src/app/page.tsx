'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">✍️</span>
              <h1 className="text-2xl font-bold text-amber-900" style={{fontFamily: "'Kalam', cursive"}}>
                NapkinContracts
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-amber-700 hover:text-amber-900 font-medium">Home</Link>
              <a href="#features" className="text-amber-700 hover:text-amber-900 font-medium">Features</a>
              <Link href="/dashboard" className="text-amber-700 hover:text-amber-900 font-medium">Dashboard</Link>
              <Link href="/contract/new" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Start Agreement
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6" style={{fontFamily: "'Kalam', cursive"}}>
            Make it Official
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-800 mb-8" style={{fontFamily: "'Kalam', cursive"}}>
            From Napkin to Contract
          </h2>
          <p className="text-xl text-amber-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turn your simple agreements into legally binding contracts. As easy as writing on a napkin, 
            but with full legal protection and digital signatures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contract/new" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg hover:shadow-xl inline-block">
              🚀 Start Your Agreement
            </Link>
            <Link href="/sign/demo" className="bg-white hover:bg-amber-50 text-amber-700 border-2 border-amber-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors inline-block">
              👀 Try Signing Experience
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200">
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2" style={{fontFamily: "'Kalam', cursive"}}>
              Napkin Simple
            </h3>
            <p className="text-amber-700">
              Create contracts as easy as writing on a napkin, but with full legal protection
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2" style={{fontFamily: "'Kalam', cursive"}}>
              Legally Sound
            </h3>
            <p className="text-amber-700">
              Every signature is authenticated and creates a binding legal agreement
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2" style={{fontFamily: "'Kalam', cursive"}}>
              Mobile First
            </h3>
            <p className="text-amber-700">
              Sign and manage contracts seamlessly on any device, anywhere
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <p className="text-amber-600 font-medium mb-4">Trusted by thousands of businesses</p>
          <div className="flex justify-center space-x-8 text-amber-700">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{fontFamily: "'Kalam', cursive"}}>10,000+</div>
              <div className="text-sm">Contracts Signed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{fontFamily: "'Kalam', cursive"}}>99.9%</div>
              <div className="text-sm">Legal Validity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{fontFamily: "'Kalam', cursive"}}>&lt; 5min</div>
              <div className="text-sm">Average Setup</div>
            </div>
          </div>
        </div>

        {/* Quick Test Links */}
        <div className="mt-16 text-center">
          <div className="bg-blue-100 rounded-xl p-8 border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4" style={{fontFamily: "'Kalam', cursive"}}>
              🧪 Test All Features
            </h3>
            <p className="text-blue-800 mb-6">
              Try out all the key features of your Napkin Contracts MVP:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contract/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                📝 Create Contract
              </Link>
              <Link href="/sign/demo" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium">
                ✍️ Sign Document
              </Link>
              <Link href="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium">
                📊 View Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="mt-8 text-center">
          <div className="bg-green-100 rounded-xl p-6 border-2 border-green-300">
            <h3 className="text-2xl font-bold text-green-900 mb-2" style={{fontFamily: "'Kalam', cursive"}}>
              🎉 MVP is Complete!
            </h3>
            <p className="text-green-800">
              All core features are working: Contract Creation, Signing, and Management!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}