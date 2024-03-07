import React, { useState } from 'react'
import DiceGame from './DiceGame';

const LandingPage = () => {
    const [dicePage,setDicePage] = useState(false);
  return (
    <div className='container mx-auto h-screen  flex flex-wrap items-center justify-around gap-20'>
       {!dicePage ? (
        <>
         <div>
            <img src="/img/dices 1.png" alt="" />
        </div>
        <div>
            <h1 className='text-8xl font-bold'>DICE GAME</h1>
            <div className='flex items-center justify-start md:justify-end mt-4'>

            <button className='bg-black text-white text-2xl px-3 py-2 rounded w-48 h-12' onClick={()=>setDicePage(true)}>Play Now</button>
            </div>

        </div>
        </>
       ):
        <DiceGame />
       }
    </div>
  )
}

export default LandingPage