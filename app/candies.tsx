import { useReadContract } from 'wagmi'
import { abi } from '../artifacts/contracts/Vending.sol/Vending.json';

export function Candies() {
  const { data: candies, error, isPending } = useReadContract({
    address: '0xDCF245b79597fE7936DCAB034bFa32a06073dF25',
    abi,
    functionName: 'candies'
  })

  

  if (isPending) return <div>Loading...</div> 

  if (error) 
    return ( 
      <div> 
        Error: { error.message} 
      </div> 
    )  

  return (
    <div>Candies: {candies.toString()}</div>
  )
}
