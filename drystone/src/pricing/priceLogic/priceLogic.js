export async function priceLogic(length, height){
  const grndWork = 12;
  const tonnage = length * height;
  

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

  const lowEst = await Math.round((tonnage*(hourlyRate.low*4))+(tonnage*matCost.low));
  const highEst = await Math.round((tonnage*(hourlyRate.high*4))+(tonnage*matCost.high));
  const avgEst = await Math.round((tonnage*(hourlyRate.avg*4))+(tonnage*matCost.avg));
  const grndEst = await Math.round((grndWork + (0.3*(hourlyRate.low*4))) * length);
  
  return [
    {
      est: lowEst,
      matCost: matCost.low,
      rate: hourlyRate.low
    },
    {
      est: avgEst,
      matCost: matCost.avg,
      rate: hourlyRate.avg
    },
    {
      est: highEst,
      matCost: matCost.high,
      rate: hourlyRate.high
    },
    {
      grndEst,
      tonnage: Math.ceiling(tonnage)
    }
  ]

};
