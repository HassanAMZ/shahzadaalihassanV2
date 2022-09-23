import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
const ProjectCard = ({ project }) => {
  const { title, description, imgSrc, href, pid, price } = project
  return (
    <div
      id={pid}
      className="bg-white rounded-sm border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <CustomLink href={href}>
        <div className="rounded-t-lg overflow-hidden">
          <Image src={imgSrc} layout="responsive" width={2750} height={1850} alt={title} />
        </div>
      </CustomLink>
      <div className="p-5">
        <CustomLink href={href}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </CustomLink>
        <p className="mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
        <CustomLink
          href={href}
          className="inline-flex gap-2 items-center underline text-sm font-medium text-center text-teal-700 dark:text-teal-300 rounded-sm "
        >
          Read more
          <FaArrowRight />
        </CustomLink>
      </div>
    </div>
  )
}

export default ProjectCard
