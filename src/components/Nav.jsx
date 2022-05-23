import React from 'react';
import styled from 'styled-components';


export const Nav = () => {
    return (
        <StyledNav>
            <h1 className='logo'>Susan Gabrial</h1>
            <ul>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Career</a>
                </li>
                <li>
                    <a>Work</a>
                </li>
            </ul>
        </StyledNav>
    )
}


const StyledNav = styled.div`
    min-height: 7vh;
    background-color: #219F94;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding: 0 10rem;
    position: sticky;
    top: 0;
    z-index: 10;

    .logo {
        font-family: 'Playfair Display', serif;
        color: white;
    }

    a {
        color:  white;
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            opacity: 50%;
        }
       
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 10rem;
        position: relative;
        
    }
`;