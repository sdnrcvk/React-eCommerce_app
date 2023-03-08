import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../api';
import { Box, Text, Button } from '@chakra-ui/react';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';

function ProductDetail() {
    const {product_id}=useParams();
    const { isLoading, error, data } = useQuery(["product",product_id],()=>fetchProduct(product_id));

    if (isLoading) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message

    const images=data.images.map((url)=>({original:url}));

  return (
    <div>
        <Button colorScheme="orange">
            Sepete Ekle
        </Button>
        <Text as="h2" fontSize="2xl">
            {data.title}
        </Text>
        <Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
        <p>{data.description}</p>
        <Box margin="10">
            <ImageGallery items={images}/>
        </Box>
    </div>
  )
}

export default ProductDetail