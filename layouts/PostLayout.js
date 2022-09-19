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

      <div className="container text-black mx-auto px-3 rounded-[25px]">
        <div className="flex items-center border-2 py-10 bg-gray-50 rounded-[25px] justify-center flex-col gap-2 capitalize ">
          <h2 className="text-center mb-4 text-5xl font-bold capitalize tracking-tight leading-none dark:text-black sm:text-5xl lg:text-6xl text-white">
            {title}
          </h2>
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}
          <div className="flex flex-col md:row gap-2 items-center">
            <div className="flex items-center gap-2">
              <CustomLink href="/about" className="text-center">
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
        <article classNamepy-2 id="singlePost">
          <div className="flex flex-col py-2">
            <article>{children}</article>
            <Comments frontMatter={frontMatter} />

            <div className="py-2">
              {(next || prev) && (
                <div className="flex justify-between flex-col md:flex-row">
                  {prev && (
                    <div className="flex flex-col items-center md:flex-start py-2">
                      <CustomLink
                        className="self-stretch flex-auto py-2"
                        href={`/blog/${prev.slug}`}
                        aria-label="Previous Post"
                      >
                        <CustomButton scheme="solid">Previous Post</CustomButton>
                      </CustomLink>
                      <CustomLink
                        href={`/blog/${prev.slug}`}
                        className="block p-6 dark:bg-white rounded-lg border dark:border-gray-200 shadow-md dark:hover:bg-gray-100 bg-gray-800 border-gray-700 hover:bg-gray-700"
                      >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-900 text-white">
                          {prev.title}
                        </h5>
                      </CustomLink>
                    </div>
                  )}
                  {next && (
                    <div className="flex flex-col items-center md:flex-start py-2">
                      <CustomLink
                        className="self-stretch flex-auto py-2"
                        href={`/blog/${next.slug}`}
                        aria-label="Previous Post"
                      >
                        <CustomButton scheme="solid">Next Post</CustomButton>
                      </CustomLink>
                      <CustomLink
                        href={`/blog/${next.slug}`}
                        className="block p-6 dark:bg-white rounded-lg border dark:border-gray-200 shadow-md dark:hover:bg-gray-100 bg-gray-800 border-gray-700 hover:bg-gray-700"
                      >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-900 text-white">
                          {next.title}
                        </h5>
                      </CustomLink>
                    </div>
                  )}
                </div>
              )}
            </div>

            <CustomLink href="/blog">
              <CustomButton scheme="solid">&larr; Back to the blogs</CustomButton>
            </CustomLink>
          </div>
        </article>
      </div>
    </>
  )
}
