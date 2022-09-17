import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'

const Projects = () => {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className=" container mx-auto px-3">
        <h2 className=" mb-4 text-5xl pt-4 font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-6xl  text-white">
          All Projects
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
          {projectsData.map((project, index) => (
            <div key={index} className="grid justify-items-center">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Projects
