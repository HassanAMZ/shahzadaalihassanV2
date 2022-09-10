import Image from 'next/image'
import previousClientsData from '@/data/previousClientsData'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
export default function Hero() {
  return (
    <>
      <section className="dark:bg-white bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <Link href={siteMetadata.upwork}>
            <a
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  dark:text-gray-700 dark:bg-gray-100 rounded-full bg-gray-800 text-white dark:hover:bg-gray-200 hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                Check
              </span>
              <span className="text-sm font-medium">{siteMetadata.author} on Upwrok</span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </Link>
          <h1 className="mb-4 text-4xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 md:text-5xl lg:text-6xl text-white">
            Top Rated Web Analyts on Upwork
          </h1>
          <p className="mb-8 text-lg font-normal dark:text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-gray-400">
            Measurement and web analytics are at the heart of all we do. After all, how can you tell
            if you got a return on your investment if you can't measure it?
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href={'/about'}>
              <a className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 dark:focus:ring-primary-300 focus:ring-primary-900">
                Learn more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
            <Link href={'/projects'}>
              <a className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  dark:text-gray-900 rounded-lg border dark:border-gray-300 dark:hover:bg-gray-100 focus:ring-4 dark:focus:ring-gray-100 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                {/* <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg> */}
                Checkout Projects
              </a>
            </Link>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
            <div className="flex gap-3 flex-wrap justify-center items-center mt-8 text-gray-500">
              {previousClientsData.slice(4, 7).map((previousClient, index) => {
                return (
                  <div key={index} className="relative w-24 h-8 sm:48 md:w-52">
                    <Image
                      alt={previousClient}
                      src={`/static/previousClients/${previousClient}.png`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
