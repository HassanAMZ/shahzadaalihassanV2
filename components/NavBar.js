import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from '@/components/ThemeSwitch'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/CustomLink'
import MobileNav from '@/components/MobileNav'
import Image from 'next/image'

export default function NavBar() {
  return (
    <header className="sticky border-white dark:border-gray-900 bg-white dark:bg-gray-900 top-0 z-50 flex items-center justify-between pt-6 pb-4 px-3 container mx-auto border-b-2">
      <div>
        <CustomLink href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center">
              <div className="bg-teal-700 dark:bg-white dark:hover:bg-gray-800 rounded-full w-[40px] h-[40px] relative hover:bg-white">
                <Image
                  alt="Shahzada Ali Hassan"
                  src="/static/images/avatar.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </CustomLink>
      </div>
      <div className="flex items-center justify-center gap-2 ">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <CustomLink
              key={link.title}
              href={link.href}
              className="p-1 hover:bg-teal-700 dark:hover:bg-white hover:text-white dark:hover:text-black font-bold text-gray-900 dark:text-gray-100 sm:p-4 rounded-[25px]"
            >
              {link.title}
            </CustomLink>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}
