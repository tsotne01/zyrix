import ZyrixLogo from '@/shared/assets/zyrix-logo.svg'

import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { NavLink } from 'react-router'

import { CryptoSearch } from '../../features/search'

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full md:w-[90%] lg:w-[85%] md:max-w-[1440px] p-6 max-w-full mx-auto">
      <div className="flex items-center gap-7">
        <NavLink to={'/dashboard'} className="text-2xl text-blue-400 font-bold">
          <img src={ZyrixLogo} alt="Zyrix Logo" className="h-8 inline mr-2" />
        </NavLink>
        <nav>
          <ul className="hidden sm:block">
            <li className="flex text-[#BDBDBD] gap-12">
              <NavLink to={'/market'}>Market</NavLink>
              <NavLink to={'/spot'}>Spot</NavLink>
              <NavLink to={'/support'}>Support</NavLink>
              <NavLink to={'/learn'}>Learn</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-[24px]">
        <div className="flex items-center gap-[32px]">
          <CryptoSearch />
          {/* localization component goes here */}
        </div>
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
