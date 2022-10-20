import CustomButton from '@/components/CustomButton'
import CustomHeading from '@/components/CustomHeading'
import CustomLink from '@/components/CustomLink'
import { PageSEO } from '@/components/SEO'
import Hero from '@/components/Hero'
export default function Jobs() {
  return (
    <>
      <PageSEO title="Jobs" description="Jobs" />
      <div className="container mx-auto bg-white dark:bg-gray-900 rounded-lg h-[100vh] border-teal-700 p-3 flex flex-col items-center justify-center">
        <div className="mx-auto max-w-3xl text-left">
          <h1 className="bg-gradient-to-r from-green-300 via-teal-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Apply for Entry Level Virtual Assistan Job.
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
          <CustomHeading heading="h2">Salary</CustomHeading>
          <div>10,000 PKR </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CustomLink
              className="w-full"
              href="https://docs.google.com/forms/d/1zh45u1fpN1sGncXzJX4NTKo8rYfgG2Pd1ds9ds3CuZs/edit"
            >
              <CustomButton scheme={'solid'}>Apply for Job</CustomButton>
            </CustomLink>
          </div>
        </div>
      </div>
    </>
  )
}
