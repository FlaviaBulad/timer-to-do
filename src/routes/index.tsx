import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
