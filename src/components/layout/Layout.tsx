import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';

type LayoutProps = {
  children: JSX.Element;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <ColorModeScript />
      <p>Header</p>
      <p>Footer</p>
    </div>
  );
}
