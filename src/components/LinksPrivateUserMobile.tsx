import React from 'react'
import {
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Link,
  useDisclosure
} from '@chakra-ui/react'
import { Link as LinkDom } from 'react-router-dom'
import ListCartComponent from './ListCartComponent'

const LinksPrivateUserMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Stack spacing={4}>
        <Flex
          py={2}
          as={LinkDom}
          to={'/wishlist'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none'
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            Lista de desejos
          </Text>
        </Flex>
      </Stack>
      <Stack spacing={4}>
        <Flex
          py={2}
          as={Link}
          to={'#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none'
          }}
          onClick={onOpen}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            Sacola
          </Text>
        </Flex>
      </Stack>
      <ListCartComponent isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default LinksPrivateUserMobile
