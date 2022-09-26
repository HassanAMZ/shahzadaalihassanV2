import { PageSEO } from '@/components/SEO'
import AllTags from '@/components/AllTags'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import RecentPosts from '@/components/RecentPosts'
import { getAllTags } from '@/lib/tags'
import Courses from '@/components/Courses'
import Hero from '@/components/Hero'
import SocialProfile from '@/components/SocialProfile'
import PopularPost from '@/components/PopularPost'
import CustomLink from '@/components/CustomLink'
import CustomButton from '@/components/CustomButton'
import { FaArrowRight } from 'react-icons/fa'

export const POSTS_PER_PAGE = 5
export async function getStaticProps() {
  const tags = await getAllTags('blog')
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination, tags } }
}

export default function Home({ posts, initialDisplayPosts, pagination, tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <div className="p-3">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 container mx-auto ">
          <PopularPost posts={posts} title="Popular Posts" />
          <Courses posts={posts} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-5  py-3 container mx-auto ">
        <RecentPosts posts={posts} initialDisplayPosts={initialDisplayPosts} title="Recent Posts" />
        <div className="flex flex-col gap-5 justify-between items-stretch">
          <SocialProfile title="Social Profiles" />
          <div className="rounded-lg flex-1 bg-white dark:border-gray-100 border-2 dark:bg-gray-900 py-8 px-3 flex flex-col items-center justify-between gap-2">
            <AllTags tags={tags} />
            <CustomLink href="/tags" className="w-full sm:w-fit self-end">
              <CustomButton scheme={'solid'}>
                <span className="pr-3">All Categories</span>
                <FaArrowRight />
              </CustomButton>
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  )
}
