import operate from './operate';

describe('Math operation', () => {
  test('Should add 5 + 5 = 10', () => {
    const total = operate('5', '5', '+');
    expect(total).toEqual('10');
  });
  test('Should subtract 15 - 5 = 10', () => {
    const total = operate('15', '5', '-');
    expect(total).toEqual('10');
  });
  test('Should multiply 5 x 5 = 25', () => {
    const total = operate('5', '5', 'x');
    expect(total).toEqual('25');
  });
  test('Should divid 5 ÷ 5 = 1', () => {
    const total = operate('5', '5', '÷');
    expect(total).toEqual('1');
  });
  test('The remainder of 5 ÷ 5 should be 0', () => {
    const total = operate('5', '5', '%');
    expect(total).toEqual('0');
  });
});
