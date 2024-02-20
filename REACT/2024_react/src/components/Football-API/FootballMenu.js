import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FootballClubs from './FootballClubs';

const router = createBrowserRouter([
  {
    path: "/clubs",
    element: <FootballClubs/>,
  },
  {
    path: "/tabel",
    element: <div>Tabel Prototype</div>,
  },
]);

export default function FootballMenu({}) {
  return (
    <RouterProvider router={router} />
  )
}
