import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'
import LineChart from '../../components/LineChart/LineChart'

function Coin() {

const {coinId} = useParams() 
const [coinData, setCoinData] = useState()
const [historicalData, setHistoricalData] = useState()
const {currency} = useContext(CoinContext)

const fetxhCoinData = async ()=>{
  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-u4fzxYNNBpdFbZAmigufFs8P'}
  };
  
  fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
    .then(res => res.json())
    .then(res => setCoinData(res))
    .catch(err => console.error(err));

}

const fetchHistoricalData = async ()=>{
  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-u4fzxYNNBpdFbZAmigufFs8P'}
  };
  
  fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
    .then(res => res.json())
    .then(res => setHistoricalData(res))
    .catch(err => console.error(err));
}

useEffect(()=>{
  fetxhCoinData()
  fetchHistoricalData()
},[currency, coinId])


if(coinData, historicalData){
  return (
    <div>
      <div className="coin px-0 py-20">
        <div className="coinName flex flex-col items-center gap-20 mx-100 my-auto mb-[50px]">
          <img className='max-w-[100px]' src={coinData?.image?.large} alt="" />
          <p className='text-5xl font-medium'>{coinData?.name} {coinData?.symbol.toUpperCase()}</p>
        </div>
        <div className="coinChart max-w-[700px] h-[250px] m-auto mb-10">
          <LineChart historicalData={historicalData}/>
        </div>
        <div className="coinInfo max-w-[700px] mx-auto my-auto flex flex-col">
          <ul className='flex justify-between px-10 py-0'>
            <li>Crypto Market</li>
            <li>{coinData?.market_cap_rank}</li>
          </ul>
          <ul className='flex justify-between px-10 py-0'>
            <li>Current Price</li>
            <li>{currency?.symbol} {coinData?.market_data?.current_price[currency?.name].toLocaleString()}</li>
          </ul>
          <ul className='flex justify-between px-10 py-0'>
            <li>Market Cap</li>
            <li>{currency?.symbol} {coinData?.market_data?.market_cap[currency?.name].toLocaleString()}</li>
          </ul>
          <ul className='flex justify-between px-10 py-0'>
            <li>24 Hr High</li>
            <li>{currency?.symbol} {coinData?.market_data?.high_24h[currency?.name].toLocaleString()}</li>
          </ul>
          <ul className='flex justify-between px-10 py-0'>
            <li>24 Hr Low</li>
            <li>{currency?.symbol} {coinData?.market_data?.low_24h[currency?.name].toLocaleString()}</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
else{
  return (
    <div>
      <div className="spinner">
        <div className="spin"></div>
        </div>
    </div>
  )
}

}

export default Coin
