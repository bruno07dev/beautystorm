import React from 'react'
import { Stack, Image, Heading, Text } from '@chakra-ui/react'
const CartEmpty = () => {
  return (
    <Stack
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      h={'100%'}
      spacing={3}
    >
      <Image src={'/empty-cart.svg'} />
      <Heading size={'lg'}>Sua sacola está vazia!!</Heading>
      <Text>
        Parece que você ainda não adicionou nenhum item à sacola.
      </Text>
    </Stack>
  )
}

export default CartEmpty
