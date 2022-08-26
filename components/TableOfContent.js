import { Heading, OrderedList, ListItem } from '@chakra-ui/react'

const TableOfContent = ({ contents }) => (
  <>
    <Heading fontWeight="bold" py="2">
      Table Of Content
    </Heading>
    <OrderedList>
      {contents.map((content, index) => {
        const content_href = `#${content.toString().toLowerCase().replace(' ', '-')}`
        return (
          <a key={index} href={content_href}>
            <ListItem
              fontSize={['sm', 'md', 'md']}
              color="teal"
              fontWeight="semibold"
              textTransform="capitalize"
              textDecoration="underline"
              textDecorationStyle="dotted"
              _hover={{ color: 'teal.900', textDecorationStyle: 'solid' }}
            >
              {content}
            </ListItem>
          </a>
        )
      })}
    </OrderedList>
  </>
)

export default TableOfContent
