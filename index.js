const myTransducer = Transducer([(item) => item + 1, (item) => item * 5]);

function Transducer(functions) {
  return function (item) {
    let result = null;

    for (let f in functions) {
      result = f === 0 ? functions[f](item) : functions[f](result);
      console.log(result);
    }

    return result;
  };
}

console.log([1, 2, 3, 4, 5].map(myTransducer));
