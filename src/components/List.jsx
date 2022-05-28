import ListItem from './ListItem';
import styled from 'styled-components';

const StyledList = styled.ul.attrs({
  className: "flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
})``;

const List = ({ items, saveItems, ...props }) => {

  const handleCheck = (id) => {
    const newItems = items.map(item => (
      item.id === id ?
        { ...item, complete: !item.complete } :
        item
    ));
    saveItems(newItems);
  }

  const handleDelete = (id) => {
    const newState = items.filter(item => item.id !== id);
    saveItems(newState);
  }

  return (
    <>
      {
        items ? (
          <StyledList>
            {
              items.map(item => (
                <ListItem
                  key={item.id}
                  item={item}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
                  {...props}
                />
              ))
            }
          </StyledList>
        ) : (
          <StyledList>
            <h2
              style={{
                textAlign: 'center',
                margin: '0 auto',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#999',
                padding: '1rem 0',
              }}
            >{props.value}</h2>
          </StyledList>
        )
      }
    </>
  )
}

export default List;
