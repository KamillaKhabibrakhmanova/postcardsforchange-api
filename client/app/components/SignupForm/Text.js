import styled from 'styled-components';

const Text = styled.div`
  margin: auto;
  padding: auto;
  width: 50%;
  color: #ffffff;
  padding: 5%;
  text-align: center;
  font-size: 2rem;
  @media all and (max-width: 1000px) {
    padding: 2%;
    margin: -2rem auto 0rem auto;
    width: 100%;
    font-size: 2rem;
  }
  @media all and (max-width: 600px) {
    padding: 2%;
    margin: -2rem auto 0rem auto;
    width: 100%;
    font-size: 1.7rem;
  }
  @media all and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export default Text;
