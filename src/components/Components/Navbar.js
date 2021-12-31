import React from 'react';
import { Menu } from 'semantic-ui-react';

function Navbar() {
  return (
    <Menu
      inverted
      size='huge'>
      <Menu.Item header>Nuestros Clientes</Menu.Item>
    </Menu>
  )
}

export { Navbar };