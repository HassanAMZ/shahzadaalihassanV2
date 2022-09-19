import CustomLink from '@/components/CustomLink'

export default function FourZeroFour() {
  return (
    <div className="container mx-auto bg-white rounded-[25px] border-teal-700 p-3 h-[80vh] flex items-center justify-center">
      <div className="rounded-[25px] py-4 text-center">
        <h1 className="text-9xl font-bold text-teal-400">404</h1>
        <h1 className="text-6xl font-medium py-2">Page not found</h1>
        <p className="text-2xl py-2 sm:px-16 sm:py-4 font-medium">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-white-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
          <CustomLink href="/">HOME</CustomLink>
        </button>
        <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-500 text-white font-semibold px-6 py-3 rounded-md">
          <CustomLink href="/blog">Blog</CustomLink>
        </button>
      </div>
    </div>
  )
}
