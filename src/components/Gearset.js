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
              <div className="gearicon">
                <img
                  className="itemicon"
                  src={
                    gearset.armor.owned
                      ? '../images/vest.png'
                      : '../images/vest_no.png'
                  }
                  alt=""
                ></img>
              </div>
              <div className="checker">Owned!</div>
              <div className="gearname">{gearset.armor.name}</div>
            </Item>
            <Item key="mask" className={classNames('gearitem', classes)}>
              <div className="gearicon">
                <img
                  className="itemicon"
                  src={
                    gearset.mask.owned
                      ? '../images/mask.png'
                      : '../images/mask_no.png'
                  }
                  alt=""
                ></img>
              </div>
              <div className="checker">Owned!</div>
              <div className="gearname">{gearset.mask.name}</div>
            </Item>
            <Item key="kneepads" className={classNames('gearitem', classes)}>
              <div className="gearicon">
                <img
                  className="itemicon"
                  src={
                    gearset.kneepads.owned
                      ? '../images/pads.png'
                      : '../images/pads_no.png'
                  }
                  alt=""
                ></img>
              </div>
              <div className="checker">Owned!</div>
              <div className="gearname">{gearset.kneepads.name}</div>
            </Item>
            <Item key="pack" className={classNames('gearitem', classes)}>
              <div className="gearicon">
                <img
                  className="itemicon"
                  src={
                    gearset.pack.owned
                      ? '../images/pack.png'
                      : '../images/pack_no.png'
                  }
                  alt=""
                ></img>
              </div>
              <div className="checker">Owned!</div>
              <div className="gearname">{gearset.pack.name}</div>
            </Item>
            <Item key="gloves" className={classNames('gearitem', classes)}>
              <div className="gearicon">
                <img
                  className="itemicon"
                  src={
                    gearset.gloves.owned
                      ? '../images/gloves.png'
                      : '../images/gloves_no.png'
                  }
                  alt=""
                ></img>
              </div>
              <div className="checker">Owned!</div>
              <div className="gearname">{gearset.gloves.name}</div>
            </Item>
            <Item key="holster" className={classNames('gearitem', classes)}>
              <div className="gearicon">
                <img
                  className="itemicon"
                  src={
                    gearset.holster.owned
                      ? '../images/holster.png'
                      : '../images/holster_no.png'
                  }
                  alt=""
                ></img>
              </div>
              <div className="checker">Owned!</div>
              <div className="gearname">{gearset.holster.name}</div>
            </Item>
          </Items>
        </Container>
      ))}
    </>
  );
}
