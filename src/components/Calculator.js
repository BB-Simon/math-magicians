import Button from './Button';
import charecters from './charecters';

const Calculator = () => (
  <div className="calculator-container">
    <div className="calculator-header">
      <span>0</span>
    </div>
    <div className="item-container">
      {charecters && charecters.map(({ char, name }) => (
        <Button
          key={name}
          className={`item item-${name}`}
          title={char.toString()}
        />
      ))}
    </div>
  </div>
);

export default Calculator;
