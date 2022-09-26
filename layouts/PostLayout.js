import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import GAPageView from '@/components/GAPageView'
import Comments from '@/components/comments'
import CustomButton from '@/components/CustomButton'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export function PaginationComponent({ pagination, pagination_button }) {
  return (
    <div className="flex gap-2 flex-col items-center md:flex-start py-2">
      <CustomLink className="self-stretch flex-auto py-2" href={`/blog/${pagination.slug}`}>
        <CustomButton scheme="solid">{pagination_button} Post</CustomButton>
      </CustomLink>
      <CustomLink
        href={`/blog/${pagination.slug}`}
        className="w-full block p-6 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 bg-white dark:border-gray-700 dark:hover:bg-gray-700 dark:bg-gray-900"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {pagination.title}
        </h5>
      </CustomLink>
    </div>
  )
}

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, date, title, tags, coverImage, blogID } = frontMatter
  const { name } = authorDetails[0]
  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />

      <div className="container text-black mx-auto px-3">
        <div className="flex items-center border-2 p-2 py-10 rounded-lg justify-center flex-col gap-2 capitalize ">
          <h2 className="text-center mb-4 text-5xl font-bold capitalize tracking-tight leading-none text-black sm:text-5xl lg:text-6xl dark:text-white">
            {title}
          </h2>
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}
          <div className="flex flex-col md:row gap-2 items-center dark:text-white text-gray-700 text-sm pt-2">
            <div className="flex items-center gap-2">
              <CustomLink href="/about" className="text-center ">
                {name}
              </CustomLink>
              <span>{` • `}</span>
              <time className="text-center" dateTime={date}>
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
            </div>
            <div className="flex gap-2 items-center jusitfy-center">
              <span id="time"></span>
              <p>min read</p>
              <span>{` • `}</span>
              <GAPageView slug={slug} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-3 px-3">
        <article className="py-2" id="singlePost">
          <div className="flex flex-col py-2">
            <article id="blog_post_content" className="text-justify">
              {children}
            </article>
            <Comments frontMatter={frontMatter} />

            {(next || prev) && (
              <div className="flex justify-between md:gap-2 flex-col md:flex-row py-2">
                {prev && <PaginationComponent pagination={prev} pagination_button="Previous" />}
                {next && <PaginationComponent pagination={next} pagination_button="Next" />}
              </div>
            )}

            <CustomLink href="/blog">
              <CustomButton scheme="solid">&larr; Back to the blogs</CustomButton>
            </CustomLink>
          </div>
        </article>
      </div>
    </>
  )
}
