import './App.css';
import LoginScreen from './pages/login';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApplicationLayout } from './shared/layout';
import { Dashboard } from './pages/Dashboard';
import { Syncronization, buildSynchronizerPath } from './pages/Sync';
import { buildSettingSectionsPaths } from './pages/Configuration';
import { buildSchemaPath } from './pages/Schema';

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
          buildSettingSectionsPaths(),
          buildSchemaPath(),
          buildSynchronizerPath()
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