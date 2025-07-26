"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, ImageIcon, FileText, LogOut } from "lucide-react"

// This would be replaced with actual authentication check
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate checking authentication
    const checkAuth = async () => {
      try {
        // In a real app, this would be an API call to verify the session
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsAuthenticated(true)
      } catch (error) {
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  return { isAuthenticated, isLoading }
}

export default function AdminDashboard() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-4">You need to be logged in to access this page.</p>
          <Link
            href="/admin/login"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Go to Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Conservation Trust Admin</h1>
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <LogOut className="h-5 w-5 mr-1" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blog Management Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Blog Posts</h3>
                  <p className="text-gray-500">Manage your blog content</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/admin/blog"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  Manage Posts
                </Link>
              </div>
            </div>
          </div>

          {/* Photo Management Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                  <ImageIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Photo Gallery</h3>
                  <p className="text-gray-500">Upload and manage photos</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/admin/gallery"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Manage Photos
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Messages Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                  <FileText className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Contact Messages</h3>
                  <p className="text-gray-500">View and manage contact messages</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/admin/contact-messages"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                >
                  View Messages
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Subscribers Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-pink-100 rounded-md p-3">
                  <FileText className="h-6 w-6 text-pink-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Newsletter Subscribers</h3>
                  <p className="text-gray-500">View and manage newsletter subscribers</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/admin/newsletter"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700"
                >
                  View Subscribers
                </Link>
              </div>
            </div>
          </div>

          {/* Website Preview Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                  <Home className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Website</h3>
                  <p className="text-gray-500">View your public website</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
