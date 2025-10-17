import ZyrixLogo from '@/shared/assets/zyrix-logo.svg'

import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full md:w-[90%] lg:w-[85%] max-w-[1440px] mx-auto p-4">
      <NavLink to={'/dashboard'} className="text-2xl text-blue-400 font-bold">
        <img src={ZyrixLogo} alt="Zyrix Logo" className="h-8 inline mr-2" />
      </NavLink>
      <div className="self-end">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="flex gap-[24px]">
            <NavLink
              to="/sign-up"
              className="bg-[#FFC107] hover:bg-[#FFC107]/70 text-black transition duration-400 font-semibold py-2 px-7 rounded-[32px]"
            >
              Sign up
            </NavLink>
            <NavLink
              to="/sign-in"
              className="bg-transparent border-1 border-white transition duration-400 hover:bg-white hover:text-black text-white font-semibold py-2 px-7 rounded-[32px]"
            >
              Log in
            </NavLink>
          </div>
        </SignedOut>
      </div>
    </div>
  )
}

export { Header }
