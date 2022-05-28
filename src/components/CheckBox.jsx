import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs(props => (
    {
      className: "checked:bg-indigo-600",
      type: "checkbox",
      name: "item",
      id:   "item" + props.item.id,
    }
  )
)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.7rem;
`;

// const themedCheckbox = (
//   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
//     <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//     <path d="M22 4L12 14.01l-3-3" />
//   </svg>
// );

const CheckBox = ({ item, ...props }) => {
  return (
    <StyledCheckbox
      item={item}
      checked={item.complete}
      onChange={() => props.handleCheck(item.id)}
    />
  )
}

export default CheckBox;
