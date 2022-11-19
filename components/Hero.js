import Link from 'next/link'
import CTA from './CTA'
import HeroImage from '../public/static/images/heroImage.svg'
import Image from 'next/image'
export default function Hero() {
  const data = {
    header: 'Web Analytics, & development',
    headIcon: 'o o o',
    headline: 'Courses, Coaching, and Community for Developers',
    caption:
      'Our mission is to help 1000 freelancers make a living doing what they love, without a crippling debt or depression.',
    cta: 'Shop Courses',
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
    <section className="">
      <CTA {...data} />
      {/* <div className="overflow-hidden rounded-lg w-32">
        <Image
          src={'/static/images/logo.png'}
          layout="responsive"
          width={1920}
          height={1080}
          alt={'logo'}
        />
      </div> */}
    </section>
  )
}
