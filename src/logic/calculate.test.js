import calculate from './calculate';

describe('Calculator', () => {
  test('Should add 5 + 5 = 10', () => {
    const { total } = calculate({ total: '5', next: '5', operation: '+' }, '+');
    expect(total).toEqual('10');
  });
  test('Should subtract 15 - 5 = 10', () => {
    const { total } = calculate({ total: '15', next: '5', operation: '-' }, '-');
    expect(total).toEqual('10');
  });
  test('Should multiply 5 x 5 = 25', () => {
    const { total } = calculate({ total: '5', next: '5', operation: 'x' }, 'x');
    expect(total).toEqual('25');
  });
  test('Should divid 5 ÷ 5 = 1', () => {
    const { total } = calculate({ total: '5', next: '5', operation: '÷' }, '÷');
    expect(total).toEqual('1');
  });
});
