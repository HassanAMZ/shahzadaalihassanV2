import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/CustomLink'
import NewsletterForm from '@/components/NewsletterForm'

export default function LargeWithLogoLeft() {
  return (
    <>
      <div className="container mx-auto my-3 py-10 px-3">
        <footer className="p-4 dark:bg-white rounded-[25px] shadow md:px-6 md:py-8 bg-gray-900">
          {siteMetadata.newsletter.provider !== '' && <NewsletterForm />}
          <div className="sm:flex sm:items-center sm:justify-between">
            <CustomLink href="/about" className="flex items-center mb-4 sm:mb-0">
              <Image
                alt="Shahzada Ali Hassan"
                src="/static/images/avatar.png"
                width="40px"
                height="40px"
                className="bg-white rounded-full"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black text-white">
                {siteMetadata.author}
              </span>
            </CustomLink>
            <div className="flex flex-wrap items-center mb-6 text-sm dark:text-gray-500 sm:mb-0 text-gray-400">
              <CustomLink href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </CustomLink>

              <CustomLink href="/projects" className="mr-4 hover:underline md:mr-6">
                Projects
              </CustomLink>

              <CustomLink href="/blogs" className="mr-4 hover:underline md:mr-6 ">
                Blogs
              </CustomLink>
            </div>
          </div>
          <hr className="my-6 dark:border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm dark:text-gray-500 sm:text-center text-gray-400">
            © 2022{' '}
            <CustomLink href="/" className="hover:underline">
              {siteMetadata.author}™
            </CustomLink>
            . All Rights Reserved.
          </span>
        </footer>
      </div>
    </>
  )
}
