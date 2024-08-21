import React from "react";
import { Routes, Route } from "react-router-dom";
import Trading from "../component/Trading";
import Tradingbot from "../component/Tradingbot";
import Tradingbal from "../component/Tradingbal";
import Order from "../component/Order";
import Dashboard from "../component/Dashboard";
import Settings from "../component/Settings";
import Coin from "../component/Coin";

const ContentPage: React.FC = () => {
  return (
    <main className="ml-64 mt-16 p-4">
      <Routes>
        <Route path="/trading" element={<Trading />} />
        <Route path="/tradingbot" element={<Tradingbot />} />
        <Route path="/tradingbal" element={<Tradingbal />} />
        <Route path="/order" element={<Order />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coins" element={<Coin />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
  );
};

export default ContentPage;
