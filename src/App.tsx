import { RouterProvider, createBrowserRouter } from 'react-router'

import SignInPage from './page/sign-in-page'
import SignUpPage from './page/sign-up-page'
import Header from './shared/ui/header'

const router = createBrowserRouter([
  {
    path: '/',
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
