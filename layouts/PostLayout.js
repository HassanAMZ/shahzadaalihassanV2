import NextLink from 'next/link'
import Image from 'next/image'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import GAPageView from '@/components/GAPageView'
import Comments from '@/components/comments'
import {
  Box,
  Heading,
  Link as ChakraLink,
  Grid,
  Flex,
  Button,
  Container,
  Text,
} from '@chakra-ui/react'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags, coverImage, blogID } = frontMatter
  const { avatar, name, instagram } = authorDetails[0]
  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <Box m={2}>
        <Container maxW="container.xl" bgColor={'gray.100'} borderRadius="25px">
          <Grid placeContent={'center'} py={5}>
            <Flex
              align="center"
              justify={'center'}
              direction="column"
              gap="2"
              textTransform={'capitalize'}
              fontWeight="bold"
            >
              <Heading as="h1" py="2" fontSize={['1.75rem', '2.2rem']} align="center">
                {title}
              </Heading>
              {tags && (
                <Flex wrap="wrap" align="center" justify={'center'}>
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </Flex>
              )}
              <Flex
                direction={['column', 'column', 'row', 'row']}
                justify="left"
                fontSize="xs"
                columnGap="2"
                align="center"
              >
                <Flex justify="left" align="center" columnGap="2">
                  <NextLink passHref href="/about">
                    <ChakraLink>
                      <Text textAlign={'center'}>{name}</Text>
                    </ChakraLink>
                  </NextLink>
                  <Box as="span">{` • `}</Box>
                  <Text textAlign={'center'} as="time" dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </Text>
                </Flex>
                <Flex direction="row" columnGap="2" align={'center'} justify="center">
                  <Box as="span" id="time"></Box>
                  <Text>min read</Text>
                  <Box as="span">{` • `}</Box>
                  <GAPageView slug={slug} />
                </Flex>
              </Flex>
            </Flex>
          </Grid>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <Box as="article" id="singlePost" py="2">
          <Box>
            <Flex direction="column" py="2">
              <Box as="article">{children}</Box>
              <Box>
                <Box py="2">
                  {(next || prev) && (
                    <Flex justify="space-between" direction={{ base: 'column', sm: 'row' }}>
                      {prev && (
                        <Flex direction="column" align={{ base: 'center', sm: 'start' }} py="2">
                          <NextLink
                            flex="auto"
                            passHref
                            alignSelf=" stretch"
                            href={`/products/${prev.slug}`}
                            aria-label="Previous Post"
                          >
                            <ChakraLink textDecoration={'none !important'}>
                              <Button
                                colorScheme="teal"
                                size="sm"
                                w="100%"
                                textTransform={'uppercase'}
                                variant="solid"
                                rounded={'full'}
                                fontWeight={'normal'}
                                px={6}
                                bg={'teal.400'}
                                _hover={{ bg: 'teal.500', textDecoration: 'none' }}
                                my="4"
                              >
                                Previous Post
                              </Button>
                            </ChakraLink>
                          </NextLink>
                          <NextLink passHref href={`/products/${prev.slug}`}>
                            <ChakraLink px="2" _hover={{ textDecoration: 'none' }}>
                              <Box borderColor="teal.300" borderWidth="thin" borderRadius={'25px'}>
                                <Grid
                                  borderRadius={'25px'}
                                  overflow="hidden"
                                  templateRows={'2fr 1fr'}
                                  templateColumns={{
                                    base: '250px',
                                    sm: 'repeat(auto-fill, minmax(250px, 350px))',
                                  }}
                                >
                                  <Image
                                    src={prev.coverImage}
                                    layout="responsive"
                                    width={1920}
                                    height={1080}
                                    alt={next.title}
                                  />

                                  <Flex direction={'column'} justify="center">
                                    <Heading
                                      m={2}
                                      textAlign="center"
                                      as="h3"
                                      textTransform="capitalize"
                                      fontSize="sm"
                                      overflow="hidden"
                                    >
                                      {prev.title}
                                    </Heading>
                                  </Flex>
                                </Grid>
                              </Box>
                            </ChakraLink>
                          </NextLink>
                        </Flex>
                      )}
                      {next && (
                        <Flex direction="column" align={{ base: 'center', sm: 'end' }} py="2">
                          <NextLink passHref href={`/products/${next.slug}`}>
                            <ChakraLink>
                              <Button
                                w="100%"
                                colorScheme="teal"
                                size="sm"
                                textTransform={'uppercase'}
                                variant="solid"
                                rounded={'full'}
                                fontWeight={'normal'}
                                px={6}
                                bg={'teal.400'}
                                _hover={{ bg: 'teal.500', textDecoration: 'none' }}
                                my="4"
                              >
                                Next Post
                              </Button>
                            </ChakraLink>
                          </NextLink>
                          <NextLink passHref href={`/products/${next.slug}`}>
                            <ChakraLink _hover={{ textDecoration: 'none' }}>
                              <Box borderColor="teal.300" borderWidth="thin" borderRadius={'25px'}>
                                <Grid
                                  borderRadius={'25px'}
                                  overflow="hidden"
                                  templateRows={'2fr 1fr'}
                                  templateColumns={{
                                    base: '250px',
                                    sm: 'repeat(auto-fill, minmax(250px, 350px))',
                                  }}
                                >
                                  <Image
                                    src={next.coverImage}
                                    layout="responsive"
                                    width={1920}
                                    height={1080}
                                    alt={next.title}
                                  />

                                  <Flex direction={'column'} justify="center">
                                    <Heading
                                      m={2}
                                      textAlign="center"
                                      as="h3"
                                      textTransform="capitalize"
                                      fontSize="sm"
                                      overflow="hidden"
                                    >
                                      {next.title}
                                    </Heading>
                                  </Flex>
                                </Grid>
                              </Box>
                            </ChakraLink>
                          </NextLink>
                        </Flex>
                      )}
                    </Flex>
                  )}
                </Box>

                <NextLink passHref href="/products">
                  <ChakraLink>
                    <Button
                      colorScheme="teal"
                      size="sm"
                      w="100%"
                      textTransform={'uppercase'}
                      variant="solid"
                      rounded={'full'}
                      fontWeight={'normal'}
                      px={6}
                      bg={'teal.400'}
                      _hover={{ bg: 'teal.500', textDecoration: 'none' }}
                      my="4"
                    >
                      <Text py="2">&larr; Back to the products</Text>
                    </Button>
                  </ChakraLink>
                </NextLink>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Container>
    </>
  )
}
