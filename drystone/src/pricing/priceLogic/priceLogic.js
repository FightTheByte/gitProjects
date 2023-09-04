export async function priceLogic(length, height){
  const grndWork = 12;
  const mSqr = length * height;

  const hourlyRate = {
    low: 20,
    avg: 27.25,
    high: 44
  };
  
  const matCost = {
    low: 100,
    avg: 200,
    high: 300 
  };

  const lowEst = await Math.round((mSqr*(hourlyRate.low*4))+(mSqr*matCost.low));
  const highEst = await Math.round((mSqr*(hourlyRate.high*4))+(mSqr*matCost.high));
  const avgEst = await Math.round((mSqr*(hourlyRate.avg*4))+(mSqr*matCost.avg));
  const grndEst = await Math.round((grndWork + (0.3*(hourlyRate.low*4))) * length);
  
  return [
    lowEst,
    avgEst,
    highEst,
    grndEst
  ]

};
