import React from 'react'
import { Box, Flex, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import validationSchema from './validations'

function Signup() {
  const formik=useFormik({
    initialValues:{
      email:"",
      password:"",
      passwordConfirm:"",
    },
    validationSchema,
    onSubmit:async (values, bag)=>{
      console.log(values);
    }
  })

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
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
                />
              </FormControl>
              <FormControl>
                <FormLabel mt="4">Şifre Onay</FormLabel>
                <Input 
                  name="passwordConfirm" 
                  type="password"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                />
              </FormControl>
              <Button mt="4" width="full" type="submit">Kayıt Ol</Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signup