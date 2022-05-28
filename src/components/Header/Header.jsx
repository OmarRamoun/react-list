import ListDisplay from './ListDisplay';
import Number from './Number';
import ButtonContainer from './ButtonContainer';
import { useState } from "react";


const Header = ({ inputValue, setInput }) => {

  return (
    <>
      <ButtonContainer
        items={state}
        saveState={saveState}
        inputValue={inputValue}
        setInput={setInput} />
      <Number length={state.length} />
    </>
  );
}

export default Header;
