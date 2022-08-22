import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
import siteMetadata from '@/data/siteMetadata'
export default function PortfolioIntroductionSummary() {
  return (
    <>
      <Flex direction={'column'} align={{ base: 'center', md: 'flex-start' }} gap="1">
        <Flex justify={{ base: 'center', md: 'flex-start' }}>
          <Text fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}>Top Rated Freelancer at&nbsp;</Text>
          <Link href={siteMetadata.upwork} aria-label="Upwork Profile of Shahzada Ali Hassan">
            <a>
              <Box textTransform={'uppercase'} fontWeight="bold">
                <Flex
                  direction={'row'}
                  justifyContent="center"
                  alignItems={'center'}
                  fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                >
                  <Text pr="1">Upwork</Text>
                  <ExternalLinkIcon />
                </Flex>
              </Box>
            </a>
          </Link>
        </Flex>
        <Heading
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: '4xl', sm: '6xl', md: '7xl', lg: '9xl' }}
        >
          {siteMetadata.author}
        </Heading>
        <Text
          textAlign={{ base: 'center', sm: 'left', md: 'left' }}
          fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
          color="gray.600"
        >
          Helping Start-ups Track Better with GTM, GA4, FB and much more!
        </Text>
      </Flex>
    </>
  )
}
