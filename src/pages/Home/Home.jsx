// import React from 'react'

// const Home = () => {
//   return (
//     <div className='flex flex-col items-center'>
//       <div className='text-2xl sm:text-6xl p-5'>Largest</div>      
//       <div className='text-2xl sm:text-6xl p-5'>Crypto Marketplace</div>
//       <form className='py-10 flex justify-between items-center gap-10'>
//         <input className='text-[16px] outline-none border-none pl-12' type="text" placeholder='Search Cryto...'/>
//         <button className='' type="submit">Search</button>
//       </form>
//     </div>
//   )
// }

// export default Home


import React, { useContext } from 'react';
import './Home.css'
import CoinContextProvider, { CoinContext } from '../../context/CoinContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

const {allCoin, currency} = useContext(CoinContext)
const [displayCoin, setDisplayCoin] = useState([])
const [input, setInput] = useState('')

const inputHandler = (event) => {
  setInput(event.target.value)
  if(event.target.value === ""){
    setDisplayCoin(allCoin)
  }

}

const searchHandler = async (event) => {
  event.preventDefault()
    const coins = await allCoin.filter((item) => {
    return item.name.toLowerCase().includes(input.toLowerCase())
  })
  setDisplayCoin(coins)
}

useEffect(() => {
  setDisplayCoin(allCoin)
},[allCoin])

  return (
    <>
    <div className='flex flex-col items-center'>
      <div className='text-2xl sm:text-6xl p-5'>Search</div>
      <div className='text-2xl sm:text-6xl p-5'>Crypto Marketplace</div>
      <form onSubmit={searchHandler} className='py-10 flex justify-center items-center'>
        <div className='relative'>
          <input onChange={inputHandler} list='coinlist' value={input}
            className='text-[16px] text-black outline-none border border-gray-300 pl-4 pr-16 py-2 rounded-lg'
            type='text'
            placeholder='Search Crypto...'
            required
          />

          <datalist id='coinlist'>
            {allCoin.map((item, index) => (<option key={index} value={item.name}/>))}
          </datalist>



          <button
            className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600'
            type='submit'>
            Search
          </button>
        </div>
      </form>
    </div>
    <div className="crypto-table max-w-[800px] m-auto ">
      <div className="table-layout">
        <p>#</p>
        <p>Coins</p>
        <p>Price</p>
        <p className='text-center'>24Hr Change</p>
        <p className='text-right'>Market Cap</p>

      </div>
      {displayCoin.slice(0,50).map((item, index) => (
        <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
          <p>{item.market_cap_rank}</p>     
          <div>
            <img src={item.image}/>
            <p>{item.name + "-" + item.symbol}</p>
          </div>  
          <p>{currency.symbol} {item.current_price.toLocaleString()}</p>  
          <p className={item.price_change_24h>0? "text-green-600" : "text-red-600"}>
            {Math.floor(item.price_change_24h*100)/100}</p>
          <p className='text-right'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
        </Link>
      ))}
    </div>
    </>
  );
};

export default Home;
