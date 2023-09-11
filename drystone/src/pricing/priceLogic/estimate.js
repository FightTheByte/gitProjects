export function estimate(rate, cost){
    return Math.ceil((tonnage*(rate*4))+(tonnage*cost));
};