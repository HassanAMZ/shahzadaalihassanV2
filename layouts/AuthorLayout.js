import { PageSEO } from '@/components/SEO'
import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import SocialProfile from '@/components/SocialProfile'
export default function AuthorLayout({ children, frontMatter }) {
  const { name } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <Box py="4">
        <Hero />
        <Heading as="h2" py="3" fontSize={['xl']} textAlign={{ base: 'center', md: 'left' }}>
          A Quick Introduction
        </Heading>
        <Box textAlign={{ base: 'center', md: 'left' }}>{children}</Box>
        <Heading as="h2" py={[5, 6]} fontSize={['xl']}>
          Contact Hassan
        </Heading>
        <Grid placeContent="center" py="4" templateColumns={'1fr 2fr 1fr'}>
          <Box></Box>{' '}
          <Box>
            <Heading
              display={{ base: 'block', md: 'none' }}
              as="h2"
              py={[5, 6]}
              fontSize={['xl']}
              textAlign={'center'}
            >
              Contact Hassan
            </Heading>
            <SocialProfile />
          </Box>
          <Box></Box>
        </Grid>
      </Box>
    </>
  )
}
