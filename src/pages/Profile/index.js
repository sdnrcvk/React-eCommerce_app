import { Text } from '@chakra-ui/react';
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

function Profile() {
    const {user}=useAuth();

  return (
    <div>
        <Text fontSize="22">Profil</Text>
        <code>{JSON.stringify(user)}</code>
    </div>
  )
}

export default Profile