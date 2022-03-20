import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

const ModalAddAddress = ({ isOpen, onClose, details, setDetails }: any) => {
  const [newAddress, setNewAddress] = useState({})
  const handleSubmit = (e: any) => {
    e.preventDefault()

    setDetails([...details, newAddress])
    onClose()
  }
  const handleInputChange = (e: any) => {
    setNewAddress({
      ...newAddress,
      id: Date.now(),
      [e.target.name]: e.target.value
    })
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit}>
        <ModalHeader>Novo endereço</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired id="address">
            <FormLabel>Endereço</FormLabel>
            <Input
              onChange={handleInputChange}
              autoComplete="off"
              type="text"
              name="address"
            />
          </FormControl>
          <FormControl isRequired id="country">
            <FormLabel>País</FormLabel>
            <Input
              onChange={handleInputChange}
              autoComplete="off"
              name="country"
              type="text"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Fechar
          </Button>
          <Button type="submit">Salvar endereço</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalAddAddress
