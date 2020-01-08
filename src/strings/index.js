const split = (str, delim) => {
  // write code for strings.split
return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
// const split = str.split("");
// const arr = []
// for(let i=0; i<split.length; i+=2){
//   arr.push(split[i]+split[i+1])
// }
// return arr
return str.match(/(..?)/g)
}

const reverse = (str) => {
  // write code for strings.reverse
return str.split("").reverse().join("")
}

module.exports = {
  split,
  pairs,
  reverse
}