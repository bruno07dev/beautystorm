import * as React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useUser } from '../hooks/useUser'
import { useHistory } from 'react-router'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image
} from '@chakra-ui/react'

const LoginScreen = () => {
  const { login, isLoggen, loading } = useUser()
  const history = useHistory()
  React.useEffect(() => {
    if (isLoggen) {
      setTimeout(() => {
        history.push({
          pathname: '/'
        })
      }, 200)
    }
  }, [isLoggen])
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Acessar minha conta</Heading>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
              username: Yup.string()
                .email('Email inválido')
                .required('Email obrigatório'),
              password: Yup.string()
                .min(8, 'Senha inválida. Mínimo 8 caracteres')
                .required('Senha obrigatória')
            })}
            onSubmit={({ username, password }, actions) => {
              login({ username, password })
              actions.setSubmitting(false)
            }}
          >
            <Form>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  as={Field}
                  type="email"
                  placeholder="Digite seu email"
                  autoComplete="off"
                  name="username"
                />
                <ErrorMessage component="section" name="username" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input
                  as={Field}
                  type="password"
                  placeholder="Digite sua senha"
                  name="password"
                />
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                ></Stack>
                <Button
                  disabled={loading}
                  type={'submit'}
                  colorScheme={'blue'}
                  variant={'solid'}
                >
                  {loading ? 'Carregando...' : 'Entrar'}
                </Button>
              </Stack>
            </Form>
          </Formik>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}

export default LoginScreen
