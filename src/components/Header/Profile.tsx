import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box
        mr="4"
        textAlign="center"
      >
        <Text>Vinicius Freitas</Text>
        <Text color="gray.300" fontSize="small" >
          vini.freifrefreitas@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Vinicius Freitas" src="https://github.com/viniciusFreitas00.png" />
    </Flex>
  );
}
