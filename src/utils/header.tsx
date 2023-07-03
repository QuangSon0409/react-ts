import { Link, useNavigate } from "react-router-dom";
import { isAuthenticate } from "./localStroage";

type Props = {};

const Header = (props: Props) => {
  const user = isAuthenticate();
  console.log(user);
  const navigate = useNavigate();
  const handleLogOut = () => {
    if (user) {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("cartItems");
      navigate("/");
    }
  };

  return (
    <div className="container w-2/3 h-[64px] mx-auto flex items-center gap-7">
      <Link to={"/"}>
        <img className="w-[64px] pl-2" src="../../logo.png" alt="" />
      </Link>
      <input
        className="pl-2 rounded-lg grow h-[34px] "
        type="text"
        placeholder="search"
      />
      {!user ? (
        <button className="">
          <Link to={"/signin"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px]"
              viewBox="0 0 448 512"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <p className="text-[10px] text-white hidden">SignIn</p>
          </Link>
        </button>
      ) : (
        ""
      )}
      {/* <button className="">
        <Link to={"/signin"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px]"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <p className="text-[10px] text-white hidden">SignIn</p>
        </Link>
      </button> */}
      <button className="">
        <Link to={"/cart"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] "
            viewBox="0 0 576 512"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
          </svg>
          <p className="text-[10px] text-white hidden">Cart</p>
        </Link>
      </button>
      <button
        className=""
        onClick={() => {
          handleLogOut();
        }}
      >
        {user ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[20px] "
          >
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
          </svg>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default Header;
