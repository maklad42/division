import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 90%;
  position: relative;
  color: #11dd11;
`;

export const Title = styled.div`
  background-color: rgba(200, 200, 200, 0.1);
  color: #dddddd;
  text-shadow: 2px 2px 4px #222222;
  font-size: 1.7rem;
  padding: 0.2rem;
  border-bottom: solid 3px green;
`;

export const Items = styled.div`
  border-top: solid 1px #787878;
`;

export const Item = styled.div`
  background-color: rgba(70, 102, 73, 0.2);
  margin: 7px 0;
  color: #bbc4bc;
  height: 2rem;
  overflow: hidden;

  div.gearicon {
    position: relative;
    float: left;
    width: 3rem;
    padding: 0 0.5rem;
  }

  div.checker {
    position: relative;
    float: right;
    width: 10px;
    padding-left: 10px;
    background-color: #3b573b;
    line-height: 2rem;
    overflow: hidden;
    font-size: 0.8rem;
  }

  div.checker:hover {
    width: 80px;
    transition: width 0.2s ease-in;
  }

  div.gearname {
    padding-left: 15px;
    line-height: 2rem;
    text-align: left;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const Check = styled.div``;
