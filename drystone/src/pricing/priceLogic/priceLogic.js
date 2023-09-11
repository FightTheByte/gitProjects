export async function priceLogic(length, height){
  const grndWork = 12;
  const tonnage = await Math.ceil(length * height);

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

  function estimate(rate, cost){
    return Math.ceil((tonnage*(rate*4))+(tonnage*cost));
  };

  const lowEst = await estimate(hourlyRate.low, matCost.low);
  const highEst = await estimate(hourlyRate.avg, matCost.avg);
  const avgEst = await estimate(hourlyRate.high, matCost.high);
  const grndEst = await Math.ceil((grndWork + (0.3*(hourlyRate.low*4))) * length);
  
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
      tonnage
    }
  ]

};
