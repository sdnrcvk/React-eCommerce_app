import { Box, Button, Text, Image } from '@chakra-ui/react';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

function Profile() {
    const {user,logout}=useAuth();

    const history=useHistory();
    const handleLogout=()=>{
      logout(()=>{
        history.push("/");
      });
    };

  return (
    <div>
        <Text fontSize="22" fontWeight="bold" mb="5">Profil</Text>
        <hr></hr>
        <Box mt="5" fontSize="18" textAlign="center" >
          <Image src={user.avatar} height="150" margin="auto" mb="5"></Image>
          <Text><b>Kullanıcı :</b> {user.name}</Text>
          <Text><b>E-Posta :</b> {user.email}</Text>
          <Text><b>Rol :</b> {user.role}</Text>
          <Button mt="2" colorScheme="pink" variant="solid" onClick={handleLogout}>Çıkış Yap</Button>
        </Box>
    </div>
  )
}

export default Profile