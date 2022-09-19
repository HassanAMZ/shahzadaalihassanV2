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
          <article key={indexA} className="flex gap-5 flex-col">
            <div className="flex justify-between text-sm">
              <span dateTime={date}>{formatDate(date)}</span>
              <GAPageView slug={slug} />
            </div>

            <CustomLink href={`/blog/${slug}`}>
              <h2 className="text-2xl font-bold capitalize tracking-tight leading-none text-gray-900 sm:text-3xl lg:text-4xl dark:text-white">
                {title}
              </h2>
            </CustomLink>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <Tag key={index} text={tag} customClasses="text-white" />
              ))}
            </div>

            <p className="line-clamp-3">{summary}</p>

            <CustomLink href={`/blog/${slug}`} className="w-full sm:w-fit self-end">
              <CustomButton scheme={'solid'}>
                <span className="pr-3">Get the course</span>
                <FaArrowRight />
              </CustomButton>
            </CustomLink>
          </article>
        )
      }
    })
  })
  return (
    <section className="py-8 flex-col flex gap-2 container mx-auto rounded-[25px] bg-white dark:border-gray-100 border-2 dark:bg-gray-900 py-8 px-3">
      <CustomHeading heading="h3">Get the Courses</CustomHeading>
      <div className="grid grid-cols-1 gap-1">{blogIDs}</div>
    </section>
  )
}

export default Courses
