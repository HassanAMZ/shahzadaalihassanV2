import Image from 'next/image'
import CustomLink from '@/components/CustomLink'
import siteMetadata from '@/data/siteMetadata'
import CustomButton from '@/components/CustomButton'
import { FaArrowRight } from 'react-icons/fa'
import CustomHeading from '@/components/CustomHeading'
export default function HeroSlider({ previousClient }) {
  const { client, image, website } = previousClient
  return (
    <div>
      {client}
      <div className="overflow-hidden rounded-sm w-64 h-64">
        <Image src={image} layout="responsive" width={1080} height={1080} alt={client} />
      </div>
    </div>
  )
}
