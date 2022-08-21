import NextLink from 'next/link'
import Tag from '@/components/Tag'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { useState } from 'react'
import {
  Box,
  Link as ChakraLink,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Container,
  Text,
} from '@chakra-ui/react'
import { image as AuthorImage, author } from '@/data/siteMetadata'
import { SearchIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Image from 'next/image'

export default function ListLayout({
  posts,
  initialDisplayPosts = [],
  pagination,
  randomGenerator,
  title,
}) {
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
      <Container maxW="container.xl" m="0" p="0">
        <Heading as="h2" py="3" fontSize={['xl']}>
          {title}
        </Heading>
        <Box py={['5', '6']}>
          <InputGroup size="md">
            <Input
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Search Blog Post"
              placeholder="Search Blog Post"
              borderColor={'teal'}
              bgColor="white"
              color="teal"
              fontWeight={'bold'}
            />
            <InputRightElement width="2rem">
              <SearchIcon color="teal" />
            </InputRightElement>
          </InputGroup>
        </Box>

        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} m="0">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter, index) => {
            const { slug, date, title, summary, tags, coverImage } = frontMatter
            return (
              <Grid gap="5" className="hvr-float" key={index} justify={'space-between'}>
                <NextLink passHref href={`/blog/${slug}`}>
                  <ChakraLink
                    _hover={{
                      textDecoration: 'none',
                    }}
                  >
                    <Box borderRadius={'25px'} overflow="hidden">
                      <Image
                        src={coverImage}
                        layout="responsive"
                        width={1920}
                        height={1080}
                        alt={title}
                      />
                    </Box>
                  </ChakraLink>
                </NextLink>
                <Flex direction={'row'} flexWrap="wrap">
                  {tags.slice(0, 3).map((tag) => (
                    <Tag key={tag} text={tag} icon={<ExternalLinkIcon />} />
                  ))}
                </Flex>
                <NextLink passHref href={`/blog/${slug}`} key={index}>
                  <ChakraLink
                    _hover={{
                      textDecoration: 'none',
                    }}
                  >
                    <Heading as="h1" textTransform="capitalize" fontSize={['xl']}>
                      {title}
                    </Heading>
                    <Text color={'gray.500'} fontSize={'sm'} fontWeight="light" noOfLines={[2]}>
                      {summary}
                    </Text>
                    <Flex gap="2" py="3" align={'center'}>
                      <Box
                        w="40px"
                        h="40px"
                        borderRadius={'10px'}
                        overflow="hidden"
                        borderWidth={'2px'}
                      >
                        <Image
                          src={AuthorImage}
                          layout="responsive"
                          width={1080}
                          height={1080}
                          alt={title}
                        />
                      </Box>

                      <Flex direction={['column']} fontSize={['xs', 'sm']} gap="0">
                        <Text fontWeight={'bold'}>{author}</Text>
                        <Box color={'gray.500'} as="time" dateTime={date}>
                          {formatDate(date)}
                        </Box>
                      </Flex>
                    </Flex>
                  </ChakraLink>
                </NextLink>
              </Grid>
            )
          })}
        </Grid>
        {pagination && pagination.totalPages > 1 && !searchValue && (
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        )}
      </Container>
    </>
  )
}
