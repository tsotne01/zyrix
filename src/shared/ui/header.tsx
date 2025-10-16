import ZyrixLogo from '@/shared/assets/zyrix-logo.svg'

import { UserButton } from '@clerk/clerk-react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto p-4">
      <NavLink to={'/dashboard'} className="text-2xl text-blue-400 font-bold">
        <img src={ZyrixLogo} alt="Zyrix Logo" className="h-8 inline mr-2" />
      </NavLink>
      <div className="self-end">
        <UserButton />
      </div>
    </div>
  )
}

export { Header }
