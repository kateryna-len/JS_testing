//Task 86 a)

function countNumber(number) {
  if (typeof number === 'number') {
    return (number + '').replace('.', '').length;
  } else {
    let err = 'must be number'
    return err
  }
}

//Task 330

function perfectNumber(num) {
  let sum = 0;
  let reminder;
  for (let i = 1; i < num - 1; i++) {
    reminder = num % i;
    if (reminder === 0) {
      sum += i
    }
  } if (num === sum) {
    let result = 'Досконале число'
    return result
  } else {
    let err = 'Не досконале число'
    return err
  }

}

console.log(perfectNumber(28)) //6, 28, 496
console.log(countNumber(567))

module.exports = { countNumber, perfectNumber }

/*test('Need to check the number is perfect', () => {
    let result = 'Досконале чмсло'
    let error = 'Не досконале число'
    expect(perfectNumber(6)).toBe(result)
    expect(perfectNumber(8)).toBe(error)
    expect(perfectNumber(28)).toBe(result)
    expect(perfectNumber(496)).toBe(result)
    expect(perfectNumber(44)).toBe(error)
  }) */
