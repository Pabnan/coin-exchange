import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
font-size: 2rem;
text-align:left;
padding: 1.5rem 0 1.5rem 5rem;
`;

class AccountBalance extends Component {
    render() {
        const buttonText= this.props.showBalance ? 'hide balance' : 'show balance';
        const balanceDisplay= this.props.showBalance ? <>Balance: $ {this.props.amount} </> :null;
        return (  
            <Section>
                    
                        {balanceDisplay}    
                    
                    
                      <button onClick= {this.props.handleShowBalance} > {buttonText}</button>
                                        
            </Section>
        ) ;   
    }       
}
export default AccountBalance;

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  };

  
