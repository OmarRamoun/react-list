import { forwardRef } from 'react';
// import styled from 'styled-components';

// const StyledInput = styled.input.attrs({
//   placeholder: 'Enter Your Todo item...',
//   className: 'font-bold'
// })``;

const Input = forwardRef((props, ref) => {
  return (
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex max-w-xl mx-auto w-full md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative w-full sm:mr-4 mr-2">
          <input ref={ref} {...props} autoFocus required placeholder="What do you have to do today?" type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
    </div>
  )
})

export default Input;
