import { Heading, OrderedList, ListItem } from '@chakra-ui/react'

const TableOfContent = ({ contents }) => (
  <>
    <Heading fontWeight="bold" py="2">
      Table Of Content
    </Heading>
    <OrderedList>
      {contents.map((content, index) => {
        return (
          <a key={index} href={`#${content.toString().toLowerCase().replaceAll(' ', '-')}`}>
            <ListItem
              fontSize={['sm', 'md', 'md']}
              color="teal"
              fontWeight="semibold"
              textTransform="capitalize"
              textDecorationStyle="dotted"
              _hover={{ color: 'teal.900', textDecoration: 'underline' }}
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
