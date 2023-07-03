import { Outlet } from "react-router-dom";

import Header from "../../utils/header";
import Footer from "../../utils/footer";
import Slider from "../../utils/slider";

const UserLayout = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-red-500 ">
        <Header></Header>
      </header>
      <Slider></Slider>
      {/* Content */}
      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default UserLayout;
