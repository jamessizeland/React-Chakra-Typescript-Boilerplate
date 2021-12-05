import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';

export const TestPage = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="50vh" p={3}>
      <VStack spacing={8}>
        <Text>Debug Page</Text>
      </VStack>
    </Grid>
  </Box>
);
