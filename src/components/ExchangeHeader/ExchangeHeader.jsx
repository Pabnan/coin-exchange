import React, { Component } from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components'

const Img= styled.img`
height: 8rem;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
         {
          animation: App-logo-spin infinite 20s linear;
        }
      }
      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }   
`;
 const AppHeader= styled.header`
 background-color: #282c34;
 min-height: 20vh;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 color: white;
 `;

 const H1= styled.h1`
 font-size: 4rem;
 `;

class ExchangeHeader extends Component {
    render() {
        return (
            <AppHeader>
            <Img src={logo}  alt="logo" />
              <H1 >
                Coin Exchange
              </H1> 
            </AppHeader>          
        );
    }
}
export default ExchangeHeader;