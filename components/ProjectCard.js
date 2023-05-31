import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import CustomButton from './CustomButton'
const ProjectCard = ({ project }) => {
  const { title, description, href, pid, featured_image_url } = project
  return (
    <div
      id={pid}
      className="bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <CustomLink href={href}>
        <div className="r/static/images/services/p_001_1ounded-t-lg overflow-hidden">
          <Image
            src={featured_image_url}
            layout="responsive"
            className="rounded-lg"
            width={1000}
            height={750}
            alt={title}
          />
        </div>
      </CustomLink>
      <div className="p-5">
        <CustomLink href={href}>
          <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 line-clamp-3">
            {title}
          </h5>
        </CustomLink>
        <p className="mb-3 sm:text-sm text-xs font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
        <CustomLink
          href={href}
          customClasses="inline-flex gap-2 items-center hover:underline text-sm w-full font-medium text-center text-teal-700 dark:text-teal-300 rounded-lg "
        >
          <CustomButton scheme={'solid-sm'} customClasses="space-x-2">
            <p> Learn More</p>
            <FaArrowRight />
          </CustomButton>
        </CustomLink>
      </div>
    </div>
  )
}

export default ProjectCard
