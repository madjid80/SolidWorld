import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="*" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
