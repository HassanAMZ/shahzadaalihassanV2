import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from '@/components/ThemeSwitch'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/CustomLink'
import MobileNav from '@/components/MobileNav '
import Image from 'next/image'

export default function NavBar() {
  return (
    <header className="flex items-center justify-between py-6 px-3 container mx-auto">
      <div>
        <CustomLink href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center">
              <div className="bg-teal-700 rounded-full w-[40px] h-[40px] relative hover:bg-white">
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
      <div className="flex items-center ">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <CustomLink
              key={link.title}
              href={link.href}
              className="p-1 hover:bg-teal-700 dark:hover:text-white font-bold dark:text-gray-900 text-gray-100 sm:p-4 rounded-[25px]"
            >
              {link.title}
            </CustomLink>
          ))}
        </div>
        <MobileNav />
      </div>
      <span className="hidden sm:block">{/* <ThemeSwitch /> */}</span>
    </header>
  )
}
