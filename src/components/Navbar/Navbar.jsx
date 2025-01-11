import React, { useContext } from 'react'
import './Navbar.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch(event.target.value){
      case "usd":{
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
      case "eur":{
        setCurrency({name: "eur", symbol: "€"})
        break;
      }
      case "inr":{
        setCurrency({name: "inr", symbol: "₹"})
        break;
      }
        default : {
          setCurrency({name: "usd", symbol: "$"})
          break;
        }

    }
  }

  return (
    <div className='navbar flex items-center justify-between px-[20px] py-[2%] text-[#ddd] border-y-2 border-[#3c3c3c]'>
        <ul className='flex gap-16 list-none'>
           <Link to={`/`}><li className='m-auto'>Home</li></Link>
            <Link to={`/features`}>Features</Link>
            {/* <li>Pricing</li> */}
            <Link to={`/blog`}>Blog</Link>
        </ul>
        <div className="nav-right">
            <select className='p-1 border-2 border-white rounded-md bg-transparent text-white' onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
        </div>
      
    </div>
  )
}

export default Navbar
