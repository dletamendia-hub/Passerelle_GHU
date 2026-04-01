import { createBrowserRouter, createHashRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import ListingDetail from "./components/ListingDetail";
import CreateListing from "./components/CreateListing";
import MySpace from "./components/MySpace";
import ValidationQueue from "./components/ValidationQueue";
import AdminDashboard from "./components/AdminDashboard";
import BrowseListings from "./components/BrowseListings";
import FavoritesPage from "./components/FavoritesPage";

const routes = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "listing/:id", Component: ListingDetail },
      { path: "create", Component: CreateListing },
      { path: "my-space", Component: MySpace },
      { path: "validation", Component: ValidationQueue },
      { path: "admin", Component: AdminDashboard },
      { path: "browse", Component: BrowseListings },
      { path: "favorites", Component: FavoritesPage },
    ],
  },
];

const useHashRouter = import.meta.env.PROD && import.meta.env.BASE_URL === "/Passerelle_GHU/";

export const router = useHashRouter
  ? createHashRouter(routes)
  : createBrowserRouter(routes);
