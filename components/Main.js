import React from 'react'
import Portfolio from './Portfolio'
import styled from 'styled-components'
import Promos from './Promos'

const Main = ({ thirdWebTokens, sanityTokens, walletAddress }) => {
    return (
        <Wrapper>
            <Portfolio
                walletAddress={walletAddress}
                sanityTokens={sanityTokens}
                thirdWebTokens={thirdWebTokens} />
            <Promos />
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  
  max-height: 840px;
  overflow: hidden;
  overflow-y: scroll;
  ::webkit-scrollbar {
      display: none;
  }

  & div {
    
    
  }
`