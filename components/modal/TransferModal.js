import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Transfer from './Transfer'
import CoinSelector from './coinSelector'
import { TailSpin } from 'react-loader-spinner'
import Receive from './Receive'


const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress
}) => {
    const [action, setAction] = useState('send')
    const [selectedToken, setSelectedToken] = useState(sanityTokens[0])




    const selectedStyle = {
        color: '#3773f5',
    }

    const unselectedStyle = {
        border: '1px solid #282b2f',
    }

    const selectedModal = option => {
        switch (option) {
            case 'send':
                return <Transfer
                    selectedToken={selectedToken}
                    setAction={setAction}
                    thirdWebTokens={thirdWebTokens}
                    walletAddress={walletAddress}
                />
            case 'receive':
                return (
                    <Receive
                        setAction={setAction}
                        selectedToken={selectedToken}
                        walletAddress={walletAddress}
                    />
                )
            case 'select':
                return <CoinSelector
                    setAction={setAction}
                    selectedToken={selectedToken}
                    setSelectedToken={setSelectedToken}
                    sanityTokens={sanityTokens}
                    thirdWebTokens={thirdWebTokens}
                    walletAddress={walletAddress}
                />
            case 'transferring':
                return (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.5rem',

                    }}>
                        <h2 style={{ color: '#964b00 ' }}>transferring...</h2>
                        <TailSpin
                            height='100'
                            width='100'
                            color='#964b00 '
                            ariaLabel='loading'
                        />

                    </div>
                )
            case 'transferred':
                return (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.5rem',

                    }}><h2 style={{ color: 'green' }}>Transfer Complete</h2></div>
                )
            default:
                return <h2>send</h2>
        }
    }

    return (
        <Wrapper>
            <Selector>
                <Option style={action === 'send' ? selectedStyle : unselectedStyle} onClick={() => setAction('send')}>
                    <p style={{ color: '#964b00 ' }}>send</p>
                </Option>
                <Option style={action === 'receive' ? selectedStyle : unselectedStyle} onClick={() => setAction('receive')}>
                    <p style={{ color: '#964b00 ' }}>receive</p>
                </Option>
            </Selector >
            <ModalMain>
                {selectedModal(action)}
            </ModalMain>
        </Wrapper >
    )
}

export default TransferModal

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #50bcdf ;
  }
`

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`