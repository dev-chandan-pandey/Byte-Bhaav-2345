import { Input, Stack } from '@chakra-ui/react'
import React from 'react'

function SearchBar({setSearch}) {

    function handleSearch(v) {
        setSearch(v);
      }
  return (
    <Stack spacing={3}>
    <Input variant='outline' placeholder='search by name' onChange={(e)=>handleSearch(e.target.value)} />
  </Stack>
  )
}

export default SearchBar