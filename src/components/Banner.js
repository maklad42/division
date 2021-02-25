import React from 'react';
import classNames from 'classnames';
import { Container, Logo, Title, Menu } from './styles/Banner';

export function Banner({ classes }) {
  return (
    <Container className={classNames('Container', classes)}>
      <h1>The Division: Gear Sets</h1>
    </Container>
  );
}
