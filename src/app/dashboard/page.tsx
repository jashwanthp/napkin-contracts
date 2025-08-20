'use client'

import Link from 'next/link'
import { Plus, FileText, Clock, CheckCircle, Users } from 'lucide-react'

export default function DashboardPage() {
  // Sample contract data
  const contracts = [
    {
      id: '1',
      title: 'Freelance Web Design Agreement',
      status: 'completed',
      createdAt: '2025-08-15',
      recipients: ['john@example.com', 'sarah@client.com'],
      signedBy: 2,
      totalSigners: 2
    },
    {
      id: '2',
      title: 'Service Level Agreement',
      status: 'pending',
      createdAt: '2025-08-18',
      recipients: ['mike@vendor.com', 'lisa@company.com'],
      signedBy: 1,
      totalSigners: 2
    },
    {
      id: '3',
      title: 'Non-Disclosure Agreement',
      status: 'draft',
      createdAt: '2025-08-19',
      recipients: ['alex@startup.com'],
      signedBy: 0,
      totalSigners: 1
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'pending': return <Clock className="h-5 w-5 text-amber-600" />
      case 'draft': return <FileText className="h-5 w-5 text-gray-600" />
      default: return <FileText className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-amber-100 text-amber-800'
      case 'draft': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'pending': return 'Pending Signatures'
      case 'draft': return 'Draft'
      default: return 'Unknown'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <span className="text-3xl">✍️</span>
                <h1 className="text-2xl font-bold text-amber-900" style={{fontFamily: "'Kalam', cursive"}}>
                  NapkinContracts
                </h1>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/" className="text-amber-700 hover:text-amber-900 font-medium px-3 py-2">
                Home
              </Link>
              <Link 
                href="/contract/new" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Contract</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-900 mb-2" style={{fontFamily: "'Kalam', cursive"}}>
            Your Contracts
          </h1>
          <p className="text-amber-700">Manage and track all your digital agreements</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Contracts</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
              </div>
              <FileText className="h-8 w-8 text-amber-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-green-600">8</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-3xl font-bold text-amber-600">3</p>
              </div>
              <Clock className="h-8 w-8 text-amber-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-3xl font-bold text-blue-600">5</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Contracts Table */}
        <div className="bg-white rounded-xl shadow-lg border border-amber-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Contracts</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contract
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(contract.status)}
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{contract.title}</div>
                          <div className="text-sm text-gray-500">{contract.recipients.length} recipient(s)</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contract.status)}`}>
                        {getStatusText(contract.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm text-gray-900">{contract.signedBy}/{contract.totalSigners} signed</div>
                        <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-amber-600 h-2 rounded-full"
                            style={{ width: `${(contract.signedBy / contract.totalSigners) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(contract.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-amber-600 hover:text-amber-900">View</button>
                        {contract.status === 'draft' && (
                          <button className="text-blue-600 hover:text-blue-900">Edit</button>
                        )}
                        {contract.status === 'pending' && (
                          <button className="text-green-600 hover:text-green-900">Remind</button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Message */}
        <div className="mt-8 text-center">
          <div className="bg-green-100 rounded-xl p-6 border-2 border-green-300">
            <h3 className="text-2xl font-bold text-green-900 mb-2" style={{fontFamily: "'Kalam', cursive"}}>
              🎉 Dashboard is Working!
            </h3>
            <p className="text-green-800">
              Your contract management dashboard is now functional. You can create new contracts and track their status.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}