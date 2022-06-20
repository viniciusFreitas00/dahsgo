import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="8" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Criação</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vinicius Freitas</Text>
                    <Text fontSize="sm" color="gray.300">vini.freirefreitas00@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vinicius Freitas</Text>
                    <Text fontSize="sm" color="gray.300">vini.freirefreitas00@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vinicius Freitas</Text>
                    <Text fontSize="sm" color="gray.300">vini.freirefreitas00@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
