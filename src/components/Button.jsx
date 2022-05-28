import styled from 'styled-components';
import { CgRemove, CgAdd } from 'react-icons/cg';
import { BiXCircle } from 'react-icons/bi';
import { VscIssueReopened } from 'react-icons/vsc';

const StyledButton = styled.button.attrs({
  className: "flex justify-center w-40 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg active:bg-indigo-300 text-bold shadow-xl active:shadow-inner items-center gap-x-2"
})``;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton
      {...props}
    >
      {props.type === "add"    && <CgAdd     />}
      {props.type === "remove" && <BiXCircle />}
      {props.type === "clean"  && <CgRemove  />}
      {props.type === "update" && <VscIssueReopened  />}
      {children}
    </StyledButton>

  )
}

export default Button;
