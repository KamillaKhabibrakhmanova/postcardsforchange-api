import React from 'react';
import Img from 'components/Img';
import styled from 'styled-components';
import { Control, Form, actions } from 'react-redux-form';

const RepCardBox = styled.div`
  margin: 1rem auto;
  text-align: left;
  height: 12rem;

  .circle-img {
    overflow: hidden;
    top: 0;
    left: 0;
    height:7rem;
    border-radius: 50%;
    margin: 1rem;
    display:inline;
    float:left;
  }

  @media all and (max-width: 750px) { /* screen size until 1200px */
    .circle-img {
      height: 5rem;
    }
  }

  .rep-info {
    display: inline;
    line-height: 0.1rem;
    float: left;
  }
`;

export class RepCard extends React.PureComponent {

  render() {

    const rep = this.props.representative;
    const address = rep.address[0];

    return (
      <div>
      <RepCardBox>
        
        <label htmlFor={rep.channels[0].id}>
            
          <Img className='circle-img' src={rep.photoUrl} alt={rep.name} />
          <div className='rep-info'>
            <p>{`${rep.name},`}</p>
            <p>{`${address.line1}, ${address.city}, ${address.state}, ${address.zip}`}</p>
          </div>
        </label>
      </RepCardBox>
      </div>
    )
  }
}

export default RepCard;