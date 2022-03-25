import React, { useState } from 'react'
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  Table,
  Tbody,
  Tfoot,
  Tr,
  Td,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { LISTSHIPPINGDETAILS } from '../data/shippingDetail'
import ModalAddAddress from '../components/ModalAddAddress'

const ShippingDetails = () => {
  const [details, setDetails] = useState(LISTSHIPPINGDETAILS)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleDeleteAddress = (id: number) => {
    const newListDeatils = details.filter((d) => d.id !== id)
    setDetails(newListDeatils)
  }
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Detalhes da entrega</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text>
              Gerencie seus endereços de entrega. Eles ficarão armazenados para utilização futura.
            </Text>
            <Table variant="simple">
              <Tbody>
                {details.map((d) => (
                  <Tr key={d.id}>
                    <Td>
                      <Text>{d.address}</Text>
                      <Text fontWeight="bold">{d.country}</Text>
                    </Td>
                    <Td>
                      <Button color={'white'} bgColor="blue.300" mr={2}>
                        Editar
                      </Button>
                      <Button
                        onClick={() => handleDeleteAddress(d.id)}
                        color={'white'}
                        bgColor="red"
                      >
                        Excluir
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td>
                    <Button onClick={onOpen} color={'white'} bg="#00a470" _hover={{
                      bg: '#f38992'
                    }}>
                      Adicionar novo endereço
                    </Button>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <ModalAddAddress
        isOpen={isOpen}
        onClose={onClose}
        details={details}
        setDetails={setDetails}
      />
    </>
  )
}

export default ShippingDetails
