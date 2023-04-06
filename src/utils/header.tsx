type Props = {};

const Header = (props: Props) => {
  return (
    <div className="container w-2/3 h-[64px] mx-auto flex items-center gap-7">
      <img className="w-[64px] pl-2" src="../../logo.png" alt="" />
      <input
        className="pl-2 rounded-lg grow h-[34px] "
        type="text"
        placeholder="search"
      />
    </div>
  );
};

export default Header;
