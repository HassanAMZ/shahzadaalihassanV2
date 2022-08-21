import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
import siteMetadata from '@/data/siteMetadata'
export default function PortfolioIntroductionSummary() {
  return (
    <>
      <Flex direction={'column'} align={{ base: 'center', md: 'flex-start' }} gap="1" pt="4">
        <>
          <Flex justify={{ base: 'center', md: 'flex-start' }}>
            <Text fontSize={['xs', 'sm', 'md']}>Top Rated Freelancer at&nbsp;</Text>
            <Link
              href="https://www.upwork.com/freelancers/~015b35831b56606433"
              aria-label="Upwork Profile of Shahzada Ali Hassan"
            >
              <a>
                <Box textTransform={'uppercase'} fontWeight="bold">
                  <Flex
                    direction={'row'}
                    justifyContent="center"
                    alignItems={'center'}
                    fontSize={['xs', 'sm', 'md']}
                  >
                    <Text pr="1">Upwork</Text>
                    <ExternalLinkIcon />
                  </Flex>
                </Box>
              </a>
            </Link>
          </Flex>
        </>
        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'teal.400',
              zIndex: -1,
            }}
          >
            {siteMetadata.author}
          </Text>
        </Heading>

        <Text align={{ base: 'center', md: 'left' }} fontSize={['xs', 'sm', 'md']} color="gray.600">
          Helping Start-ups Track Better with GTM, GA4, FB and much more!
        </Text>
      </Flex>
    </>
  )
}
