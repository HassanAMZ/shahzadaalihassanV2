import { Heading, OrderedList, ListItem } from '@chakra-ui/react'

const TableOfContent = ({ contents }) => (
  <>
    <Heading fontWeight="bold" py="2" fontSize={{ base: 'md', md: 'xl' }}>
      Table Of Content
    </Heading>

    <OrderedList>
      {contents.map((content, index) => {
        return (
          <a
            fontSize={['sm', 'md', 'md']}
            color="teal"
            fontWeight="semibold"
            textTransform="capitalize"
            textDecoration="underline"
            textDecorationStyle="dotted"
            _hover={{ color: 'teal.900' }}
            key={index}
            href={`#${content.toLowerCase().replaceAll(' ', '-')}`}
          >
            <ListItem
              fontSize={['sm', 'md', 'md']}
              color="teal"
              fontWeight="semibold"
              textTransform="capitalize"
              textDecoration="underline"
              textDecorationStyle="dotted"
              _hover={{ color: 'teal.900' }}
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
