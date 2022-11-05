import CustomLink from '@/components/CustomLink'
import WebsiteLayout from '@/layouts/WebsiteLayout'
export default function FourZeroFour() {
  return (
    <WebsiteLayout>
      <div className="container mx-auto p-4 max-w-screen-xl bg-white dark:bg-gray-900 rounded-lg border-teal-700  h-[80vh] flex items-center justify-center">
        <div className="rounded-lg py-4 text-center">
          <h1 className="text-9xl font-bold text-teal-400">404</h1>
          <h1 className="text-6xl font-medium py-2">Page not found</h1>
          <p className="text-2xl py-2 sm:px-16 sm:py-4 font-medium">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <CustomLink href="/">
            <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-white-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
              HOME
            </button>
          </CustomLink>
          <CustomLink href="/blog">
            <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-500 text-white font-semibold px-6 py-3 rounded-md">
              Blog
            </button>
          </CustomLink>
        </div>
      </div>
    </WebsiteLayout>
  )
}
