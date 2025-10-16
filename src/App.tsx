import { SignInPage, SignUpPage } from '@/page/auth'
import { Header } from '@/shared/ui'

import { SignedOut } from '@clerk/clerk-react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <SignedOut>
          <Navigate to="/sign-in" replace />
        </SignedOut>
        <div>Home Page</div>
      </>
    ),
  },
  {
    path: '/sign-in',
    element: <SignInPage redirectTo="/dashboard" />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage redirectTo="/dashboard" />,
  },
  {
    path: '/dashboard',
    element: (
      <div>
        <Header />
      </div>
    ),
  },
])

const App = () => {
  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
