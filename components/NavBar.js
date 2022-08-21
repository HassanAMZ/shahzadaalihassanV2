import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import Image from 'next/image'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Button,
  Text,
  Container,
  useDisclosure,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let NavLinks = headerNavLinks.map((link, index) => (
    <Link key={index} href={link.href} passHref>
      <ChakraLink textDecoration={'none !important'}>
        <Box
          px={2}
          py={1}
          color="teal"
          rounded={'md'}
          _hover={{
            bg: 'teal',
            color: 'white',
          }}
        >
          {link.title}
        </Box>
      </ChakraLink>
    </Link>
  ))
  return (
    <Container maxW="container.xl">
      <Box
        mx={{ base: '0' }}
        my={{ base: '2', sm: '3' }}
        border={'teal 2px solid'}
        borderRadius="25px"
      >
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            rounded="full"
            color={'teal'}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={'center'}>
            <Flex alignItems={'center'}>
              <Link href="/projects" aria-label="all projects" passHref width={['fit-content']}>
                <ChakraLink textDecoration={'none !important'}>
                  <Button
                    rounded={'full'}
                    size={'md'}
                    fontWeight={'normal'}
                    colorScheme={'teal'}
                    color="teal"
                    bg={'white'}
                    _hover={{ bg: 'teal', color: 'white' }}
                    width="100%"
                  >
                    <Flex justify="center" align="center" gap="3">
                      <>Shahzada Ali Hassan</>
                    </Flex>
                  </Button>
                </ChakraLink>
              </Link>
            </Flex>
          </HStack>
          <HStack as={'nav'} display={{ base: 'none', md: 'flex' }}>
            {NavLinks}
          </HStack>
          <Flex alignItems={'center'}>
            <Link href="/projects" aria-label="all projects" passHref width={['fit-content']}>
              <ChakraLink textDecoration={'none !important'}>
                <Button
                  rounded={'full'}
                  size={'md'}
                  fontWeight={'normal'}
                  colorScheme={'teal'}
                  bg={'teal.400'}
                  _hover={{ bg: 'white', color: 'teal' }}
                  width="100%"
                  pl={0}
                  py={0}
                  pr={3}
                >
                  <Flex justify="center" align="center" gap="3">
                    <Box
                      bgColor={'white'}
                      borderRadius="100px"
                      width={'40px'}
                      height="40px"
                      position="relative"
                      _hover={{
                        bg: 'teal',
                      }}
                    >
                      <Image
                        alt="Shahzada Ali Hassan"
                        src="/static/images/avatar.png"
                        layout="fill"
                        objectFit="contain"
                      />
                    </Box>
                    <>Hire Me</>
                  </Flex>
                </Button>
              </ChakraLink>
            </Link>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box display={{ md: 'none' }}>
            <Stack>{NavLinks}</Stack>
          </Box>
        ) : null}
      </Box>
    </Container>
  )
}
