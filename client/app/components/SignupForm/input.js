import styled from 'styled-components';

const Input = styled.input`
  border: 3px solid ${props => props.theme.main_turqouise};
  background-color: #ffffff;
  margin: auto;
  padding: auto;
  width: 30rem;
  @media all and (max-width: 1000px) { /* screen size until 500px */
    width: 20rem;
  }

  @media all and (max-width: 750px) { /* screen size until 500px */
    width: 15rem;
  }
`;

export default Input;
