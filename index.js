// const handleSum = () => {
//   const num1 = document.getElementById("num1").value
//   const num2 = document.getElementById("num1").value
//   const result = document.getElementById("result")

//   const sum = Number(num1) + Number(num2)
//   if(num1 === ''){
//     result.innerText = `Please provide num1 in the input`
//     return
//   }
//   if(num2 === ''){
//     result.innerText = `Please provide num2 in the input`
//     return
//   }
//   (result.innerText = `Your Result is :  ${sum}`)
// }


// const handleSum = () => {
//   const num1 = document.getElementById("num1").value;
//   const num2 = document.getElementById("num2").value;
//   const sum = parseInt(num1) + parseInt(num2);
//   // const result = document.getElementById("result")
// //   document.write(result) it paste only our result 
// //  result.textContent = `Your result is :${sum}`;
//  document.getElementById('result').innerHTML = `Your result is : ${sum}`
// }
const increseElement = document.getElementById("counter");
let counter = 0;
increseElement.innerText = counter; 

const handleIncrease = () => {
  counter += 1;
  increseElement.innerText = counter;
};

const handleDecrease = () => {
  counter -= 1;
    increseElement.innerText = counter;
};


/////  prompt  
