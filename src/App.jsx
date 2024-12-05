import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Favs from "./Pages/Favs";
import Detail from "./Pages/Detail";
import Contact from "./Pages/Contact";
import { useContextGlobal } from "./Context/Context";


function App() {
  const { state } = useContextGlobal();

  return (
    <div className={state.theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page not found - Error 404</h1>} />
      </Routes>
      <Footer />
  </div>
  );
}

export default App;
