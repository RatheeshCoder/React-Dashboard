import React from 'react'
import ProductChart from '../ProductChart/ProductChart'
import CountryChart from '../CountryChart/CountryChart'
import CurrentYear from '../CurrentYearChart/CurrentYear'
import CustomerChart from '../CustomerChart/CustomerChart'
import "./AnalysisMain.css"

const AnalysisMain = () => {
  return (
    <div className="AnalysisMain">
        <h1>Analysis</h1>
        <ProductChart/>
        <CountryChart/>
        <CurrentYear/>
        <CustomerChart/>
    </div>
  )
}

export default AnalysisMain
