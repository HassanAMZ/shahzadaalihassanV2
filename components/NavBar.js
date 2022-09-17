import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/CustomLink'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let NavLinks = headerNavLinks.map((link, index) => (
    <CustomLink
      key={index}
      href={link.href}
      className="px-2 py-1 text-teal-600 rounded-md hover:text-white hover:bg-teal-600"
    >
      {link.title}
    </CustomLink>
  ))
  return (
    <header className="mx-1">
      <div className="container border-2 rounded-[25px] my-2 mx-auto border-teal-500">
        <div className="flex itmes-center justify-between gap-2">
          <button
            type="button"
            className="h-10 w-10 sm:hidden rounded-full border-teal-600 border-2 bg-teal-600 text-white p-2"
            aria-label="Toggle Menu"
            onClick={isOpen ? onClose : onOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <CustomLink
            href="/"
            aria-label={siteMetadata.author}
            className="rounded-full text-teal-600 bg-white hover:bg-teal-600 hover:text-white p-2"
          >
            {siteMetadata.author}
          </CustomLink>
          <nav className="sm:flex items-center justify-center hidden">{NavLinks}</nav>
          <div className="flex justify-center items-center">
            <CustomLink
              href="/projects"
              className="flex items-center justify-center gap-1 rounded-full text-white bg-teal-600 hover:bg-white hover:text-teal-600 py-0 sm:pr-3 pl-0"
            >
              <div className="bg-white rounded-full w-[40px] h-[40px] relative hover:bg-teal-600">
                <Image
                  alt="Shahzada Ali Hassan"
                  src="/static/images/avatar.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="sm:block hidden">Hire Me</p>
            </CustomLink>
          </div>
        </div>
        {isOpen ? (
          <button className="flex flex-col md:hidden" onClick={isOpen ? onClose : onOpen}>
            {NavLinks}
          </button>
        ) : null}
      </div>
    </header>
  )
}
