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
              <a href="#" className="text-amber-700 hover:text-amber-900 font-medium">Home</a>
              <a href="#" className="text-amber-700 hover:text-amber-900 font-medium">Features</a>
              <a href="#" className="text-amber-700 hover:text-amber-900 font-medium">Pricing</a>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Start Agreement
              </button>
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
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              🚀 Start Your Agreement
            </button>
            <button className="bg-white hover:bg-amber-50 text-amber-700 border-2 border-amber-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
              👀 Watch Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
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

        {/* Demo Section */}
        <div className="mt-16 text-center">
          <div className="bg-amber-100 rounded-xl p-8 border-2 border-amber-300">
            <h3 className="text-2xl font-bold text-amber-900 mb-4" style={{fontFamily: "'Kalam', cursive"}}>
              🎉 You're seeing Napkin Contracts!
            </h3>
            <p className="text-amber-800 mb-4">
              This means your page.tsx file is working correctly. The default Next.js page has been replaced!
            </p>
            <p className="text-sm text-amber-700">
              Next step: Add the contract creation flow and other features from the roadmap.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}