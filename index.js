const myTransducer = Transducer([(item) => item + 'a', (item) => item + 'b']);

function Transducer(functions) {
  let i = 0;
  return function fn(item) {
    let result = item;

    for (let f = 0; f < functions.length; f++) {
      result = functions[f](result);
      console.log('i', ++i);
    }
    console.log(result);
    return result;
  };
}
const arr = [1, 2, 3, 4, 5];

console.log(arr.map(myTransducer));
