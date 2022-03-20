import React from 'react'
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  Link
} from '@chakra-ui/react'
import FormSettingsUser from '../components/FormSettingsUser'
import FormSettingsUserPassword from '../components/FormSettingsUserPassword'

const ProfileScreen = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Dados pessoais</Tab>
        <Tab>Alterar senha</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Text>
            Atualize seus dados quando achar necessário
          </Text>
          <FormSettingsUser />
          <Text>
            Na BeautyStorm, atribuímos grande importância às questões de privacidade e estamos
            comprometidos em proteger os dados pessoais de nosso usuário. Saiba mais
            sobre como cuidamos e usamos seus dados pessoais {' '}
            <Text as={Link} color="green">
              Privacy Policy
            </Text>
          </Text>
        </TabPanel>
        <TabPanel>
          <Text>
            Alteração de senha: seu email atual é
            email@example.com
          </Text>
          <FormSettingsUserPassword />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default ProfileScreen
