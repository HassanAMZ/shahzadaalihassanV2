import GAPageView from '@/components/GAPageView'
import CustomLink from '@/components/CustomLink'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import CustomButton from '@/components/CustomButton'
import { FaArrowRight } from 'react-icons/fa'
import CustomHeading from './CustomHeading'
import timelineData from '@/data/timelineData'
const Timeline = () => {
  return (
    <div className="container mx-auto p-4 max-w-screen-xl border-2 rounded-lg dark:border-gray-100">
      <CustomHeading customClasses="px-3" heading="h2">
        Timeline
      </CustomHeading>
      <ol className="border-l-2 border-teal-600 dark:text-white pt-8 ">
        {timelineData.map(({ tid, title, date, image_source, description, href }, index) => (
          <li key={index}>
            <div className="flex flex-start items-center">
              <div className="bg-teal-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
              <h4 className="text-gray-800 font-semibold mt-2 dark:text-white">{title}</h4>
            </div>
            <div className="ml-6 mb-6 pb-6">
              <span className="text-teal-600 hover:text-teal-700 focus:text-teal-800 duration-300 transition ease-in-out text-sm">
                {date}
              </span>
              <p className="text-gray-700 dark:text-gray-100 mt-2 mb-4 line-clamp-3">
                {description}
              </p>
              <CustomLink
                href={href}
                className="inline-flex gap-2 items-center underline text-sm font-medium text-center text-teal-700 dark:text-teal-400 rounded-lg "
              >
                Read more
              </CustomLink>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Timeline
