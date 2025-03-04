import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./components/Home";
import Headphone from "./components/Headphone";
import Speker from "./components/Speker";
import Earphone from "./components/Earphone";
import Details1 from "./components/ProductDetails1";
import Details2 from "./components/ProductDetails2";
import Details3 from "./components/ProductDetails3";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/headphone"
        element={
          <MainLayout>
            <Headphone />
          </MainLayout>
        }
      />
      <Route
        path="/speker"
        element={
          <MainLayout>
            <Speker />
          </MainLayout>
        }
      />
      <Route
        path="/earphone"
        element={
          <MainLayout>
            <Earphone />
          </MainLayout>
        }
      />
      <Route
        path="/product/1"
        element={
          <MainLayout>
            <Details1 />
          </MainLayout>
        }
      />
      <Route
        path="/product/2"
        element={
          <MainLayout>
            <Details2 />
          </MainLayout>
        }
      />
      <Route
        path="/product/3"
        element={
          <MainLayout>
            <Details3 />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
