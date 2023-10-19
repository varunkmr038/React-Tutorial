import React, { useRef } from "react";

function IndexForm() {
  const inputRef = useRef();

  const onSubmit = (e) => {
    alert("detail submitted is" + inputRef.current.value);
    e.preventDefault();
  };

  const onFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      Name: <input ref={inputRef} />
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onFocus}>Focus</button>
    </div>
  );
}

export default IndexForm;
