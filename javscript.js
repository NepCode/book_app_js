let N = [23,43,1,2,3,5,0,0,0,5,4,-1,-2,-5,-6];
let total_positives_n = 0,total_negatives_n= 0,total_zeros_n = 0;

for (let index = 0; index < N.length; index++) {

    if( N[index] > 0 ) total_positives_n ++;
    else if( N[index] < 0) total_negatives_n++;
    else total_zeros_n++;
    
}
console.log('positive' + total_positives_n);
console.log('negaive' + total_negatives_n);
console.log('zero' + total_zeros_n);