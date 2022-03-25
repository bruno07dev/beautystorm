import React, { ChangeEvent, useState } from 'react'
import { Stack, Heading, Button, Checkbox } from '@chakra-ui/react'
import { categories } from '../data/categories'
import useGetAllProducts from '../hooks/useGetAllProducts'
import { Product } from '../interfaces/Product'
const SideBar = () => {
  const { products, setProducts } = useGetAllProducts()
  const [mirrorProducts] = useState<Product[]>(products)

  const filterProductsByCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setProducts(mirrorProducts as Product[])

    if (e.target.checked) {
      const newProducts = products.filter((p) => p.category === e.target.name)
      setProducts(newProducts)
    }
  }
  return (
    <Stack
      minW={'250px'}
      minH={'300px'}
      maxH={'300px'}
      as={'aside'}
      align={'center'}
    >
      <Heading as={'h3'} size={'md'} mb={'1rem'}>
        Categorias
      </Heading>
      <Stack spacing={3} direction="column">
        <Checkbox
          defaultIsChecked
          colorScheme="green"
          onChange={(e) => filterProductsByCategory(e)}
          name="all"
        >
          Todas
        </Checkbox>
        {categories.map((category) => (
          <Checkbox
            key={category.id}
            onChange={(e) => filterProductsByCategory(e)}
            name={category.name}
            colorScheme="green"
          >
            {category.name}
          </Checkbox>
        ))}
      </Stack>
      <hr />
      <Heading as={'h3'} size={'md'} mb={'1rem'}>
        Cores
      </Heading>
      <Stack
        spacing={2}
        direction={'row'}
        maxW={'150px'}
        minW={'150px'}
        padding={'1'}
      >
        <Button
          bgColor={'pink'}
          _hover={{
            bgColor: 'pink.300'
          }}
        ></Button>
        <Button
          bgColor={'red'}
          _hover={{
            bgColor: 'red.300'
          }}
        ></Button>
        <Button
          bgColor={'gray'}
          _hover={{
            bgColor: 'gray.300'
          }}
        ></Button>
      </Stack>
      <hr />
      <Heading as={'h3'} size={'md'} mb={'1rem'}>
        Tamanho
      </Heading>
      <Stack spacing={3} direction="column">
        <Checkbox colorScheme="green" defaultIsChecked>
          Todos os tamanhos
        </Checkbox>
        <Checkbox colorScheme="green">SM</Checkbox>
        <Checkbox colorScheme="green">MD</Checkbox>
        <Checkbox colorScheme="green">LG</Checkbox>
      </Stack>
      <hr />
      <Heading as={'h3'} size={'md'} mb={'1rem'}>
        Preço
      </Heading>
      <Stack spacing={3} direction="column">
        <Checkbox colorScheme="green" defaultIsChecked>
          Todos os preços
        </Checkbox>
        <Checkbox colorScheme="green">R$10</Checkbox>
        <Checkbox colorScheme="green">R$30</Checkbox>
        <Checkbox colorScheme="green">R$50</Checkbox>
        <Checkbox colorScheme="green">R$70</Checkbox>
      </Stack>
    </Stack>
  )
}

export default SideBar
