import Button from './Button';
import styled from 'styled-components';

const StyledButtonContainer = styled.div.attrs({
  className: "flex flex-wrap max-w-3xl items-center justify-center mt-16 mx-auto mb-4 gap-4",
})``;

const ButtonContainer = ({ items, saveState, inputValue, setInput, alert, setAlert, inputRef }) => {

  const generateRandomId = (items) => {
    const proposal = Math.floor(Math.random() * 100000000);
    const result = items.findIndex(item => item.id === proposal);
    if (result !== -1) {
      generateRandomId(items);
    } else {
      return proposal;
    }
  }

  const handleAdd = () => {
    inputValue && saveState([
      ...items,
      {
        id: generateRandomId(items),
        content: inputValue,
        complete: false
      }
    ]);
    handleClean();
    setAlert(
      {
        show: true,
        title: "Added Item #" + items[items.length - 1].id,
        description: "Item Title: " + items[items.length - 1].content,
        action: "add"
      }
    )
  }

  const handleRemove = () => {
    const remainingItems = items.filter(item => item.complete === false);
    const removedItems = items.filter(item => item.complete);
    saveState(remainingItems);
    removedItems.forEach(item => {
      setAlert(
        {
          show: true,
          title: "Removed Item #" + item.id,
          description: "Item Title: " + item.content,
          action: "remove"
        }
      )
    })
  }

  const handleUpdate = () => {
    const updatedItems = items.map(item => (
      item.complete ?
        { ...item, content: inputValue, complete: false } :
        item
    ));
    inputValue && saveState(updatedItems);
    handleClean()
    updatedItems.forEach(item => {
      setAlert(
        {
          show: true,
          title: "Updated Item #" + item.id,
          description: "Item Title: " + item.content,
          action: "update"
        }
      )
    })
  }

  const handleClean = () => {
    inputRef.current.focus();
    setInput("");
  }

  const ButtonsList = [
    {
      type: "add",
      text: "Add",
      handler: handleAdd,
    },
    {
      type: "remove",
      text: "Remove",
      handler: handleRemove,
    },
    {
      type: "update",
      text: "Update",
      handler: handleUpdate,
    },
    {
      type: "clean",
      text: "Clean",
      handler: handleClean,
    },
  ]

  return (
    <StyledButtonContainer>
      {
        ButtonsList.map(item => (
          <Button
            onClick={item.handler}
            type={item.type}
          >
            {item.text}
          </Button>
        ))
      }
    </StyledButtonContainer>
  )
}

export default ButtonContainer;
