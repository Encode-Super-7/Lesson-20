import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
//import { ETH_CHAINS, SITE_NAME } from 'utils/config'
import { useColorMode } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { mainnet, sepolia, polygon, optimism, arbitrum } from '@wagmi/chains'


const ETH_CHAINS = [mainnet, sepolia, polygon, optimism, arbitrum]

interface Props {
  children: ReactNode
}

const { provider, webSocketProvider } = configureChains(ETH_CHAINS, [publicProvider()])

const client = createClient(
  getDefaultClient({
    appName: "Lottery",
    autoConnect: true,
    chains: ETH_CHAINS,
    provider,
    webSocketProvider,
  })
)

export function Web3Provider(props: Props) {
  const { colorMode } = useColorMode()

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider mode={colorMode}>{props.children}</ConnectKitProvider>
    </WagmiConfig>
  )
}