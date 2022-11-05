import { useState } from 'react'
import CustomLink from '@/components/CustomLink'
import headerNavLinks from '@/data/headerNavLinks'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <>
      <div className="sm:hidden p-3 flex items-center justify-center">
        <button
          type="button"
          className="dark:text-gray-100 border-gray-900 text-gray-900"
          onClick={onToggleNav}
        >
          {navShow ? <AiOutlineClose size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      <div className="sm:hidden ">
        <div
          className={`fixed top-[52px] border-t-2 border-gray-900 dark:border-gray-100 right-0 z-10 h-full w-full transform bg-gray-100 duration-300 ease-in-out dark:bg-gray-900 ${
            navShow ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <button
            type="button"
            aria-label="toggle modal"
            className="fixed h-full w-full cursor-auto focus:outline-none"
            onClick={onToggleNav}
          ></button>
          <nav className="fixed h-full flex flex-col w-full divide-y">
            {headerNavLinks.map((link) => (
              <CustomLink
                key={link.title}
                href={link.href}
                className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 px-12 py-4 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-teal-700 hover:text-gray-100"
                onClick={onToggleNav}
              >
                {link.title}
              </CustomLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileNav
