// App.jsx in host-app
// import { useState } from "react";
// import List from "todo_components/List";
// import Input from "todo_components/Input";

import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./Router";
import Loading from './components/statics/Loading'

function App() {
  // const [newTodo, setNewTodo] = useState("");
  // const [todos, setTodos] = useState([]);
  // const onSubmit = () => {
  //   setTodos((prev) => [...prev, newTodo]);
  //   setNewTodo("");
  // };

  return (
    <>
    <Router>
      <Suspense fallback={<Loading/>}>
          <AppRouter/>
      </Suspense>
    </Router>
      {/* <Input value={newTodo} onChange={setNewTodo} onSubmit={onSubmit} />
      <List items={todos} /> */}
    </>
  );
}

export default App;