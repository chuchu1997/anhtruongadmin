import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ProductAPI } from "./api/product/productAPI";

import { Button } from "@mantine/core";
import CardComponent from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProduct] = useState([]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <Button
        onClick={async () => {
          let ss: any = await ProductAPI.getAllProducts();
          setProduct(ss.data.products);
        }}
      >
        HEHE
      </Button>

      {products.map((productItem: any) => {
        return <CardComponent title={productItem.title} imageSRC={productItem.imagesObject[0].path}></CardComponent>;
      })}

      {/* <Button
        onClick={async () => {
          var response = await ProductAPI.getAllProducts();
          console.log("response", response);
        }}
      >
        TEST
      </Button> */}

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
