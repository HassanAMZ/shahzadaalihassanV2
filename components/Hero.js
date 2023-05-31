import Link from 'next/link'
import CustomLink from '@/components/CustomLink'
import CustomButton from '@/components/CustomButton'

export default function Hero() {
  return (
    <div className="p-8 bg-gray-800 bg-opacity-[30%] rounded-lg text-left">
      <div className="py-5 mx-auto">
        <div className="flex justify-left py-2">
          <div className="relative rounded-full text-sm text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1 flex">
            Welcome to Hassan's Web Analytics Expertise! &nbsp;
            <CustomLink href="/about-us">
              <div className="font-semibold text-purple-500">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Learn More <span aria-hidden="true">&rarr;</span>
              </div>
            </CustomLink>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <h2 className="text-4xl font-bold tracking-tight leading-[2.5rem]">
            Take Your Web Analytics to the Next Level
          </h2>
          <p className="text-lg font-semibold">
            Hi, I'm Hassan, &nbsp;
            <span className="text-gray-300">
              a freelance web analytics expert ready to help you make data-driven decisions.
            </span>
          </p>
          <div className="flex pt-2 items-left justify-left gap-x-6">
            <CustomLink
              href="/portfolio"
              customClasses="inline-flex gap-2 items-center hover:underline text-sm  font-medium text-center text-teal-700 dark:text-teal-300 rounded-lg "
            >
              <CustomButton scheme={'solid'} customClasses="space-x-2">
                <p> Explore Services</p>
              </CustomButton>
            </CustomLink>
            <CustomLink
              href="/lets-talk"
              customClasses="inline-flex gap-2 items-center hover:underline text-sm font-medium text-center text-teal-700 dark:text-teal-300 rounded-lg "
            >
              <CustomButton scheme={'ghost'} customClasses="space-x-2">
                Get In Touch <span aria-hidden="true"> &nbsp;→ </span>
              </CustomButton>
            </CustomLink>
            {/* <CustomLink href="/portfolio">
              <p className="rounded-md bg-gradient-to-tr from-purple-500 to-pink-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:to-purple-500 hover:from-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500">
                Explore Services
              </p>
            </CustomLink> */}
            {/* <CustomLink href="/lets-talk">
              <div className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500">
                Get In Touch <span aria-hidden="true"> &nbsp;→ </span>
              </div>
            </CustomLink> */}
          </div>
        </div>
      </div>
    </div>
  )
}
