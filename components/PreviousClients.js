import Link from 'next/link'
import CustomLink from './CustomLink'
import previousClientsData from '@/data/previousClientsData'
import Image from 'next/image'
export default function PreviousClients() {
  return (
    <section>
      <div className="border-gray-900 dark:border-gray-100 border-b-2 sm:border-2 w-full bg-gray-100 dark:bg-gray-900 flex flex-col justify-between">
        <div className="font-bold px-4 py-2 border-b-2 border-gray-900 dark:border-gray-100 flex justify-between">
          <p> Recent Client's Projects</p>
          <div>{'o o o'}</div>
        </div>
        <div className="grid p-4  grid-cols-3 gap-2 justify-center items-center">
          {previousClientsData.map((client, index) => {
            return (
              <CustomLink
                key={index}
                target="_blank"
                href={client.clientSiteLink}
                customClasses="font-semibold border-2 border-gray-900 hover:bg-gray-100 hover:text-gray-900 bg-teal-100 text-gray-900 dark:border-gray-100 hover:dark:bg-gray-900 hover:dark:text-gray-100 dark:bg-teal-900 dark:text-gray-100 h-[100px] flex text-center"
              >
                <p className="m-auto">{client.clientName}</p>
              </CustomLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}
