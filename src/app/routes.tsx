import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import ListingDetail from "./components/ListingDetail";
import CreateListing from "./components/CreateListing";
import MySpace from "./components/MySpace";
import ValidationQueue from "./components/ValidationQueue";
import AdminDashboard from "./components/AdminDashboard";
import BrowseListings from "./components/BrowseListings";

export const router = createBrowserRouter([
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
    ],
  },
]);
