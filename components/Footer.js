import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/CustomLink'
import NewsletterForm from '@/components/NewsletterForm'

export default function LargeWithLogoLeft() {
  return (
    <>
      <div className="container mx-auto p-4 max-w-screen-xl ">
        <footer className="p-4 bg-white rounded-lg border-2 shadow md:px-6 md:py-8 dark:bg-gray-900">
          {siteMetadata.newsletter.provider !== '' && <NewsletterForm />}
          <div className="sm:flex sm:items-center sm:justify-between">
            <CustomLink href="/about-us" customClasses="flex items-center mb-4 sm:mb-0">
              <Image
                alt="Shahzada Ali Hassan"
                src="/static/images/avatar.png"
                width="40px"
                height="40px"
                className="bg-white rounded-full"
              />
              <span className="self-center px-2 text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
                {siteMetadata.author}
              </span>
            </CustomLink>
            <div className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <CustomLink href="/about-us" customClasses="mr-4 hover:underline md:mr-6 ">
                About
              </CustomLink>

              <CustomLink href="/projects" customClasses="mr-4 hover:underline md:mr-6">
                Projects
              </CustomLink>

              <CustomLink href="/blogs" customClasses="mr-4 hover:underline md:mr-6 ">
                Blogs
              </CustomLink>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{' '}
            <CustomLink href="/" customClasses="hover:underline">
              {siteMetadata.author}™
            </CustomLink>
            . All Rights Reserved.
          </span>
        </footer>
      </div>
    </>
  )
}
