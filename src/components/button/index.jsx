import React from "react";

const Button = (props) => {
  const { handleClick = () => {} } = props;
  return (
    <div>
      <button onClick={handleClick}  />
    </div>
  );
};
export default Button;
