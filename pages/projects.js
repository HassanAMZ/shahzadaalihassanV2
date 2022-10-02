import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'
import CustomHeading from '@/components/CustomHeading'
import AllProjects from '@/components/AllProjects'

const Projects = () => {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <AllProjects />
    </>
  )
}
export default Projects
