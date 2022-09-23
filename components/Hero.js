import Image from 'next/image'
import previousClientsData from '@/data/previousClientsData'
import CustomLink from '@/components/CustomLink'
import siteMetadata from '@/data/siteMetadata'
import CustomButton from '@/components/CustomButton'
import { FaArrowRight } from 'react-icons/fa'
import CustomHeading from '@/components/CustomHeading'
import HeroSlider from './HeroSlider'
export default function Hero() {
  return (
    <div className="h-[80vh] flex flex-col items-left justify-center px-4">
      <CustomHeading heading="title">The best gtm & tracking experts,</CustomHeading>
      <CustomHeading heading="sub-title" customClasses="opacity-80">
        at your fingertips.
      </CustomHeading>
      <p className="text-lg font-normal text-gray-900 dark:text-white w-[80%]">
        Agency quality, at freelancer prices. For projects and retainers, big and small.
      </p>
      <div className="w-fit">
        <CustomLink href={'/about'}>
          <CustomButton scheme="solid">
            <span className="pr-3">Start A Project</span>
            <FaArrowRight />
          </CustomButton>
        </CustomLink>
      </div>
      <div className="flex flex-row overflow-hidden">
        {previousClientsData.map((previousClient, index) => {
          return <HeroSlider key={index} previousClient={previousClient} />
        })}
      </div>
    </div>
  )
}
