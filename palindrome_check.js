const str = 'oiruygyuri'; // Given sample string to analyze
const arr = str.split('');
const palCheck = (input) => {
  let max_iter = (Math.floor((input.length)/2));
  let res = 'It\'s a palindrome!';
  let iter = 0;
  for (let i = 0; i < max_iter; i++) {
    iter++;
    if (input[i] !== input[(input.length - (i+1))]){
      res = "It's not a palindrome!";
      break;
    }
  }
  console.log('Iterations: ' + iter);
  console.log(res);
}

palCheck(arr);
