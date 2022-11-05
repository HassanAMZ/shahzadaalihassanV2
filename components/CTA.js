import Link from 'next/link'
import CustomLink from './CustomLink'

export default function CTA({ header, headIcon, headline, caption, cta, ctaLink, ctaIcon }) {
  return (
    <div className="border-gray-900 dark:border-gray-100 border-2 md:border-2 w-full bg-gray-100 dark:bg-gray-900 flex flex-col justify-between">
      <div className="font-bold px-4 py-2 text-sm border-b-2 border-gray-900 dark:border-gray-100 flex justify-between">
        <div>{header}</div>
        <div>{headIcon}</div>
      </div>
      <div className="px-4 py-6 space-y-4 flex flex-col jusitfy-center">
        <h1 className="font-semibold leading-10 text-4xl tracking-tighter">{headline}</h1>
        <div className="text-md text-gray-700 dark:text-gray-300">{caption}</div>
      </div>
      <CustomLink href={ctaLink}>
        <div className="font-semibold flex justify-between content text-xl p-4 border-t-2 border-gray-900 hover:bg-gray-100 hover:text-gray-900 bg-teal-100 text-gray-900 dark:border-gray-100 hover:dark:bg-gray-900 hover:dark:text-gray-100 dark:bg-teal-900 dark:text-gray-100">
          <div className="">{cta}</div>
          <div>{ctaIcon}</div>
        </div>
      </CustomLink>
    </div>
  )
}
