import { Alert, Button, Image, Text, Box } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../../contexts/BasketContext'

function Basket() {
    const {items, removeFromBasket}=useBasket();
    const total=items.reduce((acc,obj)=>acc+obj.price,0);

    console.log(items)
  return (
    <Box p="5">
        {items.length < 1 && (
        <Alert status="warning">
            Sepette ürün yok.
        </Alert>
        )}
        {
            items.length > 0 && (
            <>
                <ul style={{listStyleType:"decimal"}}>
                {items.map((item)=>{
                    <li key={item.id} style={{marginBottom:"15px"}}>
                        <Link to={`/product/${item.id}`}>
                            <Text fontSize="18" >{item.title}/{item.price} TL</Text>
                            <Image htmlWidth={200} 
                            loading="lazy"
                            src={item.images[0]}
                            alt="basket item"/>
                            <Button mt="2" size="sm" colorScheme="orange"
                            onClick={()=>removeFromBasket(item.id)}>
                                Sepetten Sil
                            </Button>
                        </Link>
                    </li>
                })}
                </ul>
                <Box mt="10">
                    <Text fontSize="22">
                    Toplam Tutar : {total} TL
                    </Text>
                </Box>
            </>
            )
        }
    </Box>
  )
}

export default Basket