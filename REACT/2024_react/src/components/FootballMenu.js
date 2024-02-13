import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/clubs",
    element: <div>Clubs Prototype</div>,
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
