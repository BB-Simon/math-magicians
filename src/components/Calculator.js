import { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import charecters from './charecters';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleOnClick = (key) => {
    const {
      total: calcTotal,
      next: calcNext,
      operation: calcOperation,
    } = calculate({ total, next, operation }, key);

    setTotal(calcTotal);
    setNext(calcNext);
    setOperation(calcOperation);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <span>{ next || total || 0 }</span>
      </div>
      <div className="item-container">
        {charecters && charecters.map(({ char, name }) => (
          <Button
            key={name}
            className={`item item-${name}`}
            title={char}
            onClick={() => handleOnClick(char)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
