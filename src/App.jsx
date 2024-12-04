import React, { useState } from "react";
import Home from "./Pages/Home/Home.jsx";
import Video from "./Pages/Videos/video.jsx";
import Navbar from "./Components/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />}></Route>
        <Route path="/video/:categoryId/:videoId" element={<Video />}></Route>
      </Routes>
    </div>
  );
};

export default App;
