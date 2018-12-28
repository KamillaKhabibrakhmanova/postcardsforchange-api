import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-top: 1px solid ${props => props.theme.main_white};
  background-color: ${props => props.theme.main_red};
  color: ${props => props.theme.main_white};
  a {
    color: ${props => props.theme.democrat_blue};
  }
`;

export default Wrapper;
