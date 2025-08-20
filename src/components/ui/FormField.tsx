'use client'

import { ReactNode } from 'react'
import { AlertCircle } from 'lucide-react'

interface FormFieldProps {
  label: string
  children: ReactNode
  error?: string
  required?: boolean
  description?: string
  id: string
}

export default function FormField({ 
  label, 
  children, 
  error, 
  required, 
  description,
  id 
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>
      
      {children}
      
      {description && (
        <p className="text-sm text-gray-500" id={`${id}-description`}>
          {description}
        </p>
      )}
      
      {error && (
        <div className="flex items-center space-x-2 text-red-600" role="alert">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">{error}</span>
        </div>
      )}
    </div>
  )
}