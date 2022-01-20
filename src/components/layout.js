/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Header from './header/header';
export default function Layout({ children , logoName }) {
  return (
    <React.Fragment>
      <Header logoName={logoName}/>
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
    </React.Fragment>
  );
}
