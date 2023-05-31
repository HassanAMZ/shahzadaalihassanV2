import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'
import WebsiteLayout from '@/layouts/WebsiteLayout'
const Portfolio = () => {
  return (
    <WebsiteLayout>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-2 justify-items-center">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </WebsiteLayout>
  )
}
export default Portfolio
