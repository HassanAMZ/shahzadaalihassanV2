import { Box, Link as ChakraLink, Heading, Flex, Grid } from '@chakra-ui/react'
import Tag from '@/components/Tag'
import { SearchIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const CategoryList = ({ posts }) => {
  return (
    <>
      <Heading as="h2" py={[5, 6]} fontSize={['xl']}>
        Category List
      </Heading>
      {posts.slice(1, 2).map((frontMatter, index) => {
        const { slug, date, title, coverImage, tags } = frontMatter
        return (
          <Flex key={index} flexWrap={'wrap'}>
            {tags.map((tag) => (
              <Tag key={tag} text={tag} icon={<ExternalLinkIcon />} />
            ))}
          </Flex>
        )
      })}
    </>
  )
}

export default CategoryList
