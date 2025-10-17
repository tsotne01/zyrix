import type { MenuSearchModalProps } from '@/shared/types'

export const MenuSearchModal = ({
  isOpen,
  onClose,
  className,
}: MenuSearchModalProps) => {
  return (
    <>
      {isOpen && (
        <div onClick={onClose} className={className}>
          Search Modal
        </div>
      )}
    </>
  )
}
