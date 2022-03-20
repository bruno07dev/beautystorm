import React from 'react'
import { Stack, Image, Heading, Text } from '@chakra-ui/react'

const WishListEmpty = () => {
  return (
    <Stack minHeight={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Image w={'500px'} h={'500px'} src={'/wishlist.svg'} />
      <Heading>Você não possui favoritos</Heading>
      <Text>Ao adicionar favoritos, iremos salvar para você.</Text>
    </Stack>
  )
}

export default WishListEmpty
