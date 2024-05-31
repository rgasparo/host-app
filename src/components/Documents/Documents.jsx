// Documents.jsx in host-app
import { useState } from "react";
// import List from "todo_components/List";
// import Input from "todo_components/Input";
import App from "todo_components/App";

function Documents() {
  const [newTodo, setNewTodo] = useState("");
  // const [todos, setTodos] = useState([]);
  // const onSubmit = () => {
  //   setTodos((prev) => [...prev, newTodo]);
  //   setNewTodo("");
  // };

  return (
    <>
      <App/>
      {/* <Input value={newTodo} onChange={setNewTodo} onSubmit={onSubmit} />
      <List items={todos} /> */}
    </>
  );
}

export default Documents;