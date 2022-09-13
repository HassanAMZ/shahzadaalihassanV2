import { Box, Container, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/CustomLink'
import headerNavLinks from '@/data/headerNavLinks'
import NewsletterForm from '@/components/NewsletterForm'
const Logo = () => {
  return (
    <>
      <CustomLink href="/about">
        <Image
          alt="Shahzada Ali Hassan"
          src="/static/images/avatar.png"
          width="50px"
          height="50px"
          className="bg-white rounded-full"
        />
      </CustomLink>
    </>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const NavLinks = headerNavLinks.map((link, index) => (
  <CustomLink key={index} href={link.href}>
    {link.title}
  </CustomLink>
))

export default function LargeWithLogoLeft() {
  return (
    <>
      <div className="container mx-auto my-3 py-10 px-3 rounded-[25px] bg-gray-100">
        {siteMetadata.newsletter.provider !== '' && <NewsletterForm />}
      </div>

      <div className="container mx-auto my-3 py-10 px-3 text-white rounded-[25px] bg-teal-700">
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }} spacing={8}>
          <Stack>
            <Box>
              <Logo />
            </Box>
            <CustomLink href="/about">
              <Text color="white">{siteMetadata.author} </Text>
            </CustomLink>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </Stack>
          <Stack align={'flex-start'}></Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Nav Links</ListHeader>
            {NavLinks}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader> Support</ListHeader>
            <CustomLink href={`mailto:${siteMetadata.email}`}>Email</CustomLink>
            <CustomLink href={siteMetadata.github}>Github</CustomLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <CustomLink href={siteMetadata.instagram}>Instagram</CustomLink>
            <CustomLink href={siteMetadata.twitter}>Twitter </CustomLink>
            <CustomLink href={siteMetadata.linkedin}>Linkedin</CustomLink>
            <CustomLink href={siteMetadata.youtube}>Youtube</CustomLink>
            <CustomLink href={siteMetadata.facebook}>Facebook</CustomLink>
          </Stack>
        </SimpleGrid>
      </div>
    </>
  )
}
