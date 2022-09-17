import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
const PostCard = ({ post }) => {
  const { slug, date, title, summary, tags, coverImage } = post
  return (
    <div className="dark:bg-white rounded-lg border dark:border-gray-200 shadow-md bg-gray-800 border-gray-700">
      <CustomLink href={`/blog/${slug}`} className="sm:block hidden">
        <div className="rounded-t-lg overflow-hidden">
          <Image src={coverImage} layout="responsive" width={1920} height={1080} alt={title} />
        </div>
      </CustomLink>
      <div className="p-5">
        <CustomLink href={`/blog/${slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-900 text-white">
            {title}
          </h5>
        </CustomLink>
        <p className="mb-3 font-normal dark:text-gray-700 text-gray-400 line-clamp-3">{summary}</p>
        <CustomLink
          href={`/blog/${slug}`}
          className="inline-flex gap-2 items-center underline text-sm font-medium text-center text-teal-700 rounded-lg "
        >
          Read more
          <FaArrowRight />
        </CustomLink>
      </div>
    </div>
  )
}

export default PostCard
