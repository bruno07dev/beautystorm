import React, { ReactNode } from 'react'
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Logo = (props: any) => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Image src='logo.svg'></Image>
    </svg>
  )
}

const SocialButton = ({
  children,
  label,
  href
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}
const LINKS_FOOTER = [
  {
    id: 1,
    title: 'Sobre nós',
    links: [
      {
        id: 1,
        name: 'Quem somos',
        href: '#'
      },
      {
        id: 2,
        name: 'Grupo BeautyStorm',
        href: '#'
      },
      {
        id: 3,
        name: 'Seja um revendedor',
        href: '#'
      },
      {
        id: 4,
        name: 'Seja um franqueado',
        href: '#'
      }
    ]
  },
  {
    id: 2,
    title: 'Departamentos',
    links: [
      {
        id: 1,
        name: 'Perfumaria',
        href: '#'
      },
      {
        id: 2,
        name: 'Maquiagem',
        href: '#'
      },
      {
        id: 3,
        name: 'Cabelos',
        href: '#'
      },
      {
        id: 4,
        name: 'Corpo',
        href: '#'
      }
    ]
  },
  {
    id: 3,
    title: 'Dúvidas',
    links: [
      {
        id: 1,
        name: 'Perguntas frequentes',
        href: '#'
      },
      {
        id: 2,
        name: 'Formas de pagamento',
        href: '#'
      },
      {
        id: 3,
        name: 'Frete e entrega',
        href: '#'
      },
      {
        id: 4,
        name: 'Mapa do site',
        href: '#'
      }
    ]
  },
  {
    id: '4',
    title: 'Relacionamento',
    links: [
      {
        id: 1,
        name: 'Compras via Whatsapp',
        href: '#'
      },
      {
        id: 2,
        name: 'Compra e retirada em loja',
        href: '#'
      },
      {
        id: 3,
        name: 'Garantia',
        href: '#'
      }
    ]
  }
]
export default function LargeWithNewsletter() {
  return (
    <Box
      as={'footer'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© 2020. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          {LINKS_FOOTER.map((link) => (
            <Stack align={'flex-start'} key={link.id}>
              <ListHeader>{link.title}</ListHeader>
              {link.links.map((l) => (
                <Link key={l.id} href={l.href}>
                  {l.name}
                </Link>
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
