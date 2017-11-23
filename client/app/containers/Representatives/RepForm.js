import styled from 'styled-components';

const RepForm = styled.section`
.rep-border {
    border: 2px solid red;
    margin-bottom: 2rem;
  }

  text-align: left;

  p {
    line-height: 1.5rem;
    font-size: 1.5rem;
  }

  li {
    overflow: hidden;
  }

  input {
    top: 5rem;
  }

  label {
    margin: 0 auto;
    margin-top: -2rem;
    width: 100%;
  }

  .rep-box {
    a {
      color: #ffffff;
    }

    .rep_content {
      margin-bottom: 2rem;
      margin-right: 2rem;
    }
  }

  .rep_address {
    font-size: 1.2rem;
    font-weight: 300;
  }

  .paypal-btn {
    font-size: 20px;
    margin-left: 5rem;
  }

  .democratic {
    background-color:  ${props => props.theme.democrat_blue};
  }

  .republican {
    background-color: ${props => props.theme.republican_red};
  }

  .independent {
    background-color: ${props => props.theme.independent_teal};
  }
`;

export default RepForm;
