import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from 'react'
import moment from 'moment/moment';

function Card({item}) {

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to={`/product/${item.id}`}>
            <Image src={item.images[0]} alt="product" loading="lazy" style={{width:"auto",height:"150px"}}/>
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    {moment(item.createdAt).format('DD/MM/YYYY')}
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    {item.title}
                </Box>
                <Box>{item.price} TL</Box>
            </Box> 
        </Link>
        <Button colorScheme="orange">
            Sepete Ekle
        </Button>
    </Box>

  )
}

export default Card