import React from 'react';
import {
  ColorModeScript,
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  theme,
} from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: JSX.Element;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript />

      <Flex direction="column" align="center" maxW={'100vw'} m="0 auto">
        <Header title={'React TypeScript Chakra Boilerplate'} />
        <Box minH={'100vh'}>{children}</Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
