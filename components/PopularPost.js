import CustomLink from '@/components/CustomLink'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'

export default function PopularPost({ posts, title }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className=" mb-4 text-4xl pt-4 font-bold capitalize tracking-tight leading-none dark:text-gray-900 text-white">
        Popular Post
      </h2>
      {posts.slice(0, 5).map((frontMatter, index) => {
        const { slug, date, title, coverImage } = frontMatter
        return (
          <div key={index}>
            <CustomLink href={`/blog/${slug}`}>
              <div className="hvr-grow grid gap-5 grid-cols-[130px,_1fr]" gap="5">
                <div className="overflow-hidden rounded-[25px]">
                  <Image
                    src={coverImage}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    alt={title}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-md font-semibold capitalize tracking-tight leading-1 dark:text-gray-900 text-white">
                    {title}
                  </h2>
                  <span className="text-sm sm:text-lg text-gray-800">{formatDate(date)}</span>
                </div>
              </div>
            </CustomLink>
          </div>
        )
      })}
    </div>
  )
}
