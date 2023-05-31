import CustomLink from './CustomLink'
import MobileNav from './MobileNav'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from './ThemeSwitch'

export default function NavBar() {
  return (
    <header>
      <nav className="flex items-center justify-between font-semibold antialiased">
        <div className="flex flex-row items-center justify-center p-3 gap-2">
          <MobileNav />
          {/* <ThemeSwitch /> */}
          <CustomLink href="/">Shahzada Ali Hassan</CustomLink>
        </div>
        <div className="sm:flex space-x-4 hidden">
          {headerNavLinks.map((link) => (
            <CustomLink key={link.title} href={link.href}>
              {link.title}
            </CustomLink>
          ))}
        </div>

        <CustomLink
          href="/lets-talk"
          customClasses="p-4 bg-clip-border bg-[length:200%__auto] bg-gradient-to-r dark:from-gray-100 from-gray-900 to-teal-500 animate-charcter border-gray-900 hover:bg-gray-100 hover:text-gray-900 bg-teal-100 text-gray-900"
        >
          Let's Talk
        </CustomLink>
      </nav>
    </header>
  )
}
