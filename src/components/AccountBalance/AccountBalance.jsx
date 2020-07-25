import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
font-size: 2rem;
text-align:left;
padding: 1.5rem 0 1.5rem 5rem;
`;

export default function AccountBalance (props)  {
    
        const buttonText=     props.showBalance ? 'hide balance' : 'show balance';
        const balanceDisplay= props.showBalance ? <>Balance: $ {props.amount} </> :null;

        return (  
            <Section>
                    
                        {balanceDisplay}    
                    
                    
                      <button onClick= {props.handleShowBalance} > {buttonText}</button>
                                        
            </Section>
        ) ;   
          
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  };

  
