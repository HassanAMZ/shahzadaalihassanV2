import { Box, Heading, Container, Grid, Link as ChakraLink, Button, Flex } from '@chakra-ui/react'
import AllBlogPosts from '@/components/AllBlogPosts'
import PopularPost from '@/components/PopularPost'
import CategoryList from '@/components/CategoryList'
import SocialProfile from '@/components/SocialProfile'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const randomGenerator = () => {
    return Math.floor(Math.random() * (2 - 0 + 1)) + 0
  }

  return (
    <Container maxW="container.xl">
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
          randomGenerator={randomGenerator}
        />
        <Box>
          <PopularPost posts={posts} initialDisplayPosts={'4'} />
          <CategoryList posts={posts} initialDisplayPosts={'4'} />
          <SocialProfile/>
        </Box>
      </Grid>
    </Container>
  )
}
