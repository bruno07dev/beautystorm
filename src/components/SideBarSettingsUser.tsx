import React from 'react'
import { Stack, Heading, List, ListItem } from '@chakra-ui/react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
const SideBarSettingsUser = () => {
  const { url } = useRouteMatch()
  const { logout } = useUser()
  return (
    <Stack
      spacing={4}
      w={{
        base: '100%',
        md: '20%'
      }}
      direction={'column'}
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading>Minha conta</Heading>
      <Heading size="md">Meus dados</Heading>
      <List>
        <ListItem>
          <Link to={url}>Meu perfil</Link>
        </ListItem>
        <ListItem>
          <Link to={`${url}/shipping-details`}>Detalhes de envio</Link>
        </ListItem>
      </List>
      <Heading size="md">Meu pedido</Heading>
      <List>
        <ListItem>
          <Link to={`${url}/order-history`}>Histórico de pedidos</Link>
        </ListItem>
        <ListItem cursor="pointer" onClick={logout}>Sair</ListItem>
      </List>
    </Stack>
  )
}

export default SideBarSettingsUser
