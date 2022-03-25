import React from 'react'
import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider
} from '@chakra-ui/react'
import { useUser } from '../hooks/useUser'
import ButtonTheme from './ButtonTheme'
import { Link } from 'react-router-dom'

const MenuListAvatar = () => {
  const { logout } = useUser()
  return (
    <>
      <ButtonTheme />
      <Menu>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
        >
          <Avatar
            size={'sm'}
            src={
              '../src/assets/avatar.png'
            }
          />
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} to="/settings">
            Meus dados
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={logout}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export default MenuListAvatar
