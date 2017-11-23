import React from 'react';
import Img from '../../components/Img';
import styled from 'styled-components';
import { Link } from 'react-router';

const IssueBox = styled.div`
  background-colour: #ffffff;
  margin: 3rem;
  
  a {
    color: ${props => props.theme.main_white}
  }
  a:hover {
      color: #7fc6eb;
  }
  @media all and (max-width: 2000px) { /* screen size until 1200px */
    font-size: 2.5rem;
    img {
      height: 26rem ;
    }
  }
  @media all and (max-width: 1000px) { /* screen size until 1000px */
    font-size: 2.5rem;
    img {
      height: 20rem;
    }
  }
  @media all and (max-width: 750px) { /* screen size until 500px */
    font-size: 1.7rem;
    img {
      height: 15rem;
      margin: 0;
    }
  }
`;

function IssueCard(props) {
  return (
    <div className='col-sm-12 col-md-6 col-lg-4'>
        <IssueBox>
        <Link to={"/issues/" + props.issue._id}>
            <Img src={props.issue.webImage} alt={props.issue.title} className='social_image' />
            <p>{props.issue.title}</p>
        </Link>
        </IssueBox>
    </div>
  );
}

export default IssueCard;
