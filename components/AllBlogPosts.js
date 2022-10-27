import Pagination from '@/components/Pagination'
import CustomHeading from '@/components/CustomHeading'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import PostCard from '@/components/PostCard'

export default function ListLayout({ posts, initialDisplayPosts = [], pagination, title }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <div>
      <CustomHeading heading="h3" customClasses={'pt-4'}>
        {title}
      </CustomHeading>
      <div className="pb-4">
        <div className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
          Search
        </div>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <FaSearch />
          </div>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            id="default-search"
            className="block pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border-2 border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            placeholder="Search Graphic design, Web Analytics..."
            required
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-2 sm:gap-6 justify-items-center">
        {!filteredBlogPosts.length && 'No posts found.'}
        {displayPosts.map((frontMatter, index) => {
          return <PostCard post={frontMatter} key={index} />
        })}
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
