import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import { BlogSEO } from '@/components/SEO'
import kebabCase from '@/lib/utils/kebabCase'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import GAPageView from '@/components/GAPageView'
import Comments from '@/components/comments'
import CustomButton from '@/components/CustomButton'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export function PaginationComponent({ pagination, pagination_button }) {
  return (
    <div className="flex gap-2 flex-col items-center md:flex-start py-2">
      <CustomLink customClasses="self-stretch flex-auto py-2" href={`/blog/${pagination.slug}`}>
        <CustomButton scheme="solid">{pagination_button} Post</CustomButton>
      </CustomLink>
      <CustomLink
        href={`/blog/${pagination.slug}`}
        customClasses="w-full block p-6 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 bg-white dark:border-gray-700 dark:hover:bg-gray-700 dark:bg-gray-900"
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

  const data = {
    header: 'Web Analytics, & development',
    headIcon: 'o o o',
    headline: 'Courses, Coaching, and Community for Developers',
    caption:
      'Our mission is to help 1000 freelancers make a living doing what they love, without a crippling debt or depression.',
    cta: 'Shop Courses',
    ctaLink: '/portfolio',
    ctaIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    ),
  }
  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />

      <div className="container mx-auto sm:p-4 max-w-screen-lg">
        <div className="border-gray-900 dark:border-gray-100 border-b-2 sm:border-2 w-full bg-gray-100 dark:bg-gray-900 flex flex-col justify-between">
          <div className="font-bold px-4 py-2 border-b-2 border-gray-900 dark:border-gray-100 flex justify-between">
            <div>
              <time className="text-center" dateTime={date}>
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
            </div>
            <div>{'o o o'}</div>
          </div>
          <div className="p-2 flex flex-col jusitfy-center">
            <h2 className="font-bold text-center tracking-tighter text-6xl leading-tight">
              {title}
            </h2>
          </div>

          <div className="font-semibold flex justify-around content border-t-2 border-gray-900 ">
            {tags && (
              <>
                {tags.slice(0, 3).map((tag, index) => (
                  <CustomLink
                    key={index}
                    href={`/tags/${kebabCase(tag)}`}
                    customClasses="text-sm line-clamp-1"
                  >
                    {tag}
                  </CustomLink>
                ))}
              </>
            )}
          </div>
          <div className="font-semibold flex justify-between content p-2 border-t-2 border-gray-900 hover:bg-gray-100 hover:text-gray-900 bg-teal-100 text-gray-900 dark:border-gray-100 hover:dark:bg-gray-900 hover:dark:text-gray-100 dark:bg-teal-900 dark:text-gray-100">
            <CustomLink href="/about-us" customClasses="text-center ">
              Author: {name}
            </CustomLink>
            <GAPageView slug={slug} />
          </div>
        </div>
      </div>

      <article className="container mx-auto pt-0 p-4 max-w-screen-lg" id="singlePost">
        <div className="flex flex-col">
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
    </>
  )
}
