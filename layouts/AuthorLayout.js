import AllProjects from '@/components/AllProjects'
import Timeline from '@/components/Timeline'
import CustomHeading from '@/components/CustomHeading'
import { PageSEO } from '@/components/SEO'
export default function AuthorLayout({ children, frontMatter }) {
  const { name } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="py-4 px-3">
        <CustomHeading heading="h2">A Quick Introduction</CustomHeading>
        <article id="author_content" className="text-justify py-8">
          {children}
        </article>
      </div>
      <Timeline />
      {/* <AllProjects /> */}
    </>
  )
}
