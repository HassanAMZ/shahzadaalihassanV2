import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/CustomLink'
import NewsletterForm from '@/components/NewsletterForm'
import headerNavLinks from '@/data/headerNavLinks'

export default function LargeWithLogoLeft() {
  const currentYear = new Date().getFullYear()
  // console.log(currentYear)

  return (
    <footer className="p-4 bg-gray-50 rounded-lg border-2 shadow md:px-6 md:py-8 dark:bg-gray-900">
      {siteMetadata.newsletter.provider !== '' && <NewsletterForm />}
      <div className="sm:flex sm:items-center sm:justify-between">
        <CustomLink href="/about-us" customClasses="flex items-center mb-4 sm:mb-0">
          <Image
            alt="Shahzada Ali Hassan"
            src="/static/images/avatar.png"
            width="40px"
            height="40px"
            className="bg-gray-50 rounded-full"
          />
          <span className="self-center px-2 text-2xl font-semibold gray-50space-nowrap text-gray-900 dark:text-gray-50">
            {siteMetadata.author}
          </span>
        </CustomLink>
        <div className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          {headerNavLinks.map((link) => (
            <CustomLink
              key={link.title}
              href={link.href}
              customClasses="mr-4 hover:underline md:mr-6"
            >
              {link.title}
            </CustomLink>
          ))}
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {currentYear} &nbsp;
        <CustomLink href="/about-us" customClasses="hover:underline">
          {siteMetadata.author}™
        </CustomLink>
        . All Rights Reserved.
      </span>
    </footer>
  )
}
