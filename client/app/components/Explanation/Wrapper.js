import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: ${props => props.theme.main_white};
    color: ${props => props.theme.main_blue};
    text-align: center;
    width: 100%;
    padding: 10px;
`;

export default Wrapper;