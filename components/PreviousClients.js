import Link from 'next/link'
import CustomLink from './CustomLink'
import previousClientsData from '@/data/previousClientsData'
import Image from 'next/image'
export default function PreviousClients() {
  return (
    <div className="flex gap-3 sm:gap-5 flex-wrap justify-center items-center mt-8 text-gray-500 ">
      {previousClientsData.map((client, index) => {
        return (
          <CustomLink
            key={index}
            target="_blank"
            className="relative w-[80px] sm:w-[100px] md:w-[130px] h-8 sm:h-10 md:h-12 dark:grayscale dark:invert"
            href={client.clientSiteLink}
          >
            <Image
              alt={client.clientName}
              src={`/static/previousClients/${client.clientSlug}.png`}
              layout="fill"
              objectFit="contain"
            />
          </CustomLink>
        )
      })}
    </div>
  )
}
