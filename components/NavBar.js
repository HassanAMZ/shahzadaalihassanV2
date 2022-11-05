import Link from 'next/link'
import CustomLink from './CustomLink'
import MobileNav from './MobileNav'
import headerNavLinks from '@/data/headerNavLinks'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-gray-900 bg-gray-100 text-gray-900">
      <nav className="flex items-center container mx-auto justify-between font-semibold antialiased">
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
          className="p-4 animate-charcter border-l-2 border-gray-900 hover:bg-gray-100 hover:text-gray-900 bg-teal-100 text-gray-900"
        >
          Let's Talk
        </CustomLink>
      </nav>
    </header>
  )
}
