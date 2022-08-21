import { Box, Heading, Flex } from '@chakra-ui/react'
import Tag from '@/components/Tag'

const CategoryList = ({ tags }) => {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <Flex direction={'column'} justifyContent={'left'} my={4}>
        <Heading as="h2" py="3" fontSize={['xl']}>
          Top Tags
        </Heading>
        <Flex flexWrap={'wrap'}>
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((tag, index) => {
            if (tags[tag] > 2) {
              return (
                <Box key={tag}>
                  <Flex justifyContent={'center'} alignItems={'center'}>
                    <Tag text={tag} key={index} icon={` (${tags[tag]})`} />
                  </Flex>
                </Box>
              )
            }
          })}
        </Flex>
      </Flex>
    </>
  )
}

export default CategoryList
