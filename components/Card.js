import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import { Flex, Container, Heading, Text, Button, Box } from '@chakra-ui/react'

const Card = ({ title, description, imgSrc, href, pid, price }) => (
  <Flex direction="column" pb="5">
    <CustomLink href={href} aria-label={`Link to ${title}`}>
      <Image
        alt={title}
        src={imgSrc}
        width={2750}
        height={1850}
        layout="responsive"
        objectFit="contain"
      />
    </CustomLink>

    <Heading as="h2" py="3" fontSize={['lg', 'xl']} m="3">
      <>
        <CustomLink href={href} aria-label={`Link to ${title}`}>
          <Text>{title}</Text>
        </CustomLink>
      </>
    </Heading>
    <Text noOfLines="3" as="p" m="3">
      {description}
    </Text>

    <CustomLink href={href} aria-label={`Link to ${title}`}>
      <Button
        m="3"
        rounded={'full'}
        size={'lg'}
        fontWeight={'normal'}
        px={6}
        colorScheme={'teal'}
        bg={'teal.400'}
        _hover={{ bg: 'teal.500' }}
        my="4"
      >
        Learn More ({price}) &rarr;
      </Button>
    </CustomLink>
  </Flex>
)

export default Card
