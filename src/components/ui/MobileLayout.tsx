'use client'

import { ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import { Menu, X, FileText, PlusCircle, User } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface MobileLayoutProps {
  children: ReactNode
  title?: string
  showNav?: boolean
}

export default function MobileLayout({ children, title, showNav = true }: MobileLayoutProps) {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Contracts', href: '/dashboard', icon: FileText },
    { name: 'New Contract', href: '/contract/new', icon: PlusCircle },
    { name: 'Profile', href: '/profile', icon: User },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {showNav && (
        <>
          {/* Mobile header */}
          <header className="bg-white shadow-sm border-b lg:hidden">
            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✍️</span>
                  <h1 className="text-xl font-semibold text-gray-900">
                    {title || 'NapkinContracts'}
                  </h1>
                </div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  aria-label="Open menu"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
            
            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="border-t bg-white">
                <nav className="px-4 py-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </header>

          {/* Desktop sidebar */}
          <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:z-50 lg:bg-white lg:border-r">
            <div className="flex items-center space-x-3 px-6 py-4 border-b">
              <span className="text-2xl">✍️</span>
              <h1 className="text-xl font-semibold text-gray-900">NapkinContracts</h1>
            </div>
            
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* Main content */}
      <main className={showNav ? 'lg:pl-64' : ''}>
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}