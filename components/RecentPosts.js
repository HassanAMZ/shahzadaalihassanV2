import CustomLink from '@/components/CustomLink'
import CustomButton from '@/components/CustomButton'
import { FaArrowRight } from 'react-icons/fa'
export default function RecentPosts({ title, initialDisplayPosts = [] }) {
  return (
    <section className="py-8 flex-col flex gap-2">
      <h3 className="mb-4 text-3xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-4xl lg:text-5xl text-white">
        {title}
      </h3>
      {!initialDisplayPosts.length && 'No posts found.'}
      {initialDisplayPosts.map((frontMatter, index) => {
        const { slug, date, title, summary, tags } = frontMatter
        return (
          <CustomLink
            key={index}
            href={`/blog/${slug}`}
            className="grid grid-cols-[40px_1fr] items-center justify-center gap-2 hvr-grow hover:text-teal-700 hover:font-semibold"
          >
            <CustomButton scheme={'solid'}>{index + 1}</CustomButton>
            <h2 className="line-clamp-1">{title}</h2>
          </CustomLink>
        )
      })}
      <CustomLink href="/blog" className="w-full sm:w-fit self-end">
        <CustomButton scheme={'solid'}>
          <span className="pr-3">All Posts</span>
          <FaArrowRight />
        </CustomButton>
      </CustomLink>
    </section>
  )
}
