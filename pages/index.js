import CustomLink from '@/components/CustomLink'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import RecentPosts from '@/components/RecentPosts'
import { getAllTags } from '@/lib/tags'
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
    <div className="divide-y">
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <div className=" container mx-auto px-3 rounded-[25px] bg-teal-100">
        <RecentPosts posts={posts} initialDisplayPosts={initialDisplayPosts} title="Recent Posts" />
      </div>
      <div className=" container mx-auto px-3 py-10">
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
              <CustomLink
                href="/tags"
                aria-label="all posts"
                width={{ base: '100%', sm: 'fit-content' }}
              >
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
              </CustomLink>
            </Flex>
          }
        </>{' '}
      </div>{' '}
      <div className=" container mx-auto px-3 py-10">
        <Grid templateColumns={{ base: '1fr', md: '3fr 2fr' }} gap={5}>
          <PopularPost posts={posts} title="Popular Posts" />
          <SocialProfile title="Social Profiles" />
        </Grid>
      </div>
      <div className=" container mx-auto px-3 py-10">
        <Courses posts={posts} />
      </div>
    </div>
  )
}
