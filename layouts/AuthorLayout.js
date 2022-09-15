import { PageSEO } from '@/components/SEO'
import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import CustomLink from '@/components/CustomLink'
export default function AuthorLayout({ children, frontMatter }) {
  const { name } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <Box py="4" px="3">
        <Heading as="h2" py="3" fontSize={['xl']}>
          A Quick Introduction
        </Heading>
        <Box>{children}</Box>
      </Box>
    </>
  )
}
