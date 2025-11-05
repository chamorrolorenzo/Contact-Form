import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../views/Login";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp; // <- export default
