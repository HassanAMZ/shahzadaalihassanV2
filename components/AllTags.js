import CustomLink from '@/components/CustomLink'
import CustomButton from '@/components/CustomButton'
import Tag from '@/components/Tag'
import { FaArrowRight } from 'react-icons/fa'

export default function AllTags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <section className="py-8 flex-col flex gap-2">
      <h3 className="mb-4 text-3xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-4xl lg:text-5xl text-white">
        Top Categories
      </h3>
      <div className="flex flex-wrap gap-2">
        {Object.keys(tags).length === 0 && 'No tags found.'}
        {sortedTags.map((tag, index) => {
          if (tags[tag] > 2) {
            return <Tag text={tag} key={index} icon={` (${tags[tag]})`} />
          }
        })}
      </div>
    </section>
  )
}
