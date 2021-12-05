import { ColorModeSwitcher } from './ColorModeSwitcher';
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Logo } from './Logo';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { routes } from '../../routes';

// import { CloseIcon, MenuIcon } from '.../Icons';

type MenuItemProps = {
  children: JSX.Element | string;
  isLast?: boolean;
  to: string;
};

const MenuItems = (props: MenuItemProps) => {
  const { children, isLast, to = '/' } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={useColorModeValue('cyan.50', 'cyan.900')}
      // color={['white', 'black', 'primary.700', 'primary.700']}
      // {...props}
    >
      <Flex align="center">
        <Logo
          w="60px"
          color={['white', 'white', 'primary.500', 'primary.500']}
          mb={{ base: 8, sm: 0 }}
          mr={{ base: 0, sm: 8 }}
        />
        <Text fontSize="xl">{title}</Text>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          {routes.map(({ path, name }) => (
            <MenuItems key={name} to={path}>
              {name}
            </MenuItems>
          ))}

          <ColorModeSwitcher mb={{ base: 0, sm: 0 }} mr={{ base: 0, sm: 0 }} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
