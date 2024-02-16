"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'

import { Account } from './account';
import { Wallets } from './wallets';
import { Candies } from './candies';
import { Take } from './take';

const queryClient = new QueryClient();

export default function Home() {

  function ConnectWallet() { 
    const { isConnected } = useAccount() 
    if (isConnected) return <Account /> 
    return <Wallets /> 
  } 

  return (
	<WagmiProvider config={config}>
      		<QueryClientProvider client={queryClient}> 
      			<ConnectWallet />
			      <Candies />
            <Take />
      		</QueryClientProvider> 
    	</WagmiProvider>

  );
}
