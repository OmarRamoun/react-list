import styled from 'styled-components';

const StyledNumber = styled.div`
  background: #dfdfdf;
  font-size: 2rem;
  font-weight: bold;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Number = ({ length }) => {
  return (
    <StyledNumber>
      {length} Item{length !== 1 ? 's' : null}
    </StyledNumber>
  )
}

export default Number;
