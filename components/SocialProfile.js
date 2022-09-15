import { Stack, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/CustomLink'
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaGithub } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import CustomButton from './CustomButton'
const SocialLinks = ({ name, router, icon }) => {
  return (
    <CustomLink href={router} aria-label={name}>
      <CustomButton scheme="ghost-solid" customClasses="flex gap-2 items-center justify-center">
        {icon}
        {name}
      </CustomButton>
    </CustomLink>
  )
}
const SocialProfile = ({ title }) => {
  return (
    <>
      <Flex gap={2} direction="column" justify={'space-between'}>
        <Heading as="h2" py={[5, 6]} fontSize={['xl']}>
          {title}
        </Heading>
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
      </Flex>
    </>
  )
}

export default SocialProfile
