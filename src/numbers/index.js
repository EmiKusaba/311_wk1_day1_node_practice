const isEven = (num) => {
  // write code for numbers.isEven
  if (num %2 ===0 ){
    return true
  }else{
    return false
  }

}

const sum = (arr) => {
  // write code for numbers.sum
  // var sum = 0;
  // for( i=0; i<arr.length, i++ ;){
  //  sum += arr[i];
  // }
  // console.log(arr);
  return arr.reduce((a,b) => a + b, 0);
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  return arr.reduce((a, b) => a + b === sum);
}

module.exports = {
  isEven,
  sum,
  comboSum
}