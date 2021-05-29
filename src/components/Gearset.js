import React from 'react';
import classNames from 'classnames';
import { Container, Title, Items, Item, Check } from './styles/Gearset';

export function Gearset({ gearsets }, { classes }) {
  const gear = gearsets;

  return (
    <>
      {gear.gearsets.map((gearset) => (
        <Container className={classNames('gearset', classes)}>
          <Title key={gearset.id}>{gearset.name}</Title>
          <Items>
            <Item
              key={`armor-${gearset.id}`}
              className={classNames('gearitem', classes)}
            >
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
              <div className="checker">
                {gearset.armor.owned ? 'Owned!' : 'Still looking'}
              </div>
              <div className="gearname">{gearset.armor.name}</div>
            </Item>
            <Item
              key={`mask-${gearset.id}`}
              className={classNames('gearitem', classes)}
            >
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
              <div className="checker">
                {gearset.mask.owned ? 'Owned!' : 'Still looking'}
              </div>
              <div className="gearname">{gearset.mask.name}</div>
            </Item>
            <Item
              key={`kneepads-${gearset.id}`}
              className={classNames('gearitem', classes)}
            >
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
              <div className="checker">
                {gearset.kneepads.owned ? 'Owned!' : 'Still looking'}
              </div>
              <div className="gearname">{gearset.kneepads.name}</div>
            </Item>
            <Item
              key={`pack-${gearset.id}`}
              className={classNames('gearitem', classes)}
            >
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
              <div className="checker">
                {gearset.pack.owned ? 'Owned!' : 'Still looking'}
              </div>
              <div className="gearname">{gearset.pack.name}</div>
            </Item>
            <Item
              key={`gloves-${gearset.id}`}
              className={classNames('gearitem', classes)}
            >
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
              <div className="checker">
                {gearset.gloves.owned ? 'Owned!' : 'Still looking'}
              </div>
              <div className="gearname">{gearset.gloves.name}</div>
            </Item>
            <Item
              key={`holster-${gearset.id}`}
              className={classNames('gearitem', classes)}
            >
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
              <div className="checker">
                {gearset.holster.owned ? 'Owned!' : 'Still looking'}
              </div>
              <div className="gearname">{gearset.holster.name}</div>
            </Item>
          </Items>
        </Container>
      ))}
    </>
  );
}
