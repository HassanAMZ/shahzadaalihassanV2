import CustomLink from '@/components/CustomLink'
import CustomButton from '@/components/CustomButton'
import { FaArrowRight } from 'react-icons/fa'
import CustomHeading from '@/components/CustomHeading'
export default function RecentPosts({ title, initialDisplayPosts = [] }) {
  return (
    <section className="rounded-lg bg-white dark:border-gray-100 border-2 dark:bg-gray-900 flex-col flex gap-2 py-8 px-3 items-stretch justify-between">
      <CustomHeading heading="h3">{title}</CustomHeading>
      <>
        {!initialDisplayPosts.length && 'No posts found.'}
        {initialDisplayPosts.map((frontMatter, index) => {
          const { slug, date, title, summary, tags } = frontMatter
          let schemeColor = 'solid'
          let serialNumber = index
          if (index == '0') {
            schemeColor = 'solid'
            serialNumber = 'new'
          } else {
            schemeColor = 'ghost'
            serialNumber = index
          }

          return (
            <CustomLink
              key={index}
              href={`/blog/${slug}`}
              customClasses="grid grid-cols-[40px_1fr] items-center justify-center gap-2 hvr-grow hover:text-teal-700 hover:font-semibold"
            >
              <CustomButton scheme={schemeColor}>{serialNumber}</CustomButton>
              <h2 className="line-clamp-1">{title}</h2>
            </CustomLink>
          )
        })}
      </>
      <CustomLink href="/blog" customClasses="w-full sm:w-fit self-end">
        <CustomButton scheme={'solid'}>
          <span className="pr-3">All Posts</span>
          <FaArrowRight />
        </CustomButton>
      </CustomLink>
    </section>
  )
}
