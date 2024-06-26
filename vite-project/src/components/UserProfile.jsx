import React from 'react'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'

export default function UserProfile() {
  const user =  localStorage.getItem("Users")||{};
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {localStorage.getItem("username")}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
        {localStorage.getItem("email")}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {localStorage.getItem("membership")}
          <Text color={'blue.400'}>{localStorage.getItem("role")}</Text> me in your website
        </Text>

       

        
      </Box>
    </Center>
  )
};


// email
// : 
// "user@gmail.com"
// id
// : 
// 2
// image
// : 
// "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
// name
// : 
// "Akash Yadav"
// password
// : 
// "user"
// type
// : 
// "user"