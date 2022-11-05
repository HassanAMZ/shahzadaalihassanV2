import Link from 'next/link'
import CTA from './CTA'
import HeroImage from '../public/static/images/heroImage.svg'
export default function Hero() {
  const data = {
    header: 'Web Analytics',
    headIcon: 'o o o',
    headline: "Award-winning Lahore's web analytics & measurement agency",
    caption:
      'Get the data that is easy to understand, accurate, drives conversions, and boosts your ads algorithems.',
    cta: 'Show me the Portfolio',
    ctaLink: '/portfolio',
    ctaIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    ),
  }

  return (
    <>
      <section className="flex md:min-h-[50vh] h-full justify-center flex-col bg-no-repeat bg-cover bg-blue-200">
        <div className="container mx-auto p-4 items-stretch xl:items-center  grid grid-cols-1 sm:grid-cols-2 ">
          <CTA {...data} />
          <div className="sm:block hidden">
            <HeroImage />
          </div>
        </div>
      </section>
    </>
  )
}
