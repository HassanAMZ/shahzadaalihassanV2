import CustomButton from '@/components/CustomButton'
import CustomHeading from '@/components/CustomHeading'
import CustomLink from '@/components/CustomLink'
import { PageSEO } from '@/components/SEO'
import Hero from '@/components/Hero'
export default function TeamsFeedback() {
  return (
    <>
      <PageSEO title="Weekly Feedback for Teams" description="Weekly Feedback for Teams" />
      <div className="container mx-auto p-4 max-w-screen-xl bg-white dark:bg-gray-900 rounded-lg h-[100vh] border-teal-700 flex flex-col items-center justify-center">
        <div className="mx-auto max-w-3xl text-left">
          <h1 className="bg-gradient-to-r from-green-300 via-teal-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
            Weekly Feedback Form - Shahzadaalihassan teams
          </h1>

          <CustomHeading heading="h2">Deadline</CustomHeading>
          <div>Every Friday of the week</div>

          <CustomHeading heading="h2">For Team Members </CustomHeading>
          <ol>
            <li>Rabia Noreen</li>
            <li>Bushra Akram</li>
            <li>Zain Ahmed</li>
          </ol>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CustomLink customClasses="w-full" href="https://forms.gle/1aesB1v8xrnuMoQA6">
              <CustomButton scheme={'solid'}>Fill Out the Weekly Feedback Form</CustomButton>
            </CustomLink>
          </div>
        </div>
      </div>
    </>
  )
}
