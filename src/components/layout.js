/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
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
      {/* <Footer /> */}
    </React.Fragment>
  );
}
