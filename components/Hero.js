import Image from 'next/image'
import previousClientsData from '@/data/previousClientsData'
import CustomLink from '@/components/CustomLink'
import siteMetadata from '@/data/siteMetadata'
import CustomButton from '@/components/CustomButton'
import { FaArrowRight } from 'react-icons/fa'
import CustomHeading from '@/components/CustomHeading'
export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 container mx-auto px-3">
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <CustomLink
          href={siteMetadata.upwork}
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-600 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
            Check
          </span>
          <span className="text-sm font-medium">Profile on Upwrok</span>
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
        </CustomLink>
        <CustomHeading heading="title">Top Rated Web Analyts on Upwork</CustomHeading>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Measurement and web analytics are at the heart of all we do. After all, how can you tell
          if you got a return on your investment if you can't measure it?
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <CustomLink href={'/about'}>
            <CustomButton scheme="solid">
              <span className="pr-3">Learn more</span>
              <FaArrowRight />
            </CustomButton>
          </CustomLink>
          <CustomLink href={'/projects'}>
            <CustomButton scheme="ghost">Checkout Projects</CustomButton>
          </CustomLink>
        </div>
        <div className="px-4 mx-auto text-center lg:px-36 pb-6">
          {/* <span className="font-semibold text-gray-400 dark:text-gray-600 uppercase">
            FEATURED IN
          </span> */}
          <div className="flex gap-3 sm:gap-5 flex-wrap justify-center items-center mt-8 text-gray-500">
            {previousClientsData.slice(0, 6).map((previousClient, index) => {
              return (
                <div
                  key={index}
                  className="relative w-[80px] sm:w-[100px] md:w-[130px] h-8 sm:h-10 md:h-12 dark:grayscale dark:invert"
                >
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
  )
}
