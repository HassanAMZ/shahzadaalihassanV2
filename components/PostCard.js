import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
const PostCard = ({ post }) => {
  const { slug, date, title, summary, tags, coverImage } = post
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <CustomLink href={`/blog/${slug}`}>
        <div className="rounded-t-lg overflow-hidden">
          <Image src={coverImage} layout="responsive" width={1920} height={1080} alt={title} />
        </div>
      </CustomLink>
      <div className="sm:p-5 p-2">
        <CustomLink href={`/blog/${slug}`}>
          <h5 className="mb-2 sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 sm:line-clmap-3">
            {title}
          </h5>
        </CustomLink>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">
          {summary}
        </p>
        <CustomLink
          href={`/blog/${slug}`}
          className="inline-flex gap-2 items-center underline text-sm font-medium text-center text-teal-700 dark:text-teal-400 rounded-lg "
        >
          Read more
          <FaArrowRight />
        </CustomLink>
      </div>
    </div>
  )
}

export default PostCard
