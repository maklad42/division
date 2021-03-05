import React from 'react';
import classNames from 'classnames';
import sets from '../assets/gearsets.json';
import { Container, Title, Items, Item, Check } from './styles/Gearset';

export function Gearset({ classes }) {
  // const gear = sets.gearsets;
  // console.log(gear);

  return (
    <>
      {sets.gearsets.map((gearset) => (
        <Container className={classNames('gearset', classes)}>
          <Title key={gearset.id}>{gearset.name}</Title>
          <Items>
            <Item key="armor" className={classNames('gearitem', classes)}>
              <img src="../public/images/vest.png" alt=""></img>
              {gearset.armor.name}
            </Item>
            <Item key="mask" className={classNames('gearitem', classes)}>
              {gearset.mask.name}
            </Item>
            <Item key="kneepads" className={classNames('gearitem', classes)}>
              {gearset.kneepads.name}
            </Item>
            <Item key="pack" className={classNames('gearitem', classes)}>
              {gearset.pack.name}
            </Item>
            <Item key="gloves" className={classNames('gearitem', classes)}>
              {gearset.gloves.name}
            </Item>
            <Item key="holster" className={classNames('gearitem', classes)}>
              {gearset.holster.name}
            </Item>
          </Items>
        </Container>
      ))}
    </>
  );
}
