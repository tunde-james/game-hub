import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function Navbar() {
  return (
    <HStack padding="10px">
      <Image src="/images/logo.webp" alt="game-hub logo" boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
