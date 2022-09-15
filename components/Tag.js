import { Box, Button, Flex, Text } from '@chakra-ui/react'
import kebabCase from '@/lib/utils/kebabCase'
import CustomLink from '@/components/CustomLink'
import CustomButton from '@/components/CustomButton'

const Tag = ({ text, icon }) => {
  return (
    <CustomLink href={`/tags/${kebabCase(text)}`} className="hvr-grow">
      <CustomButton scheme="ghost-xs">
        {text.split(' ').join('-')} {icon}
      </CustomButton>
    </CustomLink>
  )
}

export default Tag
