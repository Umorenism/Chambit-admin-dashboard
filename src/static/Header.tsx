// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-blue-500 text-white shadow-lg flex items-center px-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
    </header>
  );
};

export default Header;
