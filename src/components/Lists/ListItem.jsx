import CheckBox from './CheckBox';
import Label from './Label';
import FaButton from './FaButton';
import styled from 'styled-components';


const InnerWrapper = styled.div.attrs(props => (
    {
      className: `flex bg-gray-100 rounded m-2 px-4 h-16 items-center relative decoration-2 decoration-indigo-500 ${props.item.complete && "line-through"} overflow-hidden`
    }
  )
)``;

const StyledLi = styled.li.attrs(props => (
    {
      className: `px-2 sm:w-1/2 w-full`
    }
  )
)``;


const ListItem = ({ item, ...props }) => {
  return (
    <StyledLi>
      <InnerWrapper
        item={item}
        onDoubleClick={() => props.handleCheck(item.id)}
      >
        <CheckBox item={item} {...props} />
        <Label    item={item} />
        <FaButton item={item} {...props} />
      </InnerWrapper>
    </StyledLi>
  )
}


export default ListItem;
