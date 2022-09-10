import NextLink from 'next/link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import RecentPosts from '@/components/RecentPosts'
import { getAllTags } from '@/lib/tags'
import PreviousClient from '@/components/PreviousClient'
import Courses from '@/components/Courses'
import { Flex, Box, Heading, Button, Container, Grid, Link as ChakraLink } from '@chakra-ui/react'
import Hero from '@/components/Hero'
import SocialProfile from '@/components/SocialProfile'
import PopularPost from '@/components/PopularPost'
export const POSTS_PER_PAGE = 5
const MAX_DISPLAY = 5

export async function getStaticProps() {
  const tags = await getAllTags('blog')
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination, tags } }
}

export default function Home({ posts, initialDisplayPosts, pagination, tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <Box>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <Container maxW="container.xl">
        <Hero />
      </Container>
      <Box m={2}>
        <Container bgColor={'gray.100'} borderRadius="25px" maxW="container.xl">
          <RecentPosts
            posts={posts}
            initialDisplayPosts={initialDisplayPosts}
            pagination={pagination}
            title="Recent Posts"
          />
          {posts.length > MAX_DISPLAY && (
            <Flex justifyContent={'flex-end'} py={[2, 3]} display={{ base: 'block', sm: 'flex' }}>
              <NextLink
                passHref
                href="/blog"
                aria-label="all posts"
                width={{ base: '100%', sm: 'fit-content' }}
              >
                <ChakraLink>
                  <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'teal'}
                    bg={'teal.400'}
                    _hover={{ bg: 'teal.500', textDecoration: 'none' }}
                    width="100%"
                    my="4"
                  >
                    All Posts &rarr;
                  </Button>
                </ChakraLink>
              </NextLink>
            </Flex>
          )}
        </Container>
      </Box>
      {/* <Box m={2}>
        <Container py={5} bgColor={'gray.100'} borderRadius="25px" maxW="container.xl">
          <Heading as="h2" py="3" fontSize={['xl']}>
            Recent Web Analytics Projects
          </Heading>
          <PreviousClient />
        </Container>
      </Box> */}

      <Container maxW="container.xl">
        <>
          <Flex direction={'column'} justifyContent={'left'} my={4}>
            <Heading as="h2" py="3" fontSize={['xl']}>
              Top Tags
            </Heading>

            <Flex flexWrap={'wrap'}>
              {Object.keys(tags).length === 0 && 'No tags found.'}
              {sortedTags.map((tag, index) => {
                if (tags[tag] > 1) {
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
          {
            <Flex justifyContent={'flex-end'} py={[2, 3]} display={{ base: 'block', sm: 'flex' }}>
              <NextLink
                passHref
                href="/tags"
                aria-label="all posts"
                width={{ base: '100%', sm: 'fit-content' }}
              >
                <ChakraLink>
                  <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'teal'}
                    bg={'teal.400'}
                    _hover={{ bg: 'teal.500', textDecoration: 'none' }}
                    width="100%"
                    my="2"
                  >
                    All Tags &rarr;
                  </Button>
                </ChakraLink>
              </NextLink>
            </Flex>
          }
        </>{' '}
        <Container maxW="container.xl" py="5">
          <Grid templateColumns={{ base: '1fr', md: '3fr 2fr' }} gap={5}>
            <PopularPost posts={posts} title="Popular Posts" />
            <SocialProfile title="Social Profiles" />
          </Grid>
        </Container>
        <Container maxW="container.xl" py="5">
          <Courses posts={posts} />
        </Container>
      </Container>
    </Box>
  )
}
