import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const naviagte = useNavigate();
  return (
    <header className="bg-blue-500 p-4 text-white flex">
      <span
        className="text-2xl font-bold cursor-pointer"
        onClick={() => naviagte("/")}
      >
        Photo-memoir
      </span>
    </header>
  );
};

export default Header;
