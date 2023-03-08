import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from 'react'
import moment from 'moment/moment';

function Card({item}) {

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to="/#">
            <Image src="https://picsum.photos/id/8/400/300" alt="product"/>
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