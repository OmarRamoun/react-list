import styled from 'styled-components';

const StyledLabel = styled.label.attrs({
  className: "title-font font-medium",
})``;

const Label = ({ item }) => {
  return (
    <StyledLabel>
      {item.content}
    </StyledLabel>
  )
}

export default Label;
