import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'
import CustomHeading from '@/components/CustomHeading'
import AllProjects from '@/components/AllProjects'
import WebsiteLayout from '@/layouts/WebsiteLayout'
const Portfolio = () => {
  return (
    <WebsiteLayout>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <AllProjects />
    </WebsiteLayout>
  )
}
export default Portfolio
