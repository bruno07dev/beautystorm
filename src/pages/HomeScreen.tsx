import React from 'react'
import GridProducts from '../components/GridProducts'
import {
  Stack,
  Text,
  Heading,
  Image,
  Button,
  Flex,
  Grid,
  GridItem,
  Center
} from '@chakra-ui/react'

import NewsLetter from '../components/NewsLetter'
import { useGetProductsByCategory } from '../hooks/useGetProductsByCategory'
import LoadingScreen from '../components/LoadingScreen'

function HomeScreen() {
  const { products, loading } = useGetProductsByCategory({
    category: "women's clothing"
  })

  return (
    <>
      <Flex direction={'column'} align={'center'} minH={'100vh'}>
        <Stack
          mb={'3rem'}
          direction={{
            base: 'column',
            md: 'row'
          }}
          aling={'center'}
          height={'400px'}
          width={'80%'}
          padding={2}
        >
          <Stack
            width={{
              base: '100%',
              md: '70%'
            }}
            direction={'column'}
            align={'center'}
            justify={'center'}
          >
            <Text>Coleção de verão</Text>
            <Heading> A coleção de verão já está disponível</Heading>
            <Button bgColor={'green'} size={'lg'} color={'#fff'}>
              Veja mais...
            </Button>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '30%'
            }}
            height={'100%'}
            direction={'row'}
            justify={'flex-end'}
          >

          </Stack>
        </Stack>
        {/* End First */}
        {/* Grid */}
        <Center mb={'.5rem'}>
          <Heading as={'h3'} fontWeight={'none'} size={'2xl'}>
            Compartilhe a sua vibe
          </Heading>
        </Center>

        {/* End Grid */}
        <NewsLetter />
        {/* Best sellers  */}
        <Stack as={'section'} mt={4}>
          {loading
            ? (
            <>
              <LoadingScreen />
            </>
              )
            : (
            <>
              <Center>
                <Heading as={'h3'} size={'2xl'}>
                  Melhor escolha
                </Heading>
              </Center>
              <GridProducts products={products.slice(0, 3)} />
            </>
              )}
        </Stack>
        {/* End Similar Products  */}
      </Flex>
    </>
  )
}

export default HomeScreen
