import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { priceLogic } from "./priceLogic/priceLogic";

import './pricing.css';

export const Pricing = () => {
    const [height, setHeight] = useState();
    const [length, setLength] = useState();
    const [pricing, setPricing] = useState();
    const [sftGrn, setSetGrn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      (async function(){
          await setLength(location.state.wallLength);
          await setHeight(location.state.height);
          const prices = await priceLogic(location.state.wallLength, location.state.height);
          setPricing(prices);
        }
      )();
    }, [location.state.height, location.state.wallLength]);

    useEffect(() => {
      if(!pricing)return;
      sftGrn
      ?setPricing(prevState => prevState.map((x, index) =>{
        if(index===3){return x};
        return x + prevState[3];
      }))
      :setPricing(prevState => prevState.map((x, index) =>{
        if(index===3){return x};
        return x - prevState[3];
      }))
    }, [sftGrn]);

    return(
        <>
          
          <div className='priceContainer'>
            {
              length && height
              ?pricing.map((x, index) => {
                if(index===3)return;
                return <div className="price" key={`price${index}`}>
                  <h3>{index==0?'Lowest':index===1?'Average':'Highest'} estimate is: £{x}</h3>
                  {
                    index==0?<p>Pricing assumes the cheapest or reclaimed stone, at £100 a tonne. This pricing also assumes the lowest recorded current wage for a Stonemason, at £20 per hour </p>
                    :index===1?<p>Pricing averages out the cost of stone of one tonne of stone, at £200 and applies the average wage of a Stonemason being £27.25 per hour</p>
                    :<p>Pricing assumes the highest end pricing for a tonne of luxury stone, at £300 a tonne. Then accounts for the higher end of a Stonemason's hourly pay, at £44 per hour</p>
                  }
                </div>
              })
              :''
            }
          </div>
          <div className="btnColumn">
            <button 
              className="softBtn"
              onClick={() => setSetGrn(!sftGrn)}
            >Add potential ground work costs </button>
            <button 
              className="softBtn"
              onClick={() => navigate('/input')}
            >Return to calculator </button>
          </div>
        </>
    )
}