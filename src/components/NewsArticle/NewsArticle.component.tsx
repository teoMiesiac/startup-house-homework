import { Flex, Heading, Text, Image } from '@chakra-ui/react'
import { CustomLink } from './NewsArticle.styles'

interface Props {
  header: string
  text: string
  img: string
  link: string
}

const NewsArticle = ({ header, text, img, link }: Props): JSX.Element => (
  <Flex
    as="article"
    flexDirection="column"
    alignItems={{ sm: 'center', md: 'flex-end' }}
    width={{ sm: '100%', md: '800px' }}
    border="1px"
    borderColor="teal"
    padding={{ sm: '10px', md: '20px' }}
    shadow="base"
  >
    <Flex
      direction={{ sm: 'column', md: 'row' }}
      wrap="nowrap"
      alignItems={{ sm: 'center', md: '' }}
      justifyContent="space-between"
      width="100%"
    >
      <Flex direction="column" maxW={{ md: '450px' }}>
        <Heading as="h3" size="lg" color="teal">
          {header}
        </Heading>
        <Text textAlign="justify" marginTop="10px" marginLeft="10px">
          {text}
        </Text>
      </Flex>
      <Image src={img} boxSize="200px" alt="article image" marginTop={{ sm: '10px', md: '0' }}></Image>
    </Flex>
    <CustomLink
      colorScheme="teal"
      color="teal"
      href={link}
      width="fit-content"
      border="1px"
      borderColor="teal"
      padding="10px"
      borderRadius="5px"
      marginTop={{ sm: '10px', md: '0' }}
    >
      Full Version
    </CustomLink>
  </Flex>
)

export default NewsArticle
