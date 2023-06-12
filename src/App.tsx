import './App.css';
import LoginScreen from './pages/login';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApplicationLayout } from './shared/layout';
import { Dashboard } from './pages/Dashboard';
import { Schema } from './pages/Schema';
import { Configuration } from './pages/Configuration';
import { Syncronization } from './pages/Sync';
import { MapperList } from './pages/Schema/Sections/List';
import { ImportSchema } from './pages/Schema/Sections/Import';
import { MapSchema } from './pages/Schema/Sections/ManualMap';

var router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Outlet />
    </div>,
    children: [
      {
        path: "/app",
        element: <div>
          <ApplicationLayout>
            <Outlet />
          </ApplicationLayout>
        </div>,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          },
          {
            path: "settings",
            element: <Configuration />
          },
          {
            path: "Schema",
            element: <Schema />,
            children: [
              {
                path: "",
                element: <MapperList />
              },
              {
                path: "import",
                element: <ImportSchema />
              },
              {
                path: "map",
                element: <MapSchema />
              }
            ]
          },
          {
            path: "syncronization",
            element: <Syncronization />
          }
        ]
      },
      {
        path: "/auth",
        element:<LoginScreen />
      }
    ]
  }
]);


export default function App() {
  return (
    <RouterProvider router={router} />
  );
}