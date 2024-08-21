import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <aside className="fixed top-16 left-0 w-64 h-full bg-gray-800 text-white flex flex-col py-4">
      <nav className="mt-4 text-xl">
        <ul className="space-y-2">
          <li>
            <button
              onClick={handleClick}
              className="block px-4 py-2 hover:bg-blue-700 text-white  rounded-md w-full text-left"
            >
              Trading
            </button>
            {dropdown && (
              <div className="bg-white text-black mt-2 py-2 rounded-md shadow-lg">
                <ul>
                  <li>
                    <Link
                      to="/tradingbot"
                      className="block px-4 py-2 hover:bg-gray-300"
                    >
                      Trading Bot
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/tradingbal"
                      className="block px-4 py-2 hover:bg-gray-300"
                    >
                      Trade Balance
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/order"
                      className="block px-4 py-2 hover:bg-gray-300"
                    >
                      Order
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block px-4 py-2 hover:bg-blue-700 text-white  rounded-md w-full"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="block px-4 py-2 hover:bg-blue-700 text-white  rounded-md w-full"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
