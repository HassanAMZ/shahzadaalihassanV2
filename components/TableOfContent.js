import { Heading, UnorderedList, ListItem, Box, Link } from '@chakra-ui/react'

const TableOfContent = ({ contents }) => (
  <Box p={16} backgroundColor="#EDF2F7" borderRadius="25px" maxWidth="fit-content">
    <Heading fontWeight="bold" py="2" as="h3">
      Table Of Content
    </Heading>
    <UnorderedList margin="0">
      {contents.map((content, index) => {
        const content_href = `#${content.toString().toLowerCase().split(' ').join('-')}`
        return (
          <Link key={index} href={content_href}>
            <ListItem
              fontSize={['sm', 'md', 'md']}
              color="teal"
              fontWeight="semibold"
              textTransform="capitalize"
              listStyleType="none"
              px="4"
              py="1"
              _hover={{
                color: 'white',
                backgroundColor: 'teal',
                borderRadius: '5px',
              }}
            >
              {content}
            </ListItem>
          </Link>
        )
      })}
    </UnorderedList>
  </Box>
)

export default TableOfContent
