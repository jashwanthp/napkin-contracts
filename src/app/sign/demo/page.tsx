'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft, Trash2, Check, FileText } from 'lucide-react'

export default function SignDemoPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [signature, setSignature] = useState<string | null>(null)
  const [isSigned, setIsSigned] = useState(false)

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.strokeStyle = '#000'
    ctx.lineWidth = 2
    ctx.lineCap = 'round'

    let x, y
    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.clientX - rect.left
      y = e.clientY - rect.top
    }

    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let x, y
    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.clientX - rect.left
      y = e.clientY - rect.top
    }

    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setSignature(null)
  }

  const saveSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dataURL = canvas.toDataURL('image/png')
    setSignature(dataURL)
    setIsSigned(true)
  }

  if (isSigned) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        {/* Header */}
        <nav className="bg-white shadow-sm border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <Link href="/" className="flex items-center space-x-2 text-amber-700 hover:text-amber-900">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <div className="ml-8 flex items-center space-x-3">
                <span className="text-2xl">✍️</span>
                <h1 className="text-xl font-bold text-amber-900" style={{fontFamily: "'Kalam', cursive"}}>
                  Contract Signed Successfully
                </h1>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-lg border border-amber-200 p-8">
              <Check className="mx-auto h-16 w-16 text-green-600 mb-6" />
              <h1 className="text-3xl font-bold text-green-900 mb-4" style={{fontFamily: "'Kalam', cursive"}}>
                🎉 Contract Signed Successfully!
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Thank you for signing the contract. All parties will receive a copy of the fully executed agreement.
              </p>

              {signature && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Signature:</h3>
                  <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50 inline-block">
                    <img src={signature} alt="Your signature" className="max-w-xs" />
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-900 mb-2">What happens next?</h4>
                  <ul className="text-sm text-amber-800 space-y-1 text-left">
                    <li>• You'll receive a copy of the signed contract via email</li>
                    <li>• The contract is now legally binding</li>
                    <li>• All parties can download the final document</li>
                    <li>• Audit trail is preserved for legal purposes</li>
                  </ul>
                </div>

                <div className="flex gap-4 justify-center">
                  <Link href="/dashboard" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium">
                    View Dashboard
                  </Link>
                  <Link href="/" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-amber-700 hover:text-amber-900">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="ml-8 flex items-center space-x-3">
              <span className="text-2xl">✍️</span>
              <h1 className="text-xl font-bold text-amber-900" style={{fontFamily: "'Kalam', cursive"}}>
                Sign Contract Demo
              </h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-amber-200 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Please Sign This Agreement
            </h1>
            <p className="text-gray-600">
              Review the document and provide your digital signature below.
            </p>
          </div>

          {/* Sample Document Preview */}
          <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-gray-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Sample Service Agreement</h3>
            </div>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Agreement Date:</strong> August 20, 2025</p>
              <p><strong>Parties:</strong> Service Provider and Client</p>
              <p><strong>Services:</strong> Web development and digital marketing services</p>
              <p className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded">
                📋 <strong>Demo Notice:</strong> This is a sample contract for demonstration purposes. 
                In a real scenario, you would see the full document content here.
              </p>
            </div>
          </div>

          {/* Signature Section */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Digital Signature</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sign with your mouse or finger
                </label>
                <div className="border-2 border-dashed border-amber-300 rounded-lg p-4 bg-amber-50">
                  <canvas
                    ref={canvasRef}
                    width={400}
                    height={200}
                    className="border border-gray-300 rounded bg-white cursor-crosshair mx-auto"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    style={{ touchAction: 'none' }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Draw your signature in the box above using your mouse or finger
                </p>
              </div>

              <div className="flex space-x-4 justify-center">
                <button
                  onClick={clearSignature}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Clear</span>
                </button>
                <button
                  onClick={saveSignature}
                  className="flex items-center space-x-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
                >
                  <Check className="h-4 w-4" />
                  <span>Sign Contract</span>
                </button>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Legal Notice</h4>
              <p className="text-sm text-blue-800">
                By signing this document, you agree that your electronic signature is the legal equivalent 
                of your manual signature and that this document will be legally binding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}