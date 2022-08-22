import { Box, Flex, Grid, Button, Link as ChakraLink } from '@chakra-ui/react'
import PortfolioIntroductionSummary from '@/components/PortfolioIntroductionSummary'
import NextLink from 'next/link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
export default function Hero() {
  return (
    <>
      <Grid
        templateColumns={{ base: '1fr', md: '3fr 2fr' }}
        templateAreas={{ base: "'two' 'one' ", md: "'one two'" }}
      >
        <Flex
          align={{ base: 'center', md: 'flex-start' }}
          justify={{ base: 'center' }}
          direction="column"
          rowGap="5"
          gridArea="one"
          py={{ base: '8', sm: '12', md: '4' }}
        >
          <PortfolioIntroductionSummary />
          <Flex direction={{ md: 'row' }} gap="2" justify={{ base: 'center', md: 'flex-start' }}>
            <NextLink
              href="/projects"
              aria-label="all projects"
              passHref
              width={{ base: '100%', md: 'fit-content' }}
            >
              <ChakraLink textDecoration={'none !important'}>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'teal'}
                  bg={'teal.400'}
                  _hover={{ bg: 'teal.500' }}
                  width="100%"
                >
                  Hire Me
                </Button>
              </ChakraLink>
            </NextLink>

            <NextLink
              href="/projects"
              aria-label="all projects"
              passHref
              width={{ base: '100%', md: 'fit-content' }}
            >
              <ChakraLink textDecoration={'none !important'}>
                <Button rounded={'full'} size={'lg'} fontWeight={'normal'} px={6} width="100%">
                  Check the Projects
                </Button>
              </ChakraLink>
            </NextLink>
          </Flex>
        </Flex>
        <Box overflow="hidden">
          <Image
            src={'/static/images/hero-image.png'}
            layout="responsive"
            width={796}
            height={1080}
            alt={siteMetadata.author}
          />
        </Box>
      </Grid>
    </>
  )
}
