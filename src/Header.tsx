import { NavLink } from "react-router-dom";
import { LogIn, LogOut, Moon, Sun, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { LoginRegisterModal } from "./components/LoginRegisterModal";
import { useTheme } from "./contexts/ThemeContext";
import { useAuth } from "./contexts/AuthContext";

export const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={`flex justify-between h-15 items-center border-1 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
    }`}>
      <NavLink to="/">
        <h1
          className={`font-bold text-2xl transition-colors duration-300 ${
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
              {isAuthenticated ? (
                <LogOut
                  className={`transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
                  onClick={logout}
                />
              ) : (
                <LogIn
                  className={`transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
                  onClick={() => setIsModalOpen(true)}
                />
              )}
            </li>
            <li className="cursor-pointer">
              <ShoppingCart
                className={`transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
              />
              <div className="relative bottom-6 left-4 size-2.5 rounded-full text-[.5rem] flex items-center justify-center font-medium shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                3
              </div>
            </li>
            <li>
              <button
                className={`cursor-pointer p-2 rounded-lg transition-colors duration-300 ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
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
              {isAuthenticated ? (
                <button
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm w-24 h-7 cursor-pointer text-center me-2 mb-2"
                  onClick={logout}
                >
                  Cerrar Sesión
                </button>
              ) : (
                <button
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm w-20 h-7 cursor-pointer text-center me-2 mb-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Login
                </button>
              )}
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
