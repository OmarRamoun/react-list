import { useState, useRef } from "react";
import Hero from "./components/Hero";
import ListDisplay from "./components/ListDisplay";
import Cta from "./components/Cta";
import ButtonsContainer from "./components/ButtonsContainer";
import Input from "./components/Input";
import Search from "./components/Search";
import Alert from "./components/Alert";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    transition: all 0.2s cubic-bezier(0.23, 1, 0.320, 1);
  }
`;

const Container = styled.section.attrs({
  className: "container px-5 py-24 mx-auto text-gray-600 body-font text-center",
})``;

function App() {

  const inputRef = useRef(null);

  const defaultItems = [
    {
      id: 1,
      content: "Hello World",
      complete: true,
    },
    {
      id: 2,
      content: "fix the issues",
      complete: false,
    },
    {
      id: 3,
      content: "i hate myself",
      complete: false,
    },
    {
      id: 4,
      content: "I love ISRA",
      complete: false,
    },
  ];

  const initialItems = localStorage.length
    ? JSON.parse(localStorage.getItem("todos"))
    : defaultItems;

  const [items, setItems] = useState(initialItems);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    title: "Default Title",
    description: "Default Description",
    action: "default Action"
  });

  const saveItems = (state) => {
    setItems(state);
    localStorage.setItem("todos", JSON.stringify(state));
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAlert = (title, description, action) => {
    return <Alert title={title} description={description} action={action} />;
  };

  return (
    <Container>
      <Hero />
      <ListDisplay items={items} saveItems={saveItems} />
      <Cta>
        <ButtonsContainer
          items={items}
          saveState={saveItems}
          inputValue={input}
          setInput={setInput}
          alert={alert}
          setAlert={setAlert}
          inputRef={inputRef}
        />
        <Input ref={inputRef} value={input} onChange={handleChange} />
        <Search items={items} setItems={setItems} value={search} setSearch={setSearch} />
      </Cta>
      {alert.show && handleAlert(alert.title, alert.description, alert.action)}
      <GlobalStyle />
    </Container>
  );
}

export default App;
