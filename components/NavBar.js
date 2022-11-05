import Link from 'next/link'
import CustomLink from './CustomLink'
import MobileNav from './MobileNav'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from './ThemeSwitch'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-gray-900 bg-gray-100 text-gray-900 dark:border-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <nav className="flex items-center container mx-auto max-w-screen-xl justify-between font-semibold antialiased">
        <MobileNav />
        <CustomLink href="/" className="">
          Shahzada Ali Hassan
        </CustomLink>
        <div className="sm:flex space-x-4 hidden">
          {headerNavLinks.map((link) => (
            <CustomLink key={link.title} href={link.href}>
              {link.title}
            </CustomLink>
          ))}
        </div>

        <CustomLink
          href="/lets-talk"
          className="p-4 bg-clip-border bg-[length:200%__auto] bg-gradient-to-r dark:from-gray-100 from-gray-900 to-teal-500 animate-charcter border-l-2 border-gray-900 hover:bg-gray-100 hover:text-gray-900 bg-teal-100 text-gray-900 dark:border-gray-100 hover:dark:bg-gray-900 hover:dark:text-gray-100 dark:bg-teal-900 dark:text-gray-100"
        >
          Let's Talk
        </CustomLink>
      </nav>
    </header>
  )
}
