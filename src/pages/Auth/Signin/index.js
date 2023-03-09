import React from 'react'
import { Box, Flex, Heading, FormControl, FormLabel, Input, Button, Alert } from '@chakra-ui/react'
import { useFormik } from 'formik'
import validationSchema from './validations'
import { fetchLogin } from '../../../api'
import { useAuth } from '../../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

function Signin() {
  const {login}=useAuth();
  const history=useHistory();

  const formik=useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validationSchema,
    onSubmit:async (values, bag)=>{
      try {
        const loginResponse=await fetchLogin(values);
        login(loginResponse);
        history.push("/profile");
        console.log(loginResponse);
      } catch (e) {
        bag.setErrors({general:e.response.data.message});
      }
    }
  })

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Giriş</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-posta</FormLabel>
                <Input 
                  name="email" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt="4">Şifre</FormLabel>
                <Input 
                  name="password" 
                  type="password"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>
              <Button mt="4" width="full" type="submit">Giriş Yap</Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signin