import { useState, useRef, useEffect } from "react";
import Hero from "../components/Hero";
import ListDisplay from "../components/ListDisplay";
import Cta from "../components/Cta";
import ButtonsContainer from "../components/ButtonsContainer";
import Input from "../components/Input";
import Search from "../components/Search";
import Alert from "../components/Alert";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    transition: all 0.2s cubic-bezier(0.23, 1, 0.320, 1);
  }
`;

const Todo = () => {

  const API_URL = "http://localhost:3500/items";

  const inputRef = useRef(null);

  const initialItems = [];

  const [items, setItems] = useState(initialItems);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    title: "Default Title",
    description: "Default Description",
    action: "default Action",
  });
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Didn't fetch data from server");
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setLoading(false);
      }
    };
    // simulating slow data fetch
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAlert = (title, description, action) => {
    return <Alert title={title} description={description} action={action} />;
  };

  return (
    <>
      <Hero />
      {loading && <p style={{ color: "darkblue" }}>Loading...</p>}
      {fetchError && <p style={{ color: "red" }}>Error: {fetchError}</p>}
      {!fetchError && !loading && (
        <ListDisplay
          items={items}
          saveItems={setItems}
          apiUrl={API_URL}
          setFetchError={setFetchError}
        />
      )}
      <Cta>
        <ButtonsContainer
          items={items}
          saveState={setItems}
          inputValue={input}
          setInput={setInput}
          alert={alert}
          setAlert={setAlert}
          inputRef={inputRef}
          apiUrl={API_URL}
          setFetchError={setFetchError}
        />
        <Input ref={inputRef} value={input} onChange={handleChange} />
        <Search
          items={items}
          setItems={setItems}
          value={search}
          setSearch={setSearch}
        />
      </Cta>
      {alert.show && handleAlert(alert.title, alert.description, alert.action)}
      <GlobalStyle />
    </>
  );
}

export default Todo;
