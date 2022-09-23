import React, { useState } from 'react';

const Input = ({children}) => {
  const [cor, setCor] = useState('#aaaa');

  return (
    <>
      <div style={{ color: cor }}>
        <h1>Texto</h1>
      </div>
      {children}
      <form action="submit">
        <input type="text"  onChange={(valor) => {setCor(valor.target.value)}}></input>
      </form>
    </>
  );
};

export default Input;
