import AllBlogPosts from '@/components/AllBlogPosts'
import PopularPost from '@/components/PopularPost'
import AllTags from '@/components/AllTags'
import SocialProfile from '@/components/SocialProfile'

export default function ListLayout({ posts, title, tags, initialDisplayPosts = [], pagination }) {
  const randomGenerator = () => {
    return Math.floor(Math.random() * (2 - 0 + 1)) + 0
  }
  // Capitalize first letter and convert space to dash
  const pageTitle = title.toUpperCase().split('-').join(' ')
  return (
    <div className="rounded-lg grid gap-5 gird-cols-1 lg:grid-cols-[minmax(220px,_2fr)_1fr]">
      <AllBlogPosts
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={pageTitle}
        randomGenerator={randomGenerator}
      />
      <div className="flex flex-col gap-5">
        <PopularPost posts={posts} title={pageTitle} initialDisplayPosts={'4'} tags={tags} />
        <div className="rounded-lg bg-gray-50 dark:border-gray-100 border-2 dark:bg-gray-900 px-3 py-8">
          <AllTags tags={tags} />
        </div>
        <SocialProfile title="Social Profiles" />
      </div>
    </div>
  )
}
