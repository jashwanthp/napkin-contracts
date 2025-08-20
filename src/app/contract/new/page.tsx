'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import MobileLayout from '@/components/ui/MobileLayout'
import PDFUpload from '@/components/contract/PDFUpload'
import FormField from '@/components/ui/FormField'
import { Upload, Users, Send, ArrowLeft, ArrowRight } from 'lucide-react'

interface Recipient {
  id: string
  name: string
  email: string
  role: 'SIGNER' | 'VIEWER'
}

export default function NewContractPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [contract, setContract] = useState({
    title: '',
    file: null as File | null,
    recipients: [] as Recipient[]
  })

  const [newRecipient, setNewRecipient] = useState({
    name: '',
    email: '',
    role: 'SIGNER' as 'SIGNER' | 'VIEWER'
  })

  const steps = [
    { id: 1, name: 'Upload Document', icon: Upload },
    { id: 2, name: 'Add Recipients', icon: Users },
    { id: 3, name: 'Send Contract', icon: Send }
  ]

  const handleFileUpload = (file: File) => {
    setContract(prev => ({ ...prev, file, title: file.name.replace('.pdf', '') }))
  }

  const addRecipient = () => {
    if (newRecipient.name && newRecipient.email) {
      const recipient = {
        id: Math.random().toString(36).substr(2, 9),
        ...newRecipient
      }
      setContract(prev => ({ 
        ...prev, 
        recipients: [...prev.recipients, recipient] 
      }))
      setNewRecipient({ name: '', email: '', role: 'SIGNER' })
    }
  }

  const removeRecipient = (id: string) => {
    setContract(prev => ({ 
      ...prev, 
      recipients: prev.recipients.filter(r => r.id !== id) 
    }))
  }

  const canProceed = () => {
    switch (step) {
      case 1: return contract.file !== null
      case 2: return contract.recipients.length > 0
      case 3: return true
      default: return false
    }
  }

  const nextStep = () => {
    if (canProceed() && step < 3) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSendContract = async () => {
    try {
      // Implementation for sending contract
      console.log('Sending contract:', contract)
      router.push('/dashboard')
    } catch (error) {
      console.error('Error sending contract:', error)
    }
  }

  return (
    <MobileLayout title="New Contract">
      <div className="max-w-2xl mx-auto">
        {/* Progress Steps */}
        <nav aria-label="Contract creation progress" className="mb-8">
          <ol className="flex items-center justify-between">
            {steps.map((stepItem, index) => (
              <li key={stepItem.id} className="flex items-center">
                <div className={`
                  flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
                  ${step >= stepItem.id 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-500'
                  }
                `}>
                  <stepItem.icon className="w-5 h-5" />
                </div>
                {index < steps.length - 1 && (
                  <div className={`
                    w-full h-0.5 ml-4 transition-colors
                    ${step > stepItem.id ? 'bg-blue-600' : 'bg-gray-300'}
                  `} />
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Upload Your Contract
                </h2>
                <p className="text-gray-600">
                  Upload the PDF document you want others to sign
                </p>
              </div>

              <FormField
                label="Contract Title"
                id="title"
                required
              >
                <input
                  id="title"
                  type="text"
                  value={contract.title}
                  onChange={(e) => setContract(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter contract title"
                />
              </FormField>

              <PDFUpload onFileUpload={handleFileUpload} />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Add Recipients
                </h2>
                <p className="text-gray-600">
                  Add people who need to sign or view this contract
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Name" id="recipient-name" required>
                  <input
                    id="recipient-name"
                    type="text"
                    value={newRecipient.name}
                    onChange={(e) => setNewRecipient(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Recipient name"
                  />
                </FormField>

                <FormField label="Email" id="recipient-email" required>
                  <input
                    id="recipient-email"
                    type="email"
                    value={newRecipient.email}
                    onChange={(e) => setNewRecipient(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="recipient@example.com"
                  />
                </FormField>
              </div>

              <button
                onClick={addRecipient}
                disabled={!newRecipient.name || !newRecipient.email}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:ring-2 focus:ring-blue-500"
              >
                Add Recipient
              </button>

              {/* Recipients List */}
              {contract.recipients.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-900">Recipients:</h3>
                  {contract.recipients.map((recipient) => (
                    <div key={recipient.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{recipient.name}</p>
                        <p className="text-sm text-gray-600">{recipient.email}</p>
                      </div>
                      <button
                        onClick={() => removeRecipient(recipient.id)}
                        className="text-red-600 hover:text-red-700 text-sm font-medium focus:ring-2 focus:ring-red-500 rounded px-2 py-1"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Review & Send
                </h2>
                <p className="text-gray-600">
                  Review your contract details before sending
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Contract: {contract.title}</h3>
                  <p className="text-sm text-gray-600">File: {contract.file?.name}</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900">Recipients ({contract.recipients.length})</h3>
                  <ul className="mt-2 space-y-1">
                    {contract.recipients.map((recipient) => (
                      <li key={recipient.id} className="text-sm text-gray-600">
                        {recipient.name} ({recipient.email})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={handleSendContract}
                className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors focus:ring-2 focus:ring-green-500"
              >
                Send Contract for Signing
              </button>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-gray-500 rounded-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          {step < 3 && (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:ring-2 focus:ring-blue-500"
            >
              <span>Next</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </MobileLayout>
  )
}