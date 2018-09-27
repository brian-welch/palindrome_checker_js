const str = 'oiruygyuri'; // Given sample string to analyze
const arr = str.split('');
const palCheck = (input) => {
  let length = input.length;
  let iter = (Math.floor(length/2));
  let res = 'It\'s a palindrome!';
  let iterations = 0;
  for (let i = 0; i < iter; i++) {
    iterations++;
    if (input[i] !== input[(length - (i+1))]){
      res = "It's not a palindrome!";
      break;
    }
  }
  console.log('Iterations: ' + iterations);
  console.log(res);
}

palCheck(arr);
