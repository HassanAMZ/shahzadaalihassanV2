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
          title={pageTitle}
          randomGenerator={randomGenerator}
        />
        <Box>
          <PopularPost posts={posts} title={pageTitle} initialDisplayPosts={'4'} tags={tags} />
          <CategoryList posts={posts} initialDisplayPosts={'4'} tags={tags} />
          <SocialProfile />
        </Box>
      </Grid>
    </Container>
  )
}
