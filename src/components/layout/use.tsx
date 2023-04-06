import { Outlet } from "react-router-dom";

import Header from "../../utils/header";
import Footer from "../../utils/footer";

type Props = {};

const UserLayout = (props: Props) => {
  return (
    <>
      {/* Header */}
      <header className="bg-red-500 ">
        <Header></Header>
      </header>
      {/* Content */}
      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default UserLayout;
