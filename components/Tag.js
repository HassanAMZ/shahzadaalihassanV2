import { Box, Button, Flex, Text } from '@chakra-ui/react'
import kebabCase from '@/lib/utils/kebabCase'
import Link from 'next/link'

const Tag = ({ text, icon, size }) => {
  function random(number) {
    return Math.floor(Math.random() * number)
  }
  function randomColor() {
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10)
    }
    return color
  }
  return (
    <Box pr="2" py="1">
      <Link href={`/tags/${kebabCase(text)}`}>
        <a>
          <Button
            size="xx-small"
            fontWeight={'normal'}
            px={3}
            py={1}
            bgColor={randomColor()}
            _hover={{ bg: 'teal.500', color: 'white' }}
            borderWidth="1px"
          >
            <Flex
              justifyContent={'center'}
              className="hvr-icon-up"
              alignItems={'center'}
              fontSize={['xx-small', 'x-small']}
            >
              <Text color={'white'} textTransform={'uppercase'} mr="2">
                {text.split(' ').join('-')}
              </Text>
              <Box color={'white'}>{icon}</Box>
            </Flex>
          </Button>
        </a>
      </Link>
    </Box>
  )
}

export default Tag
