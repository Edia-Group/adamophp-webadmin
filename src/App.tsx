import 'react-toastify/dist/ReactToastify.css'

import { useAuth, useAuthMock } from './hooks/useAuth'

import { AuthProvider } from './context/AuthContext'
import Header from './components/layout/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  //const { isAuthenticated } = useAuth()
  const isAuthenticated = useAuthMock()

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      
      {isAuthenticated && (
        <>
          {/* Mobile sidebar */}
          <Sidebar 
            isMobile={true} 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          {/* Desktop sidebar */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <Sidebar />
          </div>
        </>
      )}

      <div className={isAuthenticated ? "lg:pl-72" : ""}>
        {isAuthenticated && (
          <Header setSidebarOpen={() => setSidebarOpen(true)} />
        )}
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App