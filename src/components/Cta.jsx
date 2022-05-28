import styled from 'styled-components';


const StyledCta = styled.div.attrs({
  className: "mt-16 border-t border-gray-200"
})``;


const Cta = ({ children }) => {
  return (
    <StyledCta>
      {children}
    </StyledCta>
  )
}

export default Cta;
