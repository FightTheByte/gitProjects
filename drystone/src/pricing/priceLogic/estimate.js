export function estimate(rate, cost, tonnage){
    return Math.ceil((tonnage*(rate*4))+(tonnage*cost));
};