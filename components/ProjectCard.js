import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
const ProjectCard = ({ project }) => {
  const { title, description, imgSrc, href, pid, price } = project
  return (
    <div
      id={pid}
      className="max-w-sm dark:bg-white rounded-lg border dark:border-gray-200 shadow-md bg-gray-800 border-gray-700"
    >
      <CustomLink href={href}>
        <div className="rounded-t-lg overflow-hidden">
          <Image src={imgSrc} layout="responsive" width={2750} height={1850} alt={title} />
        </div>
      </CustomLink>
      <div className="p-5">
        <CustomLink href={href}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-900 text-white">
            {title}
          </h5>
        </CustomLink>
        <p className="mb-3 line-clamp-3 font-normal dark:text-gray-700 text-gray-400 line-clamp-3">
          {description}
        </p>
        <CustomLink
          href={href}
          className="inline-flex gap-2 items-center underline text-sm font-medium text-center text-teal-700 rounded-lg "
        >
          Read more
          <FaArrowRight />
        </CustomLink>
      </div>
    </div>
  )
}

export default ProjectCard
