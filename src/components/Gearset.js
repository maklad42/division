import React from 'react';
import classNames from 'classnames';
import { Container, Title, Item, Check } from './styles/Gearset';

export function Gearset({ classes }) {
  return (
    <Container className={classNames('gearset', classes)}>
      Here be dragons!
    </Container>
  );
}
