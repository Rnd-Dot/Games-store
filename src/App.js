import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={ <Home /> }/>
      </Routes>
    </div>
  );
}

export default App;
