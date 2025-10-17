import { SignInPage, SignUpPage } from '@/page/auth'

import { RouterProvider, createBrowserRouter } from 'react-router'

import { MainLayout } from './layout'
import { Dashboard } from './page/dashboard'
import { HomePage } from './page/home'

const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <SignInPage redirectTo="/dashboard" />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage redirectTo="/dashboard" />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
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
