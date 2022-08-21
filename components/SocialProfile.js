import { Stack, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react'
import siteMetadata from '@/data/siteMetadata'
import NextLink from 'next/link'
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaGithub } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
const SocialLinks = ({ name, router, icon }) => {
  return (
    <NextLink href={router} aria-label={name} passHref>
      <ChakraLink target="_blank" rel="noopener noreferrer" textDecoration={'none !important'}>
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
      <Stack gap={2}>
        <SocialLinks name={'Upwork'} router={siteMetadata.upwork} icon={<SiUpwork />} />
        <SocialLinks
          name={'Email'}
          router={`mailto:${siteMetadata.email}`}
          icon={<HiOutlineMail />}
        />
        <SocialLinks name={'Youtube'} router={siteMetadata.youtube} icon={<FaYoutube />} />
        <SocialLinks name={'Facebook'} router={siteMetadata.facebook} icon={<FaFacebook />} />
        <SocialLinks name={'Twitter'} router={siteMetadata.twitter} icon={<FaTwitter />} />
        <SocialLinks name={'Linkedin'} router={siteMetadata.linkedin} icon={<FaLinkedin />} />
        <SocialLinks name={'Instagram'} router={siteMetadata.instagram} icon={<FaInstagram />} />
        <SocialLinks name={'Github'} router={siteMetadata.github} icon={<FaGithub />} />
      </Stack>
    </>
  )
}

export default SocialProfile
