'use client'

import { useRef, useState, useEffect } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { Trash2, Check, Pen } from 'lucide-react'

interface SignaturePadProps {
  onSave: (signature: string) => void
  onClear?: () => void
  width?: number
  height?: number
}

export default function SignaturePad({ onSave, onClear, width = 400, height = 200 }: SignaturePadProps) {
  const sigCanvas = useRef<SignatureCanvas>(null)
  const [isEmpty, setIsEmpty] = useState(true)

  const clearSignature = () => {
    sigCanvas.current?.clear()
    setIsEmpty(true)
    onClear?.()
  }

  const saveSignature = () => {
    if (sigCanvas.current && !sigCanvas.current.isEmpty()) {
      const signature = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png')
      onSave(signature)
    }
  }

  const handleEnd = () => {
    if (sigCanvas.current) {
      setIsEmpty(sigCanvas.current.isEmpty())
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
        <div className="flex items-center justify-between p-3 bg-gray-50 border-b">
          <div className="flex items-center space-x-2">
            <Pen className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Sign here</span>
          </div>
          <p className="text-xs text-gray-500">Use your finger or mouse to sign</p>
        </div>
        
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            width,
            height,
            className: 'signature-canvas cursor-crosshair',
            role: 'img',
            'aria-label': 'Signature drawing area'
          }}
          backgroundColor="#ffffff"
          penColor="#000000"
          onEnd={handleEnd}
        />
      </div>
      
      <div className="flex space-x-3">
        <button
          onClick={clearSignature}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors focus:ring-2 focus:ring-gray-500"
          aria-label="Clear signature"
        >
          <Trash2 className="h-4 w-4" />
          <span>Clear</span>
        </button>
        
        <button
          onClick={saveSignature}
          disabled={isEmpty}
          className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-blue-500"
        >
          <Check className="h-4 w-4" />
          <span>Save Signature</span>
        </button>
      </div>
    </div>
  )
}