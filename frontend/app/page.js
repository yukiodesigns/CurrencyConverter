'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  //Initialization of states
  const [currencies, setCurrencies] = useState([])
  const [fromCurrency, setFromCurrency] = useState('')
  const [toCurrency, setToCurrency] = useState('')
  const [amount, setAmount] = useState('')
  const [converted, setConverted] = useState(null)

  //Fetching the currencies
  useEffect(()=>{
    axios.get('http://localhost:8000/api/currencies/')
    .then(response => setCurrencies(response.data))
    .catch(error => console.log('Error fetching currencies: ', error))
  },[])

  //Functionality to convert currency
  const convertCurrency =()=>{
    axios.get(`http://localhost:8000/api/convert/${fromCurrency}/${toCurrency}/${amount}`)
    .then(response => setConverted(response.data.converted_amount))
    .catch(error => console.log('Error converting currencies: ', error))
  }
  return (
    <>
       <div className="container mx-auto flex justify-center items-center mt-5 p-4 sm:p-10">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <h1 className="text-center text-xl font-bold mb-4">Currency Converter</h1>
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="w-full sm:w-1/2 mr-0 sm:mr-4 mb-2 sm:mb-0">
              <label htmlFor="fromCurrency" className="font-semibold mb-1 block">From</label>
              <select id="fromCurrency" className="px-4 py-2 rounded-md w-full" onChange={e => setFromCurrency(e.target.value)}>
                {currencies.map(currency => <option key={currency.code} value={currency.code}>{currency.code}</option>)}
              </select>
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="toCurrency" className="font-semibold mb-1 block">To</label>
              <select id="toCurrency" className="px-4 py-2 rounded-md w-full" onChange={e => setToCurrency(e.target.value)}>
                {currencies.map(currency => <option key={currency.code} value={currency.code}>{currency.code}</option>)}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="font-semibold mb-1 block">Amount</label>
            <input type="number" id="amount" className="px-4 py-2 rounded-md w-full bg-gray-100" onChange={e => setAmount(e.target.value)} />
          </div>

          <button className="w-full bg-green-500 text-white py-2 rounded-md" onClick={convertCurrency}>Convert</button>

          {converted && <p className="mt-4">{amount} {fromCurrency} = {converted} {toCurrency}</p>}
        </div>
      </div>
    </>
  );
}
