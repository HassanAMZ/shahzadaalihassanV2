import AllProjects from '@/components/AllProjects'
import Timeline from '@/components/Timeline'
import CustomHeading from '@/components/CustomHeading'
import { PageSEO } from '@/components/SEO'
import SocialProfile from '@/components/SocialProfile'
export default function AuthorLayout({ children, frontMatter }) {
  const { name } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="space-y-4">
        <CustomHeading heading="h2">A Quick Introduction</CustomHeading>
        <article id="author_content" className="text-justify py-4">
          {children}
        </article>
        <SocialProfile title="Get In Touch" />
        <Timeline />
      </div>

      {/* <AllProjects /> */}
    </>
  )
}
