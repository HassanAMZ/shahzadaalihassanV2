import CustomLink from '@/components/CustomLink'
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
  const { slug, date, title, tags, coverImage, blogID } = frontMatter
  const { name } = authorDetails[0]
  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />

      <div className="container mx-auto my-3 px-3 bg-teal-700 rounded-[25px]">
        <Grid color={'white'} placeContent={'center'} py={5} position="relative">
          <Flex
            align="center"
            justify={'center'}
            direction="column"
            gap="2"
            textTransform={'capitalize'}
            fontWeight="bold"
          >
            <Heading as="h1" py="2" fontSize={['1.5rem', '1.75rem', '2.2rem']} align="center">
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
                <CustomLink href="/about">
                  <Text textAlign={'center'}>{name}</Text>
                </CustomLink>
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
      </div>

      <div className="container mx-auto my-3 px-3">
        <Box as="article" id="singlePost" py="2">
          <Box>
            <Flex direction="column" py="2">
              <Box as="article">{children}</Box>
              <Comments frontMatter={frontMatter} />
              <Box>
                <Box py="2">
                  {(next || prev) && (
                    <Flex
                      justify="space-between"
                      direction={{ base: 'column', sm: 'cloumn', md: 'row' }}
                    >
                      {prev && (
                        <Flex
                          direction="column"
                          align={{ base: 'center', sm: 'center', md: 'start' }}
                          py="2"
                        >
                          <CustomLink
                            className="self-stretch flex-auto"
                            href={`/blog/${prev.slug}`}
                            aria-label="Previous Post"
                          >
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
                          </CustomLink>
                          <CustomLink href={`/blog/${prev.slug}`}>
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
                                  alt={prev.title}
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
                          </CustomLink>
                        </Flex>
                      )}
                      {next && (
                        <Flex
                          direction="column"
                          align={{ base: 'center', sm: 'center', md: 'start' }}
                          py="2"
                        >
                          <CustomLink
                            href={`/blog/${next.slug}`}
                            className="self-stretch flex-auto"
                          >
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
                          </CustomLink>
                          <CustomLink href={`/blog/${next.slug}`}>
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
                          </CustomLink>
                        </Flex>
                      )}
                    </Flex>
                  )}
                </Box>

                <CustomLink href="/blog">
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
                    <Text py="2">&larr; Back to the blogs</Text>
                  </Button>
                </CustomLink>
              </Box>
            </Flex>
          </Box>
        </Box>
      </div>
    </>
  )
}
