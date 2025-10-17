import SearchIcon from '@/shared/assets/search-icon.png'

import { useState } from 'react'

import { MenuSearchModal } from '../../../widgets/ui'

export const CryptoSearch = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="relative">
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="h-5 w-5 inline mr-2"
        />
      </div>
      <MenuSearchModal
        className="absolute top-9 left-0"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}
