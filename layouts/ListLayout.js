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
    <div className=" mx-auto my-3 px-3 rounded-sm">
      <div className="grid gap-5 gird-cols-1 md:grid-cols-[3fr_2fr] lg:grid-cols-[minmax(220px,_2fr)_1fr]">
        <AllBlogPosts
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title={pageTitle}
          randomGenerator={randomGenerator}
        />
        <div>
          <PopularPost posts={posts} title={pageTitle} initialDisplayPosts={'4'} tags={tags} />
          <AllTags tags={tags} />
          <SocialProfile title="Social Profiles" />
        </div>
      </div>
    </div>
  )
}
