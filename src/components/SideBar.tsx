import React, { ChangeEvent, useState } from 'react'
import { Stack, Heading, Checkbox } from '@chakra-ui/react'
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
        Fragrância
      </Heading>
      <Stack spacing={3} direction="column">
        <Checkbox colorScheme="green" defaultIsChecked>
          Todas as fragrâncias
        </Checkbox>
        <Checkbox colorScheme="green">Cítrico</Checkbox>
        <Checkbox colorScheme="green">Floral</Checkbox>
        <Checkbox colorScheme="green">Amadeirado</Checkbox>
        <Checkbox colorScheme="green">Frutal</Checkbox>
        <Checkbox colorScheme="green">Oriental</Checkbox>
      </Stack>
      <hr />
      <Heading as={'h3'} size={'md'} mb={'1rem'}>
        Preço
      </Heading>
      <Stack spacing={3} direction="column">
        <Checkbox colorScheme="green" defaultIsChecked>
          Todos os preços
        </Checkbox>
        <Checkbox colorScheme="green">Até R$49,00</Checkbox>
        <Checkbox colorScheme="green">R$49,00 a R$99,00</Checkbox>
        <Checkbox colorScheme="green">R$99,00 a R$149,00</Checkbox>
        <Checkbox colorScheme="green">R$149,00 a R$199,00</Checkbox>
        <Checkbox colorScheme="green">Acima de R$199,00</Checkbox>
      </Stack>
    </Stack>
  )
}

export default SideBar
