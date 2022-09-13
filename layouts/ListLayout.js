import { Box, Heading, Container, Grid, Link as ChakraLink, Button, Flex } from '@chakra-ui/react'
import AllBlogPosts from '@/components/AllBlogPosts'
import PopularPost from '@/components/PopularPost'
import CategoryList from '@/components/CategoryList'
import SocialProfile from '@/components/SocialProfile'

export default function ListLayout({ posts, title, tags, initialDisplayPosts = [], pagination }) {
  const randomGenerator = () => {
    return Math.floor(Math.random() * (2 - 0 + 1)) + 0
  }
  // Capitalize first letter and convert space to dash
  const pageTitle = title.toUpperCase().split('-').join(' ')
  return (
    <div className="container mx-auto my-3 px-3 rounded-[25px]">
      <Grid
        templateColumns={{ sm: '1fr', md: '3fr 2fr', lg: 'minmax(220px, 2fr) 1fr' }}
        gap={5}
        m="0"
        py={[5, 6]}
      >
        <AllBlogPosts
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title={pageTitle}
          randomGenerator={randomGenerator}
        />
        <Box>
          <PopularPost posts={posts} title={pageTitle} initialDisplayPosts={'4'} tags={tags} />
          <CategoryList posts={posts} initialDisplayPosts={'4'} tags={tags} />

          <SocialProfile title="Social Profiles" />
        </Box>
      </Grid>
    </div>
  )
}
