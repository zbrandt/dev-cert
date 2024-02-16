import * as React from 'react'
import { useWriteContract } from 'wagmi' 
import { abi } from '../artifacts/contracts/Vending.sol/Vending.json'; 

export function Take() {
    const { data: hash, writeContract } = useWriteContract();

    async function takeOne() {
        writeContract({ 
            address: '0xDCF245b79597fE7936DCAB034bFa32a06073dF25', 
            abi, 
            functionName: 'takeOne'
          });
    }

  return (
    
   
      <button onClick={() => takeOne()} type="submit">Take</button>
   
  )
}