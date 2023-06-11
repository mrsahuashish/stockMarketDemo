// routesConfig.js

import Dashboard from "./main/dashboard";
import Login from "./main/login/login";

// Define the route paths for before login and after login links
export const beforeLoginRoutes = [
    {
      path: "/",
      component: Login,
    }
    // Add more routes for before login links
  ];
  
  export const afterLoginRoutes = [
    {
      path: "/dashboard",
      component: Dashboard,
    }
    // Add more routes for after login links
  ];
  