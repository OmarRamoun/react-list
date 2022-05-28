import List from './List';

const ListDisplay = ({ items, ...props }) => {
  return (
    <>
      {
        items.length ?
          <List
            items={items}
            {...props}
          />
          : (
            <List
              value="List is Empty"
            />
          )
      }
    </>
  )
}

export default ListDisplay;
