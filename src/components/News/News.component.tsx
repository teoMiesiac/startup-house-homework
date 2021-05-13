import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Flex, SimpleGrid } from '@chakra-ui/react'
import { Section } from 'components/Section'
import { NewsArticle } from 'components/NewsArticle'
import { newsFetch } from 'store/actions'

const examples = [
  {
    id: 0,
    header: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'https://i.pinimg.com/originals/07/59/c9/0759c9b979c04fc9b6952c5cfa85ec5f.jpg',
    link: 'https://chakra-ui.com/',
  },
  {
    id: 1,
    header: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'https://i.pinimg.com/originals/07/59/c9/0759c9b979c04fc9b6952c5cfa85ec5f.jpg',
    link: 'https://chakra-ui.com/',
  },
  {
    id: 2,
    header: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'https://i.pinimg.com/originals/07/59/c9/0759c9b979c04fc9b6952c5cfa85ec5f.jpg',
    link: 'https://chakra-ui.com/',
  },
]

const News = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newsFetch())
  }, [])

  return (
    <Section>
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        px={{ sm: '15px', md: '30px' }}
        py={{ sm: '20px', md: '30px', lg: '50px' }}
        maxWidth={1480}
        width="100%"
        justifyContent={{ sm: '', md: 'space-between' }}
        alignItems="center"
      >
        <SimpleGrid columns={1} spacing="10">
          {examples.map((example) => (
            <NewsArticle
              key={example.id}
              header={example.header}
              text={example.text}
              img={example.img}
              link={example.link}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Section>
  )
}

export default News
