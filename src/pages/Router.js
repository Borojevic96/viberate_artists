import React from "react";
import {
  Route,
  Routes,
  Outlet,
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from "@components/Layout";
import Home from "@pages/Home";
import ArtistDetail from "@pages/ArtistDetail";
import Error404 from "@pages/Error404";

const RouterManager = () => {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Home />} />
          <Route path="/artist/:uuid" element={<ArtistDetail />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterManager;
