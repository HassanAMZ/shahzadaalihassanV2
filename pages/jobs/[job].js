import { useRouter } from 'next/router'
import CustomButton from '@/components/CustomButton'
import CustomLink from '@/components/CustomLink'
import { PageSEO } from '@/components/SEO'
import CustomHeading from '@/components/CustomHeading'
import jobsData from '@/data/jobsData'

const Job = () => {
  const router = useRouter()
  const { job } = router.query

  return (
    <>
      <PageSEO title={`Jobs - ${job}`} description={`Jobs - ${job}`} />
      {/* {console.log(job in jobsData)} */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg h-[100vh] border-teal-700 flex flex-col items-center justify-center">
        {job in jobsData ? (
          <section className=" ">
            <h1 className="bg-gradient-to-r from-green-300 via-teal-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              {jobsData[job].title}
            </h1>

            <CustomHeading heading="h2">Job brief </CustomHeading>
            <div>{jobsData[job].brief}</div>
            <CustomHeading heading="h2">Resposibilities </CustomHeading>
            <ol>
              {jobsData[job].resposibilities.map((resposibility, index) => {
                return (
                  <li key={index}>
                    {index + 1}) {resposibility}
                  </li>
                )
              })}
            </ol>
            <CustomHeading heading="h2">Requirements and skills </CustomHeading>
            <ol>
              {jobsData[job].requirements_and_skills.map((requirement_and_skill, index) => {
                return (
                  <li key={index}>
                    {index + 1}) {requirement_and_skill}
                  </li>
                )
              })}
            </ol>
            <CustomHeading heading="h2">Salary & Deadline</CustomHeading>
            <div>{jobsData[job].salary_and_deadline}</div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {}
              <CustomLink customClasses="w-full" href={jobsData[job].form_link}>
                <CustomButton scheme={'solid'}>Apply for Job</CustomButton>
              </CustomLink>
              <CustomLink customClasses="w-full" href="/jobs">
                <CustomButton scheme={'ghost'}>Go Back To Jobs Page</CustomButton>
              </CustomLink>
            </div>
          </section>
        ) : (
          <section className=" ">
            <h1 className="bg-gradient-to-r from-green-300 via-teal-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Good doesn't exists
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CustomLink customClasses="w-full" href="/jobs">
                <CustomButton scheme={'solid'}>Go Back To Jobs Page</CustomButton>
              </CustomLink>
            </div>
          </section>
        )}
      </div>
    </>
  )
}

export default Job
