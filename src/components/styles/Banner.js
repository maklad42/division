import styled from 'styled-components';

export const Container = styled.header`
  height: 150px;
  border-bottom: solid 2px #11ff11;
  background-color: #3f3f3f;
  background-image: url('../images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  .title {
    position: relative;
    line-height: 150px;
    font-size: 4rem;
    color: #ee7433;
    text-shadow: 2px 2px 2px #686059;
  }
`;
