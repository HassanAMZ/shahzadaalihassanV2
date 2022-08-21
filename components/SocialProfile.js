import { Box, Link as ChakraLink, Heading, Flex, Grid } from '@chakra-ui/react'
import Tag from '@/components/Tag'
import { SearchIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const SocialProfile = ({ posts }) => {
  return (
    <>
      <Heading as="h2" py={[5, 6]} fontSize={['xl']}>
        Social Profile
      </Heading>
    </>
  )
}

export default SocialProfile
