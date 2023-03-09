import { Button, Text } from '@chakra-ui/react';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { fetchLogout } from '../../api';
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
        <Text fontSize="22">Profil</Text>
        <code>{JSON.stringify(user)}</code>
        <Button mt="2" colorScheme="pink"variant="solid" onClick={handleLogout}>Çıkış Yap</Button>
    </div>
  )
}

export default Profile