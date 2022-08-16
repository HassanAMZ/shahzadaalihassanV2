import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react'

const Projects = () => {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Container maxW="container.xl">
        <Heading as="h2" py={[5, 6]} fontSize={['xl']}>
          All Projects
        </Heading>
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr));"
          justify="center"
          align="left"
          placeContent="center"
          gap={6}
        >
          {projectsData.map(({ title, description, imgSrc, href, price, pid }) => (
            <GridItem bg="teal.50" p={{ base: '0', sm: '1' }} key={title}>
              <Card
                key={pid}
                title={title}
                description={description}
                imgSrc={imgSrc}
                href={href}
                pid={pid}
                price={price}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  )
}
export default Projects
