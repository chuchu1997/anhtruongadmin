import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

import { Navigate } from "react-router-dom";

import Home from "./pages/Dashboard";
import About from "./pages/About";
import Header from "./components/Header";

import Login from "./pages/Login";
import { PrivateRoute } from "./auth/PrivateRoute";
import Layout from "./layout/layout";
import CreateProductView from "./pages/product/createProduct";

function App() {
  let isLogged = localStorage.getItem("access_token");

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={isLogged != null ? <Home /> : <Navigate to="/login" />} />
          <Route path="/create-product" element={<CreateProductView />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Routes path="/" element={<Layout></Layout>}>
        <Route path="/" element={isLogged != null ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes> */}
    </Router>
  );
}

export default App;
