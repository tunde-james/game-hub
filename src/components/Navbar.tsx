import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src="/images/logo.webp" alt="game-hub logo" boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
