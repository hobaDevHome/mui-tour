import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";

import Home from "./components/pages/Home";
import Tour from "./components/pages/Tour";

const App = () => {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
