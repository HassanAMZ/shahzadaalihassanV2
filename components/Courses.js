import GAPageView from '@/components/GAPageView'
import CustomLink from '@/components/CustomLink'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Grid, Flex, Heading, Box, VisuallyHidden, Button, Text, Image } from '@chakra-ui/react'
import CustomButton from '@/components/CustomButton'

const Courses = ({ posts }) => {
  let coursesIDs = ['00008']
  let blogIDs = []
  posts.map((frontMatter, index) => {
    const { slug, date, title, summary, tags, blogID, coverImage } = frontMatter
    coursesIDs.map((coursesID, indexA) => {
      if (blogID == coursesID) {
        blogIDs[indexA] = (
          <Flex as="article" key={indexA} direction={['column']} gap="5">
            <Box>
              <VisuallyHidden>Published on</VisuallyHidden>
              <Flex
                justify={['space-between']}
                direction={['row']}
                fontSize={['x-small', 'xs', 'sm']}
              >
                <Box dateTime={date}>{formatDate(date)}</Box>
                <GAPageView slug={slug} />
              </Flex>
            </Box>
            <Box>
              <Heading as="h2" fontSize={['md', 'xl']}>
                <CustomLink href={`/blog/${slug}`}>
                  <Text textTransform="capitalize">{title}</Text>
                </CustomLink>
              </Heading>
              <Flex direction={'row'} flexWrap="wrap" my={[1]}>
                {tags.map((tag, index) => (
                  <Tag key={index} text={tag} icon={<ExternalLinkIcon />} />
                ))}
              </Flex>
            </Box>
            <Box noOfLines={[3]}>{summary}</Box>

            <CustomLink href={`/blog/${slug}`} aria-label={`Read "${title}"`} className="sm:w-fit">
              <CustomButton scheme={'solid'}>Get the course &rarr;</CustomButton>
            </CustomLink>
          </Flex>
        )
      }
    })
  })
  return (
    <Box>
      <Heading as="h2" py="3" fontSize={['xl']}>
        Get the Courses
      </Heading>
      <Grid className="grid grid-cols-1 gap-1">{blogIDs}</Grid>
    </Box>
  )
}

export default Courses
