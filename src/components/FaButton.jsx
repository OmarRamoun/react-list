import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

const FaTrash = styled.button.attrs({
  className: "hover:text-indigo-500 absolute right-4 text-lg outline-0 active:text-indigo-300"
})`
  cursor: pointer;
  background: transparent;
  border-radius: 5px;
  border: none;
  color: 9ff;
`;

const FaButton = ({ item, ...props }) => {
  return (
    <FaTrash
      onClick={() => props.handleDelete(item.id)}
      as={FaTrashAlt}
      tabIndex={item.id}
      aira-label={`Delete ${item.name}`}
    />
  )
}

export default FaButton;
