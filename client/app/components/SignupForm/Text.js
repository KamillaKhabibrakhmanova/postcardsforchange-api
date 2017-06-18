import styled from 'styled-components';

const Text = styled.div`
  margin: auto;
  padding: auto;
  width: 50%;
  color: #ffffff;
  padding: 5%;
  text-align: center;
  font-size: 2rem;
  @media all and (max-width: 1000px) { /* screen size until 1000px */
    padding: 0;
    margin: -2rem auto 2rem auto;
    width: 100%;
  }
`;

export default Text;
