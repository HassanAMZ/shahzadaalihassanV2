import { Box, Container, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function FourZeroFour() {
  return (
    <Box m={2}>
      <Container bgColor="white" borderRadius="25px" border="teal 2px solid" maxW="container.xl">
        <div className=" flex items-center justify-center">
          <Box borderRadius="25px" textAlign="center" py={4}>
            <h1 className="text-9xl font-bold text-teal-400">404</h1>
            <h1 className="text-6xl font-medium py-2">Page not found</h1>
            <p className="text-2xl py-2 sm:px-16 sm:py-4 font-medium">
              Oops! The page you are looking for does not exist. It might have been moved or
              deleted.
            </p>
            <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-white-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
              <Link href="/">HOME</Link>
            </button>
            <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-500 text-white font-semibold px-6 py-3 rounded-md">
              <Link href="/blog">Blog</Link>
            </button>
          </Box>
        </div>
      </Container>
    </Box>
  )
}
