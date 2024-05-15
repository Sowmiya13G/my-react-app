import React, { useState } from "react";

function Crud() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setResult] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "value1") {
      setValue1(Number(value));
    } else if (name === "value2") {
      setValue2(Number(value));
    }
  };

  const handleAddition = () => {
    const input1 = isNaN(value1) ? 0 : value1;
    const input2 = isNaN(value2) ? 0 : value2;
    setResult(input1 + input2);
  };

  const handleSubtraction = () => {
    const input1 = isNaN(value1) ? 0 : value1;
    const input2 = isNaN(value2) ? 0 : value2;
    setResult(input1 - input2);
  };

  const handleMultiplication = () => {
    const input1 = isNaN(value1) ? 0 : value1;
    const input2 = isNaN(value2) ? 0 : value2;
    setResult(input1 * input2);
  };

  const handleDivision = () => {
    const input1 = isNaN(value1) ? 0 : value1;
    const input2 = isNaN(value2) ? 0 : value2;
    if (input2 !== 0) {
      setResult(input1 / input2);
    } else {
      alert("Cannot divide by zero!");
    }
  };

  return (
    <div className="Counter">
      <h2>Calculator</h2>
      <div>
        <input
          type="number"
          name="value1"
          value={value1}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="value2"
          value={value2}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
        <button onClick={handleMultiplication}>Multiply</button>
        <button onClick={handleDivision}>Divide</button>
      </div>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default Crud;
