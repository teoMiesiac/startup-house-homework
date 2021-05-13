import { Flex, SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Section } from 'components/Section'
import { NewsArticle } from 'components/NewsArticle'
import { Pagination } from 'components/Pagination'
import { dataSelector } from 'store/news/selectors'

const News = (): JSX.Element => {
  const data = useSelector(dataSelector)

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
          {data.map((data) => (
            <NewsArticle key={data.uuid} header={data.title} text={data.snippet} img={data.image_url} link={data.url} />
          ))}
        </SimpleGrid>
        <Pagination />
      </Flex>
    </Section>
  )
}

export default News
