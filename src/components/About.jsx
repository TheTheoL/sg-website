import React from 'react';
import styled from 'styled-components';
import profile from '../images/sg-fillin.jpg';

export const About = () => {
    return (
        <StyledSections>
            <div className='intro-text'>
                <h2>Thirty-five years in the classroom</h2>
                <h2>now focused on research</h2>
                <h2>and writing.</h2>
            </div>
            <div className="profile-pic">
                <img src={profile} alt="old man" />
            </div>
        </StyledSections>
    )
}



const StyledSections = styled.div`
    height: calc(90vh - 70px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;

    .profile-pic {
        
     
        img {
            width: 600px;
            height: 600px;
            border-radius: 50%;
        }
    }
`;