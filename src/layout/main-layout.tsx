import { useUser } from '@clerk/clerk-react'

import { Header } from '../shared/ui'

type MainLayoutProps = Readonly<{
  children?: React.ReactNode
}>
export const MainLayout = ({ children }: MainLayoutProps) => {
  const user = useUser()
  console.log('User:', user)
  return (
    <>
      <Header />
      {children}
    </>
  )
}
