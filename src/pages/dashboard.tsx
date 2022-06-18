import { Flex } from '@chakra-ui/react';

import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} marginX="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  )
}
