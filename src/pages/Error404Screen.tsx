import React from 'react'
import { Image, Stack, Button, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Error404Screen = () => {
  return (
    <Stack
      padding={3}
      direction={'column'}
      justify={'center'}
      align={'center'}
      minW={'100vw'}
      minH={'100vh'}
    >
      <Image width={200} heigth={200} src="/error404.svg" />
      <Heading>Página não encontrada</Heading>
      <Text>Infelizmente não consguimos encontrar a página que procura.</Text>
      <Button variant={'solid'} size={'lg'} as={Link} to={'/'}>
        Voltar
      </Button>
    </Stack>
  )
}

export default Error404Screen
