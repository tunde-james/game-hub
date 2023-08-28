import { HStack, Image, Text } from '@chakra-ui/react';

function Navbar() {
  return (
    <HStack>
      <Image src="/images/logo.webp" alt="game-hub logo" boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
}

export default Navbar;
