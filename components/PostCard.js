import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
const PostCard = ({ post }) => {
  const { slug, date, title, summary, tags, coverImage } = post
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <CustomLink href={`/blog/${slug}`}>
        <div className="rounded-t-lg overflow-hidden">
          <Image src={coverImage} layout="responsive" width={1920} height={1080} alt={title} />
        </div>
      </CustomLink>
      <div className="p-2 md:p-3">
        <CustomLink href={`/blog/${slug}`}>
          <h5 className="mb-1 leading-tight sm:mb-2 sm:text-xl font-bold tracking-tighter text-gray-900 dark:text-gray-50 line-clamp-3">
            {title}
          </h5>
        </CustomLink>
        <p className="mb-2 sm:mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">
          {summary}
        </p>
        <CustomLink
          href={`/blog/${slug}`}
          customClasses="inline-flex gap-2 items-center underline text-sm font-medium text-center text-teal-700 dark:text-teal-400 rounded-lg "
        >
          Read more
          <FaArrowRight />
        </CustomLink>
      </div>
    </div>
  )
}

export default PostCard
