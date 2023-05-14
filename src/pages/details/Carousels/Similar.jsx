import React from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import useFetch from '../../../hooks/useFetch'

const Similar = ({ mediaType, id}) => {
    const { data } = useFetch(`/${mediaType}/${id}/similar`)
    console.log(data)
    const title = mediaType === 'tv' ? "Similar Tv Shows" : "Similar Movies"
    
  return (
      <Carousel
          title={title }
          data={data?.results }
          endpoint={mediaType }
      />
  )
}

export default Similar