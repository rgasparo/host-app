// src/App.jsx
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./Router";
import Loading from "./components/statics/Loading";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Router>
          <Header />
        <Suspense fallback={<Loading />}>
          <AppRouter />
        </Suspense>
      </Router>
    </>
  );
}

export default App;