import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react'

import siteMetadata from '@/data/siteMetadata'
import NextLink from 'next/link'
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

const SocialLinks = ({ name, router, icon }) => {
  return (
    <NextLink href={router} aria-label={name} passHref>
      <ChakraLink textDecoration={'none !important'}>
        <Flex
          border={'teal 2px solid'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'3'}
          borderRadius="30px"
          py={1}
        >
          {icon}
          {name}
        </Flex>
      </ChakraLink>
    </NextLink>
  )
}
const SocialProfile = ({ posts }) => {
  return (
    <>
      <Heading as="h2" py={[5, 6]} fontSize={['xl']}>
        Social Profile
      </Heading>
      <Stack gap={2}>
        <SocialLinks name={'Facebook'} router={siteMetadata.facebook} icon={<FaFacebook />} />
        <SocialLinks name={'Youtube'} router={siteMetadata.youtube} icon={<FaYoutube />} />
        <SocialLinks name={'Upwork'} router={siteMetadata.upwork} icon={<SiUpwork />} />
        <SocialLinks name={'Twitter'} router={siteMetadata.twitter} icon={<FaTwitter />} />
        <SocialLinks name={'Linkedin'} router={siteMetadata.linkedin} icon={<FaLinkedin />} />
        <SocialLinks name={'Instagram'} router={siteMetadata.instagram} icon={<FaInstagram />} />
      </Stack>
    </>
  )
}

export default SocialProfile
