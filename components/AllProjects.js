import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'
import CustomHeading from '@/components/CustomHeading'

const AllProjects = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projectsData.map((project, index) => (
          <div key={index} className="grid justify-items-center">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>{' '}
    </div>
  )
}
export default AllProjects
