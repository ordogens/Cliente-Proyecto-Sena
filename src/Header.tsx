import { NavLink } from "react-router-dom";
import { LogIn, Moon, Sun, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { LoginRegisterModal } from "./components/LoginRegisterModal";
import { useTheme } from "./contexts/ThemeContext";

export const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-[#ffffff] flex justify-between h-15 items-center border-1 border-gray-300">
      <NavLink to="/">
        <h1
          className={`font-bold text-2xl ${
            isDarkMode ? "text-white" : "text-black"
          } pl-3`}
        >
          CraftYourStyle
        </h1>
      </NavLink>
      <div className="flex pr-3">
        <ul className="flex gap-x-2 ">
          <li>{/* <NavLink to="/Hombre">Hombre</NavLink> */}</li>
          <li>{/* <NavLink to="/Mujer">Mujer</NavLink> */}</li>
          <ul className="flex gap-x-3 ">
            <li className="cursor-pointer">
              <LogIn
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              />
            </li>
            <li className="cursor-pointer">
              <ShoppingCart
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              />
              <div className="relative bottom-6 left-4 size-2.5 rounded-full text-[.5rem] flex items-center justify-center font-medium shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                3
              </div>
            </li>
            <li>
              <button
                className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                onClick={toggleTheme}
              >
                {isDarkMode ? (
                  <Sun className="text-yellow-300 w-5 h-5" />
                ) : (
                  <Moon className="text-gray-700 w-5 h-5" />
                )}
              </button>
            </li>
            <li>
              <button
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm w-20 h-7 cursor-pointer text-center me-2 mb-2"
                onClick={() => setIsModalOpen(true)}
              >
                Login
              </button>
            </li>
          </ul>
        </ul>
      </div>

      <LoginRegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};
