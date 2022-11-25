import CustomButton from '@/components/CustomButton'
import CustomHeading from '@/components/CustomHeading'
import CustomLink from '@/components/CustomLink'
import { PageSEO } from '@/components/SEO'
import React from 'react'

export default function Modal() {
  const [showModal_1, setShowModal_1] = React.useState(false)
  const [showModal_2, setShowModal_2] = React.useState(false)
  let toggleClick_1 = () => {
    setShowModal_1(true)
    setShowModal_2(false)
  }
  let toggleClick_2 = () => {
    setShowModal_2(true)
    setShowModal_1(false)
  }
  return (
    <>
      <PageSEO title="Jobs" description="Jobs" />
      <div className="container mx-auto p-4 space-y-4 max-w-screen-xl bg-white dark:bg-gray-900 rounded-lg h-[100vh] border-teal-700 flex flex-col items-center justify-center">
        <CustomButton type="button" onClick={() => toggleClick_1()}>
          Virtual Assistant Job Internship
        </CustomButton>
        <CustomButton type="button" onClick={() => toggleClick_2()}>
          Google Tag Manager Internship
        </CustomButton>
        {showModal_1 ? (
          <section className="container mx-auto p-4  max-w-screen-xl ">
            <h1 className="bg-gradient-to-r from-green-300 via-teal-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Apply for Entry Level Virtual Assistant Intern.
            </h1>

            <CustomHeading heading="h2">Job brief </CustomHeading>
            <div>
              We are looking for a Virtual Assistant to provide administrative support to our team
              while working remotely.
            </div>

            <CustomHeading heading="h2">Resposibilities </CustomHeading>
            <ol>
              <li>Transcribing Emails, Meetings, Videos &Jobs</li>
              <li>Creating & Managing Social Media</li>
              <li>Writing Content for Blogs & Website</li>
              <li>Research & Prospecting</li>
              <li>Prepare customer spreadsheets & keep online records</li>
              <li>Provide customer service as first point of contact</li>
            </ol>
            <CustomHeading heading="h2">Requirements and skills </CustomHeading>
            <ol>
              <li>English Language, phone, email and instant messaging communication skills</li>
              <li>Experience with word-processing software and spreadsheets (e.g. MS Office)</li>
              <li>Internet, Smart phone and Laptop/Computer</li>
            </ol>
            <CustomHeading heading="h2">Salary & Deadline</CustomHeading>
            <div>0PKR & hiring by 1st November 2022</div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CustomLink customClasses="w-full" href="https://forms.gle/BMThGz2d3WoyibzU7">
                <CustomButton scheme={'solid'}>Apply for Job</CustomButton>
              </CustomLink>
            </div>
          </section>
        ) : null}
        {showModal_2 ? (
          <section className="container mx-auto p-4  max-w-screen-xl ">
            <h1 className="bg-gradient-to-r from-green-300 via-teal-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Apply for Google Tag Manager Interen.
            </h1>

            <CustomHeading heading="h2">Job brief </CustomHeading>
            <div>
              We are looking for a Google Tag Manager Interen to provide support to our team while
              working remotely.
            </div>

            <CustomHeading heading="h2">Resposibilities </CustomHeading>
            <ol>
              <li>Managing Client Techincal Lead and Ecommerce Projects</li>
              <li>Implementing dataLayer and Ecommerce tracking.</li>
              <li>
                Implementing web tracking for Facebook pixel, universal analytics, google analytics
                4.
              </li>
              <li>Implementing Server side events using conversion API</li>
            </ol>
            <CustomHeading heading="h2">Requirements and skills </CustomHeading>
            <ol>
              <li>Universal Analytics & Google Analytics 4 Ecommerce & Lead Generation Tracking</li>
              <li>Google Tag Manager tracking</li>
              <li>Shopify, WordPress and custom dataLayer understanding</li>
            </ol>
            <CustomHeading heading="h2">Salary & Deadline</CustomHeading>
            <div>0 PKR & hiring by 1st Decemeber 2022</div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CustomLink customClasses="w-full" href="https://forms.gle/tHcU7oQVD4pGUvyH9">
                <CustomButton scheme={'solid'}>Apply for Job</CustomButton>
              </CustomLink>
            </div>
          </section>
        ) : null}
      </div>
    </>
  )
}
