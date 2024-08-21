import logo from "../asset/logo.png";
import { CiSearch } from "react-icons/ci";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-blue-500 text-white shadow-lg flex items-center px-4">
      <div className=" w-full flex justify-between items-center">
        <img src={logo} alt="" className="h-10 " />
        <div className="bg-slate-400 p-2 flex w-[50%] items-center rounded-md ">
          <input type="text" className="w-full outline-none bg-transparent " />
          <CiSearch />
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
