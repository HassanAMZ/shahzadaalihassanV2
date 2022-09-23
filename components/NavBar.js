import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from '@/components/ThemeSwitch'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/CustomLink'
import MobileNav from './MobileNav '
import CustomButton from './CustomButton'
import { FaArrowRight } from 'react-icons/fa'
export default function NavBar() {
  return (
    <header className="sticky text-sm sm:text-base bg-gray-900 dark:bg-white top-0 z-50 flex items-center justify-between py-2 px-4 text-white dark:text-gray-900">
      <div className="flex ">
        <CustomLink
          href="/"
          className="border-b-2 border-gray-900 dark:border-white  hover:border-white dark:hover:border-gray-900"
        >
          [{siteMetadata.author}]
        </CustomLink>
        <div className="flex items-center hidden sm:block px-4">
          {headerNavLinks.map((link) => (
            <CustomLink
              key={link.title}
              href={link.href}
              className="mr-4 border-b-2 border-gray-900 dark:border-white  hover:border-white dark:hover:border-gray-900"
            >
              {link.title}
            </CustomLink>
          ))}
        </div>
      </div>

      <ThemeSwitch />
      <MobileNav />
      <CustomLink href={'/about'}>
        <CustomButton scheme="solid">
          <span className="pr-3">Start A Project</span>
          <FaArrowRight />
        </CustomButton>
      </CustomLink>
    </header>
  )
}
