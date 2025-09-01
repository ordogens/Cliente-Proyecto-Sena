import { NavLink } from "react-router-dom";
import { LogIn, Moon, Sun, ShoppingCart } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="bg-[#ffffff] flex justify-between h-15 items-center border-1 border-gray-300">
      <NavLink to="/">
        <h1 className="font-bold text-2xl pl-3">CraftYourStyle</h1>
      </NavLink>
      <div className="flex pr-3">
        <ul className="flex gap-x-2 ">
          <li>{/* <NavLink to="/Hombre">Hombre</NavLink> */}</li>
          <li>{/* <NavLink to="/Mujer">Mujer</NavLink> */}</li>
          <ul className="flex gap-x-3 ">
            <li className="cursor-pointer">
              <LogIn />
            </li>
            <li className="cursor-pointer">
              <ShoppingCart />
              <div className="relative bottom-6 left-4 size-2.5 rounded-full text-[.5rem] flex items-center justify-center font-medium shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                3
              </div>
            </li>
            <li>
              <button className="cursor-pointer">
                {darkMode ? (
                  <Moon onClick={() => setDarkMode(false)} />
                ) : (
                  <Sun
                    className="text-yellow-300"
                    onClick={() => setDarkMode(true)}
                  />
                )}
              </button>
            </li>
          </ul>
        </ul>
      </div>
    </header>
  );
};
