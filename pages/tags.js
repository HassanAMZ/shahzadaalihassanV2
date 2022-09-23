import CustomHeading from '@/components/CustomHeading'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="  mx-auto px-3 py-10">
        <div className="flex flex-col ">
          <CustomHeading heading="h3">Top Tags</CustomHeading>

          <div className="flex flex-wrap gap-2">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((tag, index) => {
              return <Tag text={tag} key={index} icon={` (${tags[tag]})`} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
