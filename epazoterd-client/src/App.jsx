import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/homepage/homepage";
import About from "./pages/about/about";
import Menu from "./pages/menu/menu";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/quienes-somos" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/contacto" element={<Contact />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
