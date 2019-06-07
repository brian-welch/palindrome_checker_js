const str = 'oiruygyuri'; // Given sample string to analyze
const palCheck = (input) => {
  let arr = input.split('');
  let max_iter = (Math.floor((arr.length)/2));
  let res = 'It\'s a palindrome!';
  let iter = 0;
  for (let i = 0; i < max_iter; i++) {
    iter++;
    if (arr[i] !== input[(arr.length - (i+1))]){
      res = "It's not a palindrome!";
      break;
    }
  }
  console.log('Iterations: ' + iter);
  console.log(res);
}

palCheck(str);
