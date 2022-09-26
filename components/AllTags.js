import Tag from '@/components/Tag'
import CustomHeading from './CustomHeading'

export default function AllTags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <section className="flex-col flex gap-2">
      <CustomHeading heading="h3">Top Categories</CustomHeading>
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
