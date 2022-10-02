import CustomLink from '@/components/CustomLink'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import CustomHeading from './CustomHeading'
import CustomButton from '@/components/CustomButton'
import { FaArrowRight } from 'react-icons/fa'
export default function PopularPost({ posts, title }) {
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-white dark:border-gray-100 border-2 dark:bg-gray-900 px-3 py-8">
      <CustomHeading heading="h3">Popular Post</CustomHeading>
      {posts.slice(0, 5).map((frontMatter, index) => {
        const { slug, date, title, coverImage } = frontMatter
        return (
          <div key={index}>
            <CustomLink href={`/blog/${slug}`}>
              <div className="hvr-grow grid gap-5 grid-cols-[130px,_1fr]">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={coverImage}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    alt={title}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="line-clamp-2 text-md font-semibold capitalize tracking-tight leading-1 text-gray-900 dark:text-white">
                    {title}
                  </h2>
                  <span className="text-sm sm:text-lg dark:text-gray-200 text-gray-800">
                    {formatDate(date)}
                  </span>
                </div>
              </div>
            </CustomLink>
          </div>
        )
      })}
    </div>
  )
}
