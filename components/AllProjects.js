import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'
import CustomHeading from '@/components/CustomHeading'

const AllProjects = () => {
  return (
    <div className="container mx-auto px-3">
      <CustomHeading heading="h2"> All Projects</CustomHeading>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
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
