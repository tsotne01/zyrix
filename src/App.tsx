import { SignInPage, SignUpPage } from '@/page/auth'
import { Header } from '@/shared/ui'

import { RouterProvider, createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home Page</div>,
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
