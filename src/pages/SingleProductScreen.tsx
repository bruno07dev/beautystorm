import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetSingleProduct from '../hooks/useGetSingleProduct'
import {
  Stack,
  Heading,
  Text,
  Box,
  Image,
  Flex,
  Select,
  Link,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useToast
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useUser } from '../hooks/useUser'
import useCart from '../hooks/useCart'
import { Product } from '../interfaces/Product'
import { useGetProductsByCategory } from '../hooks/useGetProductsByCategory'
import GridProducts from '../components/GridProducts'
import RatingStart from '../components/RatingStart'
import LoadingScreen from '../components/LoadingScreen'
import AmountCounter from '../components/AmountCounter'
import ServerDownScreen from '../components/ServerDownScreen'
import ProductNotFound from '../components/ProductNotFound'

interface SingleProductInterface {
  id: string | undefined
}

const SingleProductScreen = () => {
  const { id } = useParams<SingleProductInterface>()
  const { product, loading, error } = useGetSingleProduct({ id })
  const { isLoggen } = useUser()
  const { setCartProducts } = useCart()
  const toast = useToast()
  const [amount, setAmount] = useState(0)

  const { products: productsCategory, loading: loadingProductsCategory } =
    useGetProductsByCategory({ category: product?.category })

  const hanldeAddProductToCart = ({ product }: { product: Product }) => {
    if (!isLoggen) {
      toast({
        title: 'Sign in',
        description: 'Olá! Para adicionar itens à lista de desejos e à sacola você precisa estar logado',
        status: 'warning',
        duration: 3000,
        isClosable: true
      })
      return
    }

    for (let index = 0; index < amount; index++) {
      setCartProducts((products) => [...products, product])
    }

    toast({
      title: 'Good Choice',
      description: `O item ${product.title} foi adicionado à sacola`,
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }

  if (error) return <ServerDownScreen />
  if (loading) return <LoadingScreen />
  if (!product) return <ProductNotFound />
  return (
    <Stack as={'section'} align={'center'}>
      <Stack
        maxW={'90vw'}
        flexDir={{
          base: 'column',
          md: 'row'
        }}
      >
        <Stack
          as={'article'}
          width={{
            base: '100%',
            md: '20%'
          }}
          spacing={1}
          padding={3}
        >
          <Image src={product.image} alt={product.title} loading="lazy" />
        </Stack>
        <Stack spacing={2} as={'article'} padding={3} width={'100%'}>
          <Heading as={'h3'} size={'lg'}>
            {product.title}
          </Heading>
          <Flex direction={'row'}>
            <Flex width={'70%'} justify={'flex-start'} align={'center'}>
              <Text>
                <b>${product.price}</b>
              </Text>
            </Flex>
            <RatingStart
              justify={'flex-end'}
              text={'Rating'}
              rating={product.rating.rate}
            />
          </Flex>
          <Text>
            {product.description}. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Saepe ad iusto fugiat quidem, doloremque culpa
            nisi, alias, cumque nulla hic perferendis similique perspiciatis
            eius mollitia voluptates doloribus repudiandae consequatur aliquam.
          </Text>
          <Flex mb={3} width={'100%'}>
            <Flex
              as={'article'}
              display={'flex'}
              justify={'flex-start'}
              align={'center'}
              width={'50%'}
            >
              <Text>
                <b> Category: </b>
                {product.category}.
              </Text>
            </Flex>
            <Flex
              as={'article'}
              display={'flex'}
              justify={'center'}
              align={'center'}
              width={'50%'}
            >
              <Link href={'#'}>
                <Text>Size Guide</Text>
              </Link>
            </Flex>
          </Flex>

          {/* Select Size */}
          <Box as={'section'} width={'50%'}>
            <Select placeholder="Size" variant="filled">
              <option value="option1">S</option>
              <option value="option2">M</option>
              <option value="option3">LG</option>
            </Select>
          </Box>
          {/* End Select Size */}

          {/* Select Colors */}

          {/* End Select Colors */}
          {/* Amount  */}
          <Stack
            minW={'100%'}
            direction={{
              base: 'column',
              md: 'row'
            }}
            align={'center'}
            justify={{
              base: 'center',
              md: 'flex-start'
            }}
            spacing={4}
          >
            <AmountCounter setAmount={setAmount} />

            <Button
              onClick={() => hanldeAddProductToCart({ product })}
              width={'xs'}
              colorScheme={'whatsapp'}
              size={'lg'}
            >
              Adicionar à sacola
            </Button>
            <Button width={'xs'} colorScheme={'teal'} size={'lg'}>
              Retirar na Loja
            </Button>
          </Stack>
          {/* End Amount  */}
          {/* Reviews & description */}
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Descrição</Tab>
              <Tab>Avaliações</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci cumque rem suscipit illum architecto vel dicta quasi
                  quam, sint, nesciunt, fugiat assumenda sapiente sit iure odit
                  autem? Debitis nobis veritatis nulla asperiores rerum eos
                  laborum nesciunt architecto dolorum excepturi, libero fugit,
                  ex possimus eius itaque iusto nam quis vero deleniti
                  blanditiis sapiente aliquam, obcaecati quae sint?
                  iusto reiciendis libero, hic sunt doloribus at.
                </Text>
              </TabPanel>
              <TabPanel>
                <Heading size={'md'}>2 Avaliações</Heading>
                <Stack mt={3}>
                  <Heading size={'sm'}>Pedro S. Delantis</Heading>
                  <Flex>
                    {Array(5)
                      .fill(0)
                      .map((star, idx) => (
                        <>
                          <StarIcon
                            color={
                              idx + 1 <= Math.ceil(3) ? 'teal.500' : 'gray.300'
                            }
                            key={star + idx}
                          />
                        </>
                      ))}
                  </Flex>
                  <Text>21 Março 2022</Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    similique quod, deserunt quam molestias voluptatum maxime
                    quo nostrum sequi at nulla atque ut architecto doloribus
                    temporibus, suscipit doloremque molestiae distinctio?
                    Dolores modi accusantium quia nobis sequi consequuntur
                    delectus ad aut iste eius saepe doloribus quis ipsam quasi
                    est, iure voluptatem.
                  </Text>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
          {/* End Reviews & description */}
          {/* Similar Products  */}
          <Stack as={'section'}>
            <Heading as={'h3'} size={'md'}>
              Produtos similares
            </Heading>

            {loadingProductsCategory
              ? (
                  'Carregando produtos...'
                )
              : (
              <GridProducts products={productsCategory.slice(0, 3)} />
                )}
          </Stack>
          {/* End Similar Products  */}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SingleProductScreen
