import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./UI/AppLayout";
import EventsPage from "./Pages/EventsPage";
import CategoriesPage from "./Pages/CategoriesPage";
import AddCategoryPage from "./Pages/AddCategoryPage";
import SalesPage from "./Pages/SalesPage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import ProtectedRoute from "./Utils/ProtectedRoute";
import LoginPage from "./Pages/LoginPage";
import RegisterForm from "./Components/Authentication/RegisterForm";
import RegisterPage from "./Pages/RegisterPage";
type Props = {};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0, // how much time is data fresh (no network request will be requestet in this specified time)
    },
  },
});
const App = (props: Props) => {
  return(
  <QueryClientProvider client={queryClient}>
  <ReactQueryDevtools initialIsOpen={false} />
  <BrowserRouter>
    <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<Navigate replace to="home" />} />
      <Route path="home" element={
        <HomePage />
        } />
        <Route path="login" element={
        <LoginPage />
        } />
         <Route path="register" element={
        <RegisterPage />
        } />
      <Route path="events" element={
        <ProtectedRoute>
        <EventsPage />
        </ProtectedRoute>} />
      <Route path="events/:eventId" element={
        <ProtectedRoute>
        <EventDetailsPage />
        </ProtectedRoute>} />
      <Route path="categories" element={
        <ProtectedRoute>
        <CategoriesPage />
        </ProtectedRoute>} />
      <Route path="addCategory" element={
        <ProtectedRoute>
          <AddCategoryPage />
        </ProtectedRoute>} />
      <Route path="sales" element={
        <ProtectedRoute>
        <SalesPage />
        </ProtectedRoute>} />
      <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  <Toaster
    position="top-right"
    gutter={12}
    containerStyle={{ margin: "8px" }}
    toastOptions={{
      success: {
        duration: 3000,
      },
      error: {
        duration: 5000,
      },
      style: {
        fontSize: "16px",
        maxWidth: "500px",
        padding: "16px 24px",
        backgroundColor: "white",
        color: "var(--color-grey-700)",
      },
    }}
  />
</QueryClientProvider>
  );
};


export default App;
