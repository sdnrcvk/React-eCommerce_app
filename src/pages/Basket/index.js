import { Alert, Button, Image, Text, Box, 
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalFooter,
ModalBody,
ModalCloseButton, 
useDisclosure,
FormControl,
FormLabel,
Textarea
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../../contexts/BasketContext'

function Basket() {
    const {items, removeFromBasket, emptyBasket}=useBasket();
    const total=items.reduce((acc,obj)=>acc+obj.price,0);
    const [address,setAddress]=useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)

    const handleSubmitForm=async()=>{
        const itemIds=items.map((item)=>item.id);

        console.log("Sipariş verildi.");
        emptyBasket();
        onClose();
    };
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
                <Button mt="2" size="sm" colorScheme="green" onClick={onOpen}>
                    Sipariş Ver
                </Button>
                <Modal
                    initialFocusRef={initialRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Sipariş</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                        <FormLabel>Adres</FormLabel>
                        <Textarea ref={initialRef} placeholder='Adres bilgisini giriniz' value={address}
                        onChange={(e)=>setAddress(e.target.value)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
                        Kaydet
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
            )
        }
    </Box>
  )
}

export default Basket