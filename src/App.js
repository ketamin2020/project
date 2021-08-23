import "./styles/index.css";
import { Suspense } from "react";
import Layout from "./layout/Layout";
import { Context } from "./context/Context";
import data from "./context/dataForContext";
import { BrowserRouter } from "react-router-dom";
import SubHeaderNav from "./containers/SubHeaderNav/SubHeaderNav";
import Header from "./containers/Header/Header";
import HeaderMobile from "./containers/Header/HeaderMobile";
import Slider from "./containers/Slider/Slider";
import PopularItems from "./containers/PopularItems/PopularItems";
import AllCategories from "./containers/AllCaregories/AllCategories";
import AboutService from "./containers/AboutService/AboutService";
import Footer from "./containers/Footer/Footer";
// ------------------
import Accessories from "./containers/Accessories/Accessories";
import ServiceCenter from "./containers/ServiceCenter/ServiceCenter";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Context.Provider value={data}>
          <Layout>
            <SubHeaderNav />
            <Header />
            <HeaderMobile />
            <Slider />
            <PopularItems />
            <AllCategories />
            <AboutService />
            <Accessories />
            <ServiceCenter />
            <Footer />
          </Layout>
        </Context.Provider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
