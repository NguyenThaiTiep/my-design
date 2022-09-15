import React, { useState } from "react";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
