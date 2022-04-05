import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import React from 'react'
import { render } from 'react-dom'


const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp