import { useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import { metaSelector } from 'store/news/selectors'
import { useDispatch } from 'react-redux'
import { newsFetch } from 'store/actions'

import './Pagination.styles.css'

const Pagination = (): JSX.Element => {
  const { found, limit } = useSelector(metaSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newsFetch({ page: 1 }))
  }, [dispatch])

  const pageCount = (): number => {
    return Math.ceil(found / limit)
  }

  const handlePageClick = (data: { selected: number }): void => {
    dispatch(newsFetch({ page: data.selected + 1 }))
  }

  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount()}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  )
}

export default Pagination
