import CustomLink from '@/components/CustomLink'
import { Box, Heading, Divider, Flex, UnorderedList, ListItem, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useState } from 'react'
export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <Box py={['5', '6']}>
        <Heading as="h2" py="3" fontSize={['xl']}>
          {title}
        </Heading>
      </Box>
      <UnorderedList listStyleType="none" ml="0">
        {!filteredBlogPosts.length && 'No posts found.'}
        {displayPosts.map((frontMatter, index) => {
          const { slug, date, title, summary, tags } = frontMatter

          let orderNumber = 0
          if (index === 0) {
            orderNumber = (
              <Button
                size={['x-small', 'sm']}
                colorScheme="teal"
                textTransform={'uppercase'}
                variant="solid"
                px="2"
                py="1"
                key={index}
                fontWeight={'normal'}
                bg={'teal.400'}
                _hover={{ bg: 'teal.500' }}
                border="1px"
                borderColor={'gray.500'}
              >
                New
              </Button>
            )
          } else {
            orderNumber = (
              <Button
                size={['x-small', 'sm']}
                textTransform={'uppercase'}
                variant="solid"
                px="2"
                py="1"
                key={index}
                fontWeight={'normal'}
                _hover={{ bg: 'teal.500', color: 'white' }}
                border="1px"
                borderColor={'gray.500'}
              >
                &nbsp; 0{index} &nbsp;
              </Button>
            )
          }

          return (
            <Box key={index}>
              <ListItem
                key={index}
                py="2"
                _hover={{
                  color: 'teal.500',
                  transform: 'scale(1.01)',
                }}
              >
                <CustomLink href={`/blog/${slug}`}>
                  <Flex direction="row" alignItems="center" justifyContent="space-between" gap="2">
                    <Flex
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      gap="3"
                    >
                      <Box> {orderNumber}</Box>
                      <Heading
                        as="h2"
                        fontWeight={'medium'}
                        fontSize={['md', 'lg']}
                        textTransform="capitalize"
                        noOfLines={'1'}
                      >
                        {title}
                      </Heading>
                    </Flex>
                    <ExternalLinkIcon />
                  </Flex>
                </CustomLink>
              </ListItem>
              <Divider />
            </Box>
          )
        })}
      </UnorderedList>
    </>
  )
}
