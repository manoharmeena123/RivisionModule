

// // <number>: direct insert the number
// // d: duplicate the last number
// // +: add the last two numbers
// // c: clear the last number

// const exampleArr = [
//     '2', // [2]
//     '5', // [2, 5]
//     'd', // [2, 5, 10]
//     '3', // [2, 5, 10, 3]
//     '+', // [2, 5, 10, 3, 13]
//     '6', // [2, 5, 10, 3, 13, 6]
//     'c', // [2, 5, 10, 3, 13]
//     '3', // [2, 5, 10, 3, 13, 3]
//   ]
  
//   // sum of the array = 36

  
//   const Array = ()=>{

//   }

//   Array()


// let str = "hello";

function ReverseString(str){
  let bag ="";
 for(let i=str.length-1; i>=0; i--){
 bag+=str[i]

 }
return bag
}


console.log(ReverseString("hello"))