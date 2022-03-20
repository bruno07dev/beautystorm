import React, { useState } from 'react'
import {
  Flex,
  FormControl,
  useToast,
  Input,
  FormLabel,
  Button
} from '@chakra-ui/react'

const INITIALFORM = {
  newPassword: '',
  currentPassword: '',
  repeatPassword: ''
}

const FormSettingsUserPassword = () => {
  const [form, setForm] = useState(INITIALFORM)
  const toast = useToast()
  const handleInputChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (
      form.newPassword === form.repeatPassword &&
      form.newPassword !== form.currentPassword
    ) {
      toast({
        title: 'Senha atualizada.',
        description: 'Atualizamos a sua senha.',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
    } else {
      toast({
        title: 'Erro ao atualizar a senha.',
        description: 'Não conseguimos atualizar a sua senha.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl w={'650px'} isRequired id="currentPassword">
        <FormLabel>Senha atual</FormLabel>
        <Input
          name="currentPassword"
          onChange={handleInputChange}
          type="password"
        />
      </FormControl>
      <Flex
        direction={{
          base: 'column',
          md: 'row'
        }}
      >
        <FormControl mr={'0.5rem'} w={'300px'} isRequired id="newPassword">
          <FormLabel>Nova senha</FormLabel>
          <Input
            name="newPassword"
            onChange={handleInputChange}
            type="password"
          />
        </FormControl>
        <FormControl mb={'1rem'} w={'300px'} isRequired id="repeatPassword">
          <FormLabel>Repetir nova senha</FormLabel>
          <Input
            name="repeatPassword"
            onChange={handleInputChange}
            type="password"
          />
        </FormControl>
      </Flex>
      <Button type="submit" mb={'1rem'} bgColor="green">
        Atualizar
      </Button>
    </form>
  )
}

export default FormSettingsUserPassword
