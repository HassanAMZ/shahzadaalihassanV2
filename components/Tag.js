import kebabCase from '@/lib/utils/kebabCase'
import CustomLink from '@/components/CustomLink'
import CustomButton from '@/components/CustomButton'

const Tag = ({ text, icon, customClasses }) => {
  return (
    <CustomLink href={`/tags/${kebabCase(text)}`} customClasses="hvr-grow">
      <CustomButton scheme="ghost-xs" customClasses={customClasses}>
        {text.split(' ').join('-')} {icon}
      </CustomButton>
    </CustomLink>
  )
}

export default Tag
