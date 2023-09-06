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
        return x.est + prevState[3].grndEst;
      }))
      :setPricing(prevState => prevState.map((x, index) =>{
        if(index===3){return x};
        return x.est - prevState[3].grndEst;
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
                  <h3>{index===0?'Lowest':index===1?'Average':'Highest'} estimate is: £{x.est}</h3>
                  {
                    <ul className="priceList">
                      <li>Price per tonne of stone: £{x.matCost}</li>
                      <li>Price per hour of Stonemason: £{x.rate}</li>
                      <li>Tonnage of stone required: {pricing[3].tonnage}</li> 
                      <li>Total cost of stone: £{x.matCost * pricing[3].tonnage}</li> 
                    </ul>
                  }
                </div>
              })
              :''
            }
          </div>
          <div className="btnRow">
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