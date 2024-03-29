import GAPageView from '@/components/GAPageView'
import CustomLink from '@/components/CustomLink'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import CustomButton from '@/components/CustomButton'
import { FaArrowRight } from 'react-icons/fa'
import CustomHeading from './CustomHeading'
const Courses = ({ posts }) => {
  let coursesIDs = ['00008']
  let blogIDs = []

  posts.map((frontMatter, index) => {
    const { slug, date, title, summary, tags, blogID, coverImage } = frontMatter

    coursesIDs.map((coursesID, indexA) => {
      if (blogID == coursesID) {
        blogIDs[indexA] = (
          <div key={indexA} className="flex flex-col flex-1 gap-4 justify-between sm:justify-end">
            <CustomLink href={`/blog/${slug}`}>
              <h2 className="text-2xl font-bold capitalize tracking-tight leading-none text-gray-900 sm:text-3xl lg:text-4xl dark:text-gray-50">
                {title}
              </h2>
            </CustomLink>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between text-sm">
                <span dateTime={date}>{formatDate(date)}</span>
                <GAPageView slug={slug} />
              </div>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <Tag key={index} text={tag} customClasses="text-gray-50" />
                ))}
              </div>
              <p className="line-clamp-3 sm:line-clamp-none">{summary}</p>
            </div>
            <CustomLink href={`/blog/${slug}`} customClasses="w-full sm:w-fit self-end">
              <CustomButton scheme={'solid'}>
                <span className="pr-3">Get the course</span>
                <FaArrowRight />
              </CustomButton>
            </CustomLink>
          </div>
        )
      }
    })
  })
  return (
    <section className="py-8 flex-col justify-between flex gap-2 rounded-lg bg-gray-50 dark:border-gray-100 border-2 dark:bg-gray-900">
      <CustomHeading heading="h3">Get the Course</CustomHeading>
      {blogIDs}
    </section>
  )
}

export default Courses
