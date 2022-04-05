import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { ethers } from 'ethers'
import { ThirdwebSDK } from '@3rdweb/sdk'

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      'https://rinkeby.infura.io/v3/8c5e1eb2213149a48c9b934622c2f2e6'
    )
  )
)

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([])
  const [thirdWebTokens, setThirdWebTokens] = useState([])
  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {

      const coins = await fetch(
        "https://byuvuopa.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%0A%7B%20name%2C%20%0A%20usdPrice%2C%0A%20contractAddress%2C%0A%20symbol%2C%0A%20logo%2C%0A%7D%0A"
      )
      const sanityTokens = (await coins.json()).result
      setSanityTokens(sanityTokens)

      setThirdWebTokens(
        sanityTokens.map(token => sdk.getTokenModule(token.contractAddress)))
    }

    return getSanityAndThirdWebTokens()
  }, [])
  // console.log('Sanity', sanityTokens)
  // console.log('Thirdweb', thirdWebTokens)

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens} />
        <Main
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens} />
      </MainContainer>

    </Wrapper>
  )


}

export default Dashboard

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #50bcdf;
  color: #964b00 ;
`

const MainContainer = styled.div`
  flex: 1;
`