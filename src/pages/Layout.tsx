import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Box } from '@chakra-ui/react';

function Layout() {
  return (
    <div>
      <Navbar />
      <Box>
        <Outlet />
      </Box>
    </div>
  );
}

export default Layout;
