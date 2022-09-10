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
        {/* <Hero /> */}
        <Heading as="h2" py="3" fontSize={['xl']}>
          A Quick Introduction
        </Heading>
        <Box t>{children}</Box>
      </Box>
    </>
  )
}
